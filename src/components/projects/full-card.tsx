"use client";

import type { Project } from "@/@types";
import { Icon } from "@/components";
import type { ProjectMetrics } from "@/lib/metrics";
import { formatCount } from "@/lib/metrics";
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	Separator,
} from "@/components/ui";
import { GitFork, LucideUpload, MonitorDown, Package, Star } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import { ProjectCarousel } from "./project-carousel";

interface ProjectsFullCardProps {
	openState: [boolean, Dispatch<SetStateAction<boolean>>];
	info: Project;
	metrics: ProjectMetrics;
}

export function ProjectsFullCard({
	openState,
	info,
	metrics,
}: Readonly<ProjectsFullCardProps>) {
	const [isOpen, setIsOpen] = openState;
	const t = useTranslations("Projects");

	return (
		<Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
			<DialogContent>
				<DialogHeader className="flex items-center justify-center">
					<ProjectCarousel name={info.name} />
					<DialogTitle className="flex items-center justify-center text-2xl">
						{info.name}
					</DialogTitle>
				</DialogHeader>

				{/* Metrics */}
				{(metrics.stars !== null || metrics.forks !== null || metrics.npmDownloads !== null || metrics.vscodeInstalls !== null) && (
					<div className="flex flex-wrap justify-center gap-4">
						{metrics.stars !== null && (
							<span className="flex items-center gap-1.5 text-sm text-muted-foreground">
								<Star className="size-4 fill-yellow-400 text-yellow-400" />
								{formatCount(metrics.stars)} {t("Metrics.Stars")}
							</span>
						)}
						{metrics.forks !== null && (
							<span className="flex items-center gap-1.5 text-sm text-muted-foreground">
								<GitFork className="size-4" />
								{formatCount(metrics.forks)} {t("Metrics.Forks")}
							</span>
						)}
						{metrics.npmDownloads !== null && (
							<span className="flex items-center gap-1.5 text-sm text-muted-foreground">
								<Package className="size-4" />
								{formatCount(metrics.npmDownloads)} {t("Metrics.Downloads")}
							</span>
						)}
						{metrics.vscodeInstalls !== null && (
							<span className="flex items-center gap-1.5 text-sm text-muted-foreground">
								<MonitorDown className="size-4" />
								{formatCount(metrics.vscodeInstalls)} {t("Metrics.Installs")}
							</span>
						)}
					</div>
				)}

				<Separator />

				<DialogDescription>{t(info.description)}</DialogDescription>
				<Separator />
				<div className="space-y-2">
					<Button
						variant="link"
						size="sm"
						className={`flex ${info.github ? "cursor-pointer" : "cursor-not-allowed"}`}
						onClick={() =>
							info.github
								? window.open(info.github, "_blank", "noopener noreferrer")
								: null
						}
					>
						<Icon name="GitHub" className="size-8" />
						{info.github ? t("ViewSource") : t("NoSource")}
					</Button>
					<Button
						variant="link"
						size="sm"
						className={`flex ${info.deploy ? "cursor-pointer" : "cursor-not-allowed"}`}
						onClick={() =>
							info.deploy
								? window.open(info.deploy, "_blank", "noopener noreferrer")
								: null
						}
					>
						<LucideUpload className="size-8" />
						{info.deploy ? t("ViewDeploy") : t("NoDeploy")}
					</Button>
				</div>
				<Separator />

				<div className="flex flex-wrap items-center justify-center gap-2">
					{info.techs.map((tech) => (
						<Icon
							key={tech}
							name={tech}
							extension={tech === "Necord" ? "png" : "svg"}
							className="size-10"
						/>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
}
