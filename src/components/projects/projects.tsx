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
			className="min-h-screen scroll-mt-16 bg-muted/20 px-6 py-8"
		>
			<h1 className="mb-8 flex items-center justify-center text-2xl sm:text-4xl">
				{t("Title")}
			</h1>
			<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
