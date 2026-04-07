"use client";

import type { Project } from "@/@types";
import { Icon } from "@/components";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
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
				className="card-hover card-clickable flex w-full cursor-pointer flex-col overflow-hidden"
				onClick={handleClick}
			>
				{/* Full-bleed logo */}
				<div className="relative h-28 shrink-0 sm:h-36">
					{logoError ? (
						<div className="flex h-full items-center justify-center bg-muted/50">
							<span className="text-muted-foreground text-xs">{info.name}</span>
						</div>
					) : (
						<>
							<img
								src={`/images/Projects/${nameForAssets}/Logo.png`}
								alt={`${info.name} Logo`}
								className="h-full w-full bg-muted/30 object-contain p-3"
								onError={() => setLogoError(true)}
							/>
							<div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card to-transparent" />
						</>
					)}
				</div>

				<CardHeader className="px-4 pt-3 pb-1">
					<div className="flex items-start justify-between gap-2">
						<CardTitle className="font-semibold text-sm leading-tight">
							{info.name}
						</CardTitle>
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

				<CardContent className="flex-1 px-4 pb-0">
					<CardDescription className="line-clamp-2 text-xs">
						{`${t(info.description).split(".")[0]}.`}
					</CardDescription>
				</CardContent>

				{/* Tech strip */}
				<div className="mt-3 flex flex-wrap justify-center gap-2 border-border/40 border-t bg-muted/20 px-4 py-2.5">
					{uniqueTechs.map((tech) => (
						<Icon
							key={tech}
							name={tech}
							extension={tech === "Necord" ? "png" : "svg"}
							className="size-5"
						/>
					))}
				</div>
			</Card>
			<ProjectsFullCard openState={openState} info={info} metrics={metrics} />
		</>
	);
}
