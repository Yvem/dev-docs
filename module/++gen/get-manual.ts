/*
SPEC
- TypeScript module compatible with Node type stripping.
- Uses types from ../types.ts.
- Exports getꓽsubmodules(): Record<UrlⳇGit, SubmoduleInfo>.
- On call, opens ../../.gitmodules, parses submodule entries, and returns details.
- SubmoduleInfo includes name, relative path, absolute path, and URL.
*/

import type { PathⳇAbsolute, PathⳇRelative, UrlⳇGit, DocSourceInfo } from "./types.ts"
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT_PATH = resolve(
	dirname(fileURLToPath(import.meta.url)),
	"../..",
)

export function getꓽmanual(): Array<DocSourceInfo> {
	return [
		((): DocSourceInfo => {
			const path‿rel: PathⳇRelative = 'manual/bitcoin.org'
			return {
				name: path‿rel,
				path‿rel,
				//path‿abs: resolve(ROOT_PATH, path‿rel),
				url: 'https://bitcoin.org/'
			}
		})(),
		((): DocSourceInfo => {
			const path‿rel: PathⳇRelative = 'manual/hyperliquid.gitbook.io'
			return {
				name: path‿rel,
				path‿rel,
				//path‿abs: resolve(ROOT_PATH, path‿rel),
				url: 'https://hyperliquid.gitbook.io/'
			}
		})(),
	]
}
