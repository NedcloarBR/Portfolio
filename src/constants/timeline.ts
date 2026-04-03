export type TimelineEntry = {
	type: "Education" | "Experience";
	institution: string;
	key: string;
	startDate: string;
	endDate?: string;
	current: boolean;
	logo?: string;
};

export const timeline: TimelineEntry[] = [
	{
		type: "Experience",
		institution: "Versotech",
		key: "versotech-analyst",
		startDate: "2025-11-1",
		current: true,
		logo: "versotech",
	},
	{
		type: "Experience",
		institution: "Versotech",
		key: "versotech-intern",
		startDate: "2025-06-23",
		endDate: "2025-10-30",
		current: false,
		logo: "versotech",
	},
	{
		type: "Education",
		institution: "FATEC Senai Porto Alegre",
		key: "fatec",
		startDate: "2023-07-01",
		endDate: "2026-07-31",
		current: true,
		logo: "senairs",
	},
];
