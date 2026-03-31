"use client";

import type { SkillData } from "@/@types";
import {
	Button,
	Card,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	Separator,
} from "@/components/ui";
import { skills } from "@/constants";
import { track } from "@vercel/analytics";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "./icon";
import { Section } from "./section";

export function Skills() {
	const t = useTranslations("Skills");
	const [isOpen, setIsOpen] = useState(false);
	const [dialogSkill, setDialogSkill] = useState<SkillData | null>(null);

	const CATEGORY_ORDER = [
		"Backend",
		"ProgrammingLanguage",
		"Database",
		"DevOps",
		"Tools",
		"Library",
		"Frontend",
	];

	const skillsByCategory = useMemo(() => {
		const map = new Map<string, SkillData[]>();
		for (const skill of skills) {
			const category = skill.categories[0];
			if (!map.has(category)) {
				map.set(category, []);
			}
			map.get(category)?.push(skill);
		}
		return new Map(
			Array.from(map.entries()).sort(
				([a], [b]) => CATEGORY_ORDER.indexOf(a) - CATEGORY_ORDER.indexOf(b),
			),
		);
	}, []);

	function handleClick(skill: SkillData) {
		track(
			"Skills",
			{
				action: "click",
				category: "Skills",
				label: skill.name,
			},
			{
				flags: ["Skills"],
			},
		);
		setDialogSkill(skill);
		setIsOpen(true);
	}

	return (
		<Section.Root id="skills">
			<Section.Title title={t("Title")} />
			<Section.Content className="w-full px-4 sm:px-8">
				<div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
					{Array.from(skillsByCategory.entries()).map(
						([category, categorySkills]) => (
							<Card
								key={category}
								className="flex flex-col items-center rounded-lg p-4"
							>
								<h1 className="mb-2 text-xl">
									{t(`Categories.${category}`)}
								</h1>
								<Separator className="mb-3" />
								<div className="flex flex-wrap items-center justify-center gap-2">
									{categorySkills.map((skill) => (
										<Button
											key={skill.name}
											onClick={() => handleClick(skill)}
											variant="outline"
											size="sm"
											className="card-hover h-auto gap-2 py-2"
										>
											<Icon
												className="size-5"
												name={skill.name}
												extension={skill.name === "Necord" ? "png" : "svg"}
											/>
											<span className="text-xs">{skill.name}</span>
										</Button>
									))}
								</div>
							</Card>
						),
					)}
				</div>
			</Section.Content>

			{dialogSkill && (
				<Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>
								<Link
									className="flex items-center justify-center gap-6"
									href={dialogSkill.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Icon
										className="size-12"
										name={dialogSkill.name}
										extension={dialogSkill.name === "Necord" ? "png" : "svg"}
									/>
									{dialogSkill.name}
								</Link>
							</DialogTitle>
							<Separator />
							<DialogDescription>
								{t(dialogSkill.description)}
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			)}
		</Section.Root>
	);
}
