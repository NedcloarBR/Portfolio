"use client";

import type { Project } from "@/@types";
import { Icon } from "@/components";
import {
	Button,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	Separator,
} from "@/components/ui";
import { LucideUpload } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import { ProjectCarousel } from "./project-carousel";

interface ProjectsFullCardProps {
	openState: [boolean, Dispatch<SetStateAction<boolean>>];
	info: Project;
}

export function ProjectsFullCard({
	openState,
	info,
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
