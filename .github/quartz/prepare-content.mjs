import { access, cp, mkdir, mkdtemp, readdir, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, "../..")

function canonicalLanguageTag(value) {
  try {
    return Intl.getCanonicalLocales(value)[0]
  } catch {
    return undefined
  }
}

function capitalize(value, locale) {
  if (value.length === 0) return value
  return value[0].toLocaleUpperCase(locale) + value.slice(1)
}

export function languageDisplayName(locale) {
  const displayNames = new Intl.DisplayNames([locale], {
    type: "language",
    languageDisplay: "standard",
  })

  return capitalize(displayNames.of(locale) ?? locale, locale)
}

export async function discoverLanguages(sourceDirectory) {
  const entries = await readdir(sourceDirectory, { withFileTypes: true })
  const languages = []

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith(".")) continue

    const canonicalLocale = canonicalLanguageTag(entry.name)
    if (!canonicalLocale) {
      throw new Error(
        `Invalid language directory "${entry.name}". Use a BCP 47 language tag such as "it", "en" or "pt-BR".`,
      )
    }

    if (entry.name !== canonicalLocale) {
      throw new Error(
        `Language directory "${entry.name}" is not canonical. Rename it to "${canonicalLocale}".`,
      )
    }

    languages.push({
      locale: canonicalLocale,
      label: languageDisplayName(canonicalLocale),
      source: path.join(sourceDirectory, entry.name),
    })
  }

  languages.sort((left, right) => left.label.localeCompare(right.label, "en"))

  if (languages.length === 0) {
    throw new Error(`No language directories found in ${sourceDirectory}`)
  }

  return languages
}

function yamlString(value) {
  return JSON.stringify(value)
}

function languageIndex(language) {
  return `---
title: ${yamlString(language.label)}
lang: ${yamlString(language.locale)}
---

# ${language.label}
`
}

function homepage(languages) {
  const links = languages
    .map((language) => `- [${language.label}](./${encodeURIComponent(language.locale)}/)`)
    .join("\n")

  return `---
title: SecAI-UniMi
---

# SecAI-UniMi

Security and Artificial Intelligence study notes.

## Languages

${links}
`
}

async function fileExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

function assertSafeDirectories(sourceDirectory, outputDirectory) {
  const source = path.resolve(sourceDirectory)
  const output = path.resolve(outputDirectory)

  if (source === output || source.startsWith(`${output}${path.sep}`)) {
    throw new Error("The content output directory cannot contain the language source directory.")
  }

  if (output === path.parse(output).root || output === repositoryRoot) {
    throw new Error(`Unsafe content output directory: ${output}`)
  }
}

export async function prepareContent({ sourceDirectory, outputDirectory }) {
  const source = path.resolve(sourceDirectory)
  const output = path.resolve(outputDirectory)
  assertSafeDirectories(source, output)

  const languages = await discoverLanguages(source)
  const outputParent = path.dirname(output)
  await mkdir(outputParent, { recursive: true })
  const stagingDirectory = await mkdtemp(path.join(outputParent, `.${path.basename(output)}-`))

  try {
    for (const language of languages) {
      const destination = path.join(stagingDirectory, language.locale)
      await cp(language.source, destination, { recursive: true })

      const indexPath = path.join(destination, "index.md")
      if (!(await fileExists(indexPath))) {
        await writeFile(indexPath, languageIndex(language), "utf8")
      }
    }

    await writeFile(path.join(stagingDirectory, "index.md"), homepage(languages), "utf8")
    await rm(output, { recursive: true, force: true })
    await cp(stagingDirectory, output, { recursive: true })
    await rm(stagingDirectory, { recursive: true, force: true })
  } catch (error) {
    await rm(stagingDirectory, { recursive: true, force: true })
    throw error
  }

  return languages
}

function parseArguments(argumentsList) {
  const options = {
    sourceDirectory: path.join(repositoryRoot, "materials"),
    outputDirectory: path.join(repositoryRoot, "site", "content"),
  }

  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index]
    const value = argumentsList[index + 1]

    if ((argument === "--source" || argument === "--output") && !value) {
      throw new Error(`Missing value for ${argument}`)
    }

    if (argument === "--source") {
      options.sourceDirectory = value
      index += 1
    } else if (argument === "--output") {
      options.outputDirectory = value
      index += 1
    } else {
      throw new Error(`Unknown argument: ${argument}`)
    }
  }

  return options
}

const isMainModule =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href

if (isMainModule) {
  try {
    const languages = await prepareContent(parseArguments(process.argv.slice(2)))
    console.log(
      `Prepared ${languages.length} language(s): ${languages.map(({ locale }) => locale).join(", ")}`,
    )
  } catch (error) {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  }
}
