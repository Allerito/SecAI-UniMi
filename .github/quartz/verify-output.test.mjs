import { test } from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"

const verifier = fileURLToPath(new URL("./verify-output.mjs", import.meta.url))

test("rejects the previously published tag-only site", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "quartz-output-test-"))
  try {
    await mkdir(path.join(directory, "static"))
    await writeFile(path.join(directory, "static/contentIndex.json"), JSON.stringify({ "tags/index": { slug: "tags/index" } }))
    const result = spawnSync(process.execPath, [verifier, directory], { encoding: "utf8" })
    assert.notEqual(result.status, 0)
    assert.match(result.stderr, /Missing search entry: index/)
  } finally {
    // Only remove the exact directory returned by mkdtemp under the OS temp directory.
    assert.equal(path.dirname(directory), path.resolve(tmpdir()))
    await rm(directory, { recursive: true, force: true })
  }
})

test("rejects an RSS document masquerading as the homepage", async () => {
  const directory = await mkdtemp(path.join(tmpdir(), "quartz-output-test-"))
  try {
    await mkdir(path.join(directory, "static"))
    await writeFile(path.join(directory, "static/contentIndex.json"), JSON.stringify({ index: { slug: "index" } }))
    await writeFile(path.join(directory, "index.html"), "<?xml version=\"1.0\"?><rss />")
    const result = spawnSync(process.execPath, [verifier, directory], { encoding: "utf8" })
    assert.notEqual(result.status, 0)
    assert.match(result.stderr, /Not HTML: index/)
  } finally {
    assert.equal(path.dirname(directory), path.resolve(tmpdir()))
    await rm(directory, { recursive: true, force: true })
  }
})
