import { projects } from "@/constants";
import { getProjectMetrics } from "@/lib/metrics";
import { getTranslations } from "next-intl/server";
import { ProjectsSmallCard } from "./small-card";

export async function ProjectsSection() {
	const t = await getTranslations("Projects");

	const results = await Promise.allSettled(
		projects.map((p) => getProjectMetrics(p.github, p.npm, p.vscode)),
	);
	const metrics = results.map((r) =>
		r.status === "fulfilled"
			? r.value
			: { stars: null, forks: null, npmDownloads: null, vscodeInstalls: null },
	);

	return (
		<section
			id="projects"
			className="grid min-h-screen scroll-mt-16 justify-center bg-muted/20"
		>
			<h1 className="mt-8 flex items-center justify-center text-2xl sm:text-4xl">
				{t("Title")}
			</h1>
			<div className="flex items-center gap-4 overflow-x-auto px-4 pb-4">
				{projects.map((project, i) => (
					<div key={project.name} className="shrink-0">
						<ProjectsSmallCard info={project} metrics={metrics[i]} />
					</div>
				))}
			</div>
		</section>
	);
}
