import { execFileSync } from "node:child_process"
import { copyFile, mkdir, readFile, writeFile, access } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const config = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(config, "../..")
const site = path.join(root, "tmp/quartz-build")
const revision = (await readFile(path.join(config, "quartz-revision.txt"), "utf8")).trim()
if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error("Invalid Quartz revision")
const git = (...args) => execFileSync("git", args, { cwd: site, encoding: "utf8", stdio: ["ignore", "pipe", "inherit"] }).trim()
let exists = false
try { await access(site); exists = true } catch {}
if (!exists) {
  await mkdir(site, { recursive: true })
  git("init")
  git("remote", "add", "origin", "https://github.com/jackyzha0/quartz.git")
  git("fetch", "--depth", "1", "origin", revision)
  git("checkout", "--detach", "FETCH_HEAD")
} else if (git("rev-parse", "HEAD") !== revision) {
  throw new Error(`Existing ${site} has another revision; move it aside before setup`)
}
// Apply only to the exact upstream file. Fail closed if upstream changes.
const target = path.join(site, "quartz/util/glob.ts")
const upstream = git("show", `${revision}:quartz/util/glob.ts`)
if (upstream.split("gitignore: true").length !== 2) throw new Error("Quartz glob patch no longer applies")
const patched = upstream.replace("gitignore: true", "gitignore: false")
const current = (await readFile(target, "utf8")).replaceAll("\r\n", "\n").trim()
if (current !== upstream && current !== patched) throw new Error("Unexpected local changes to Quartz glob.ts")
await writeFile(target, patched + "\n")
for (const file of ["package.json", "package-lock.json", "quartz.config.yaml"]) {
  await copyFile(path.join(config, file), path.join(site, file))
}
console.log(`Prepared Quartz ${revision} in ${site}`)
