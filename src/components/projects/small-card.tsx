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
import { track } from "@vercel/analytics";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ProjectsFullCard } from "./full-card";

interface ProjectsSmallCardProps {
	info: Project;
}

export function ProjectsSmallCard({ info }: Readonly<ProjectsSmallCardProps>) {
	const uniqueTechs = Array.from(new Set(info.techs));
	const openState = useState(false);
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
					<img
						src={`images/${nameForAssets}/Logo.png`}
						alt={`${info.name} Logo`}
						className="h-22.5 w-52.5 rounded-sm"
					/>
					<Separator />
					<CardTitle className="flex justify-center">{info.name}</CardTitle>
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
			<ProjectsFullCard openState={openState} info={info} />
		</>
	);
}
