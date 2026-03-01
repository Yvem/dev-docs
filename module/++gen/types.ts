
export type PathⳇRelative = string
export type PathⳇAbsolute = string
export type Url = string
export type UrlⳇGit = string

export type DocSourceInfo = {
	name: string
	path‿rel: PathⳇRelative // relative to the root of the repo
	//path‿abs: PathⳇAbsolute unneeded since the caller needs the path to this repo + non-deterministic
	url: UrlⳇGit
}
