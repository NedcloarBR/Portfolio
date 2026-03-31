"use client";

import type { Project } from "@/@types";
import { Icon } from "@/components";
import type { ProjectMetrics } from "@/lib/metrics";
import { formatCount } from "@/lib/metrics";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Separator,
} from "@/components/ui";
import { track } from "@vercel/analytics";
import { GitFork, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ProjectsFullCard } from "./full-card";

interface ProjectsSmallCardProps {
	info: Project;
	metrics: ProjectMetrics;
}

export function ProjectsSmallCard({ info, metrics }: Readonly<ProjectsSmallCardProps>) {
	const uniqueTechs = Array.from(new Set(info.techs));
	const openState = useState(false);
	const [logoError, setLogoError] = useState(false);
	const t = useTranslations("Projects");

	function handleClick() {
		track(
			"Projects",
			{
				action: "click",
				category: "Projects",
				label: info.name,
			},
			{
				flags: ["Projects"],
			},
		);
		openState[1](true);
	}

	const nameForAssets = info.name.split(" ").join("");

	return (
		<>
			<Card
				className="card-hover h-100 w-60 cursor-pointer"
				onClick={handleClick}
			>
				<CardHeader>
					{logoError ? (
						<div className="flex h-22.5 w-52.5 items-center justify-center rounded-sm bg-muted">
							<span className="text-xs text-muted-foreground">{info.name}</span>
						</div>
					) : (
						<img
							src={`/images/${nameForAssets}/Logo.png`}
							alt={`${info.name} Logo`}
							className="h-22.5 w-52.5 rounded-sm object-cover"
							onError={() => setLogoError(true)}
						/>
					)}
					<Separator />
					<div className="flex items-center justify-between">
						<CardTitle>{info.name}</CardTitle>
						{metrics.stars !== null && (
							<span className="flex items-center gap-1 text-xs text-muted-foreground">
								<Star className="size-3 fill-yellow-400 text-yellow-400" />
								{formatCount(metrics.stars)}
							</span>
						)}
					</div>
				</CardHeader>
				<CardContent className="-mt-4">
					<CardDescription>
						{`${t(info.description).split(".")[0]}.`}
					</CardDescription>
				</CardContent>
				<CardFooter className="flex flex-wrap justify-center gap-2">
					{uniqueTechs.map((tech) => (
						<Icon
							key={tech}
							name={tech}
							extension={tech === "Necord" ? "png" : "svg"}
							className="size-6"
						/>
					))}
				</CardFooter>
			</Card>
			<ProjectsFullCard openState={openState} info={info} metrics={metrics} />
		</>
	);
}
