/*
SPEC
- TypeScript module compatible with Node type stripping.
- Uses types from ../types.ts.
- Exports getꓽsubmodules(): Record<UrlⳇGit, SubmoduleInfo>.
- On call, opens ../../.gitmodules, parses submodule entries, and returns details.
- SubmoduleInfo includes name, relative path, absolute path, and URL.
*/

import type { PathⳇAbsolute, PathⳇRelative, UrlⳇGit, SubmoduleInfo } from "./types.ts"
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT_PATH = resolve(
	dirname(fileURLToPath(import.meta.url)),
	"../..",
)

export function getꓽmanual(): Array<SubmoduleInfo> {
	return [
		((): SubmoduleInfo => {
			const path‿rel: PathⳇRelative = 'data-sources/manual/bitcoin.org'
			return {
				name: path‿rel,
				path‿rel,
				path‿abs: resolve(ROOT_PATH, path‿rel),
				url: 'https://bitcoin.org/'
			}
		})(),
		((): SubmoduleInfo => {
			const path‿rel: PathⳇRelative = 'data-sources/manual/hyperliquid.gitbook.io'
			return {
				name: path‿rel,
				path‿rel,
				path‿abs: resolve(ROOT_PATH, path‿rel),
				url: 'https://hyperliquid.gitbook.io/'
			}
		})(),
	]
}
