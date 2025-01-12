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
  | "PostgreSQL"
  | "Prisma"
  | "React"
  | "TailwindCSS"
  | "TypeScript"
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
  deploy: string;
  techs: Techs[];
  categories: ProjectCategories[];
};
