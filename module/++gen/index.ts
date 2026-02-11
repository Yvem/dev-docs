import { getꓽsubmodules } from './get-submodules.ts'
import { getꓽmanual } from './get-manual.ts'
import type { DocSourceInfo } from './types'


export function getꓽdata_sources(): Array<DocSourceInfo> {
	return [
		...getꓽsubmodules(),
		...getꓽmanual(),
	]
}
