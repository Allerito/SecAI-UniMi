import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import path from "node:path"

const output = path.resolve(process.argv[2] ?? "tmp/quartz-build/public")
const index = JSON.parse(await readFile(path.join(output, "static/contentIndex.json"), "utf8"))
for (const slug of ["index", "it/index", "en/index"]) {
  assert.ok(index[slug], `Missing search entry: ${slug}`)
  const html = await readFile(path.join(output, `${slug}.html`), "utf8")
  assert.match(html, /<html[\s>]/i, `Not HTML: ${slug}`)
}
const courses = ["matematica-1", "programmazione-e-algoritmi-i"]
for (const course of courses) {
  const notes = Object.values(index).filter(page => page.slug.includes(`/${course}/`) && !page.slug.endsWith("/index") && page.content?.trim())
  assert.ok(notes.length >= 10, `Too few notes in ${course}: ${notes.length}`)
  for (const note of notes) {
    assert.match(await readFile(path.join(output, `${note.slug}.html`), "utf8"), /<html[\s>]/i)
  }
}
console.log(`Verified homepage, languages, both courses and ${Object.keys(index).length} search entries`)
