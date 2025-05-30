export type Techs =
	| "BiomeJS"
	| "CSS3"
	| "DiscordJS"
	| "Docker"
	| "ESLint"
	| "HTML5"
	| "JavaScript"
	| "MongoDB"
	| "Necord"
	| "NestJS"
	| "NextJS"
	| "NodeJS"
	| "NPM"
	| "PostgreSQL"
	| "Prisma"
	| "React"
	| "TailwindCSS"
	| "TypeScript"
	| "VSCode"
	| "Vercel"
	| "Yarn";

export type SkillCategory =
	| "Frontend"
	| "Backend"
	| "Database"
	| "DevOps"
	| "Tools"
	| "Library"
	| "Framework"
	| "ProgrammingLanguage";

export type SkillData = {
	name: string;
	description: string;
	categories: SkillCategory[];
	url: string;
};

export type ProjectCategories = "";

export type Project = {
	name: string;
	description: string;
	github: string;
	deploy: string | null;
	techs: Techs[];
	categories: ProjectCategories[];
};
