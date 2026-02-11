import { getꓽsubmodules } from './get-submodules.ts'
import { getꓽmanual } from './get-manual.ts'
import type { SubmoduleInfo } from './types'


export function getꓽdata_sources(): Array<SubmoduleInfo> {
	return [
		...getꓽsubmodules(),
		...getꓽmanual(),
	]
}
