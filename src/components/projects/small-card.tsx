"use client";

import type { Project } from "@/@types";
import { Icon } from "@/components";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Separator,
} from "@/components/ui";
import type { ProjectMetrics } from "@/lib/metrics";
import { formatCount } from "@/lib/metrics";
import { track } from "@vercel/analytics";
import { GitFork, MonitorDown, Package, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ProjectsFullCard } from "./full-card";

interface ProjectsSmallCardProps {
	info: Project;
	metrics: ProjectMetrics;
}

export function ProjectsSmallCard({
	info,
	metrics,
}: Readonly<ProjectsSmallCardProps>) {
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

	const hasMetrics =
		metrics.stars !== null ||
		metrics.forks !== null ||
		metrics.npmDownloads !== null ||
		metrics.vscodeInstalls !== null;

	return (
		<>
			<Card
				className="card-hover w-full cursor-pointer hover:ring-2 hover:ring-ring"
				onClick={handleClick}
			>
				<CardHeader className="pb-2">
					{logoError ? (
						<div className="flex h-36 w-full items-center justify-center rounded-sm bg-muted">
							<span className="text-muted-foreground text-xs">{info.name}</span>
						</div>
					) : (
						<img
							src={`/images/${nameForAssets}/Logo.png`}
							alt={`${info.name} Logo`}
							className="h-36 w-full rounded-sm object-cover"
							onError={() => setLogoError(true)}
						/>
					)}
					<Separator />
					<div className="flex items-start justify-between gap-2">
						<CardTitle className="text-base">{info.name}</CardTitle>
						{hasMetrics && (
							<div className="flex shrink-0 flex-wrap justify-end gap-1.5 text-muted-foreground text-xs">
								{metrics.stars !== null && (
									<span className="flex items-center gap-0.5">
										<Star className="size-3 fill-yellow-400 text-yellow-400" />
										{formatCount(metrics.stars)}
									</span>
								)}
								{metrics.forks !== null && (
									<span className="flex items-center gap-0.5">
										<GitFork className="size-3" />
										{formatCount(metrics.forks)}
									</span>
								)}
								{metrics.npmDownloads !== null && (
									<span className="flex items-center gap-0.5">
										<Package className="size-3" />
										{formatCount(metrics.npmDownloads)}
									</span>
								)}
								{metrics.vscodeInstalls !== null && (
									<span className="flex items-center gap-0.5">
										<MonitorDown className="size-3" />
										{formatCount(metrics.vscodeInstalls)}
									</span>
								)}
							</div>
						)}
					</div>
				</CardHeader>
				<CardContent className="-mt-2">
					<CardDescription className="line-clamp-2">
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
