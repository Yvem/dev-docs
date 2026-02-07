/*
SPEC
- TypeScript module compatible with Node type stripping.
- Uses types from ../types.ts.
- Exports getꓽsubmodules(): Record<UrlⳇGit, SubmoduleInfo>.
- On call, opens ../../.gitmodules, parses submodule entries, and returns details.
- SubmoduleInfo includes name, relative path, absolute path, and URL.
*/

import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import type { PathⳇAbsolute, PathⳇRelative, UrlⳇGit } from "../types.ts"

export type SubmoduleInfo = {
	name: string
	path‿rel: PathⳇRelative
	path‿abs: PathⳇAbsolute
	url: UrlⳇGit
}

const GITMODULES_PATH = resolve(
	dirname(fileURLToPath(import.meta.url)),
	"../../.gitmodules",
)

export function getꓽsubmodules(): Array<SubmoduleInfo> {
	const raw = readFileSync(GITMODULES_PATH, "utf8")
	const lines = raw.split(/\r?\n/)
	const result: Array<SubmoduleInfo> = []
	let current: Partial<SubmoduleInfo> & { name?: string } = {}

	const flush = () => {
		if (!current.name && !current.path‿rel && !current.url) return
		if (!current.name || !current.path‿rel || !current.url) {
			throw new Error(
				`Incomplete submodule entry in ${GITMODULES_PATH}: ${JSON.stringify(current)}`,
			)
		}
		result.push({
			name: current.name,
			path‿rel: current.path‿rel,
			path‿abs: resolve(dirname(GITMODULES_PATH), current.path‿rel) as PathⳇAbsolute,
			url: current.url,
		})
		current = {}
	}

	for (const rawLine of lines) {
		const line = rawLine.trim()
		if (!line || line.startsWith("#") || line.startsWith(";")) continue

		const header = line.match(/^\[submodule "(.+)"\]$/)
		if (header) {
			flush()
			current.name = header[1]
			continue
		}

		const kv = line.match(/^(\w+)\s*=\s*(.+)$/)
		if (!kv) continue

		switch (kv[1]) {
			case "path":
				current.path‿rel = kv[2] as PathⳇRelative
				break
			case "url":
				current.url = kv[2] as UrlⳇGit
				break
			default:
				break
		}
	}

	flush()
	return result
}
