import { projects } from "@/constants";
import {
	formatCount,
	getGitHubMetrics,
	getNpmDownloads,
	getVSCodeInstalls,
} from "@/lib/metrics";
import { GitFork, MonitorDown, Package, Star } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { ReactNode } from "react";

async function getAggregateStats() {
	const [githubResults, npmResults, vscodeResults] = await Promise.allSettled([
		Promise.all(projects.map((p) => getGitHubMetrics(p.github))),
		Promise.all(
			projects
				.filter((p) => p.npm)
				.map((p) => getNpmDownloads(p.npm as string)),
		),
		Promise.all(
			projects
				.filter((p) => p.vscode)
				.map((p) => getVSCodeInstalls(p.vscode as string)),
		),
	]);

	const sum = (arr: (number | null)[]) =>
		arr.reduce<number>((acc, n) => acc + (n ?? 0), 0);

	const githubMetrics =
		githubResults.status === "fulfilled" ? githubResults.value : [];
	const npmDownloads =
		npmResults.status === "fulfilled" ? npmResults.value : [];
	const vscodeInstalls =
		vscodeResults.status === "fulfilled" ? vscodeResults.value : [];

	return {
		stars: sum(githubMetrics.map((m) => m.stars)),
		forks: sum(githubMetrics.map((m) => m.forks)),
		npmDownloads: sum(npmDownloads),
		vscodeInstalls: sum(vscodeInstalls),
	};
}

function MetricPill({
	icon,
	value,
	label,
}: { icon: ReactNode; value: string; label: string }) {
	return (
		<div className="flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-1.5 text-sm backdrop-blur-sm">
			<span className="text-muted-foreground">{icon}</span>
			<span className="font-semibold">{value}</span>
			<span className="text-muted-foreground">{label}</span>
		</div>
	);
}

export async function Stats() {
	const [stats, t] = await Promise.all([
		getAggregateStats(),
		getTranslations("Stats"),
	]);

	return (
		<div className="mx-auto mb-8 flex max-w-5xl flex-wrap justify-center gap-3">
			<MetricPill
				icon={<Star className="size-3.5" />}
				value={formatCount(stats.stars)}
				label={t("Stars")}
			/>
			<MetricPill
				icon={<GitFork className="size-3.5" />}
				value={formatCount(stats.forks)}
				label={t("Forks")}
			/>
			<MetricPill
				icon={<Package className="size-3.5" />}
				value={formatCount(stats.npmDownloads)}
				label={t("NPMDownloads")}
			/>
			<MetricPill
				icon={<MonitorDown className="size-3.5" />}
				value={formatCount(stats.vscodeInstalls)}
				label={t("VSCodeInstalls")}
			/>
		</div>
	);
}
