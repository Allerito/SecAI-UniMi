import assert from "node:assert/strict"
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import test from "node:test"

import { discoverLanguages, prepareContent } from "./prepare-content.mjs"

async function temporaryDirectory(t) {
  const directory = await mkdtemp(path.join(os.tmpdir(), "secai-content-"))
  t.after(() => rm(directory, { recursive: true, force: true }))
  return directory
}

test("discovers every language and generates navigation and missing indexes", async (t) => {
  const root = await temporaryDirectory(t)
  const source = path.join(root, "materials")
  const output = path.join(root, "content")

  await mkdir(path.join(source, "it"), { recursive: true })
  await mkdir(path.join(source, "fr"), { recursive: true })
  await writeFile(path.join(source, "it", "nota.md"), "# Nota\n", "utf8")
  await writeFile(path.join(source, "fr", "index.md"), "# Accueil personnalisé\n", "utf8")

  const languages = await prepareContent({ sourceDirectory: source, outputDirectory: output })
  const home = await readFile(path.join(output, "index.md"), "utf8")
  const italianIndex = await readFile(path.join(output, "it", "index.md"), "utf8")
  const frenchIndex = await readFile(path.join(output, "fr", "index.md"), "utf8")

  assert.deepEqual(languages.map(({ locale }) => locale).sort(), ["fr", "it"])
  assert.match(home, /\.\/fr\//)
  assert.match(home, /\.\/it\//)
  assert.match(italianIndex, /lang: "it"/)
  assert.equal(frenchIndex, "# Accueil personnalisé\n")
})

test("rejects invalid and non-canonical language directory names", async (t) => {
  const root = await temporaryDirectory(t)
  const source = path.join(root, "materials")
  await mkdir(path.join(source, "not_a_locale"), { recursive: true })

  await assert.rejects(discoverLanguages(source), /Invalid language directory/)

  await rm(path.join(source, "not_a_locale"), { recursive: true })
  await mkdir(path.join(source, "pt-br"))
  await assert.rejects(discoverLanguages(source), /Rename it to "pt-BR"/)
})

test("does not replace existing output when discovery fails", async (t) => {
  const root = await temporaryDirectory(t)
  const source = path.join(root, "materials")
  const output = path.join(root, "content")
  await mkdir(source)
  await mkdir(output)
  await writeFile(path.join(output, "sentinel.txt"), "keep", "utf8")

  await assert.rejects(
    prepareContent({ sourceDirectory: source, outputDirectory: output }),
    /No language directories/,
  )
  assert.equal(await readFile(path.join(output, "sentinel.txt"), "utf8"), "keep")
})
