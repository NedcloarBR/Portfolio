import type { Project } from "@/@types";

export const projects: Project[] = [
	{
		name: "N-D-B",
		description: "N-D-B.Description",
		categories: [],
		github: "https://github.com/N-D-B-Project/N-D-B",
		deploy:
			"https://discord.com/oauth2/authorize?client_id=708822043420000366&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fauth%2Fredirect&scope=bot%20applications.commands",
		techs: [
			"NodeJS",
			"TypeScript",
			"NestJS",
			"DiscordJS",
			"Necord",
			"Prisma",
			"PostgreSQL",
			"Yarn",
			"BiomeJS",
			"Docker",
		],
	},
	{
		name: "Random Brazil",
		description: "RandomBrazil.Description",
		categories: [],
		github: "https://github.com/NedcloarBR/vscode-random-brazil",
		deploy:
			"https://marketplace.visualstudio.com/items?itemName=nedcloarbr.random-brazil",
		techs: ["NodeJS", "TypeScript", "JavaScript", "BiomeJS", "VSCode"],
	},
	{
		name: "Biome Config",
		description: "BiomeConfig.Description",
		categories: [],
		github: "https://github.com/NedcloarBR/biome-config",
		deploy: "https://www.npmjs.com/package/@nedcloarbr/biome-config",
		techs: ["NodeJS", "TypeScript", "JavaScript", "NPM", "BiomeJS"],
	},
];
