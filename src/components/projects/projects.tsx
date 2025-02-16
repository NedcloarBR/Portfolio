import { projects } from "@/constants";
import { useTranslations } from "next-intl";
import { ProjectsSmallCard } from "./small-card";

export function ProjectsSection() {
	const t = useTranslations("Projects");

	return (
		<section id="projects" className="grid h-screen justify-center text-white">
			<div className="mt-8 flex items-center justify-center text-4xl">
				{t("Title")}
			</div>
			<div className="flex items-center gap-4">
				{projects.map((project) => (
					<ProjectsSmallCard key={project.name} info={project} />
				))}
			</div>
		</section>
	);
}
