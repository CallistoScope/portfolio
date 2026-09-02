export interface Project {
	id: string;
	slug: string;
	name: string;

	order: number;

	category: ProjectCategory;
	platforms: ProjectPlatform[];

	role: string;
	duration: string;

	description: string;
	overview: string;

	images: {
		light: string;
		dark: string;
	}[];

	technologies: string[];
	highlights: string[];

	githubUrl?: string;
	liveUrl?: string;
}

export type ProjectPlatform =
	| 'Web'
	| 'Mobile'
	| 'Desktop'
	| 'Backend'
	| 'Library';

export type ProjectCategory =
	| 'Personal'
	| 'Professional'
	| 'Open Source';
