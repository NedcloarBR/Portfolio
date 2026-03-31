import { projects } from "@/constants";
import { getProjectMetrics } from "@/lib/metrics";
import { getTranslations } from "next-intl/server";
import { ProjectsSmallCard } from "./small-card";

export async function ProjectsSection() {
	const t = await getTranslations("Projects");

	const metrics = await Promise.all(
		projects.map((p) => getProjectMetrics(p.github, p.npm, p.vscode)),
	);

	return (
		<section id="projects" className="grid h-screen justify-center text-white">
			<div className="mt-8 flex items-center justify-center text-4xl">
				{t("Title")}
			</div>
			<div className="flex items-center gap-4">
				{projects.map((project, i) => (
					<ProjectsSmallCard
						key={project.name}
						info={project}
						metrics={metrics[i]}
					/>
				))}
			</div>
		</section>
	);
}
