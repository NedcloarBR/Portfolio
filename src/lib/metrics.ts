export type ProjectMetrics = {
	stars: number | null;
	forks: number | null;
	npmDownloads: number | null;
	vscodeInstalls: number | null;
};

export function formatCount(n: number): string {
	if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
	if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
	return n.toString();
}

export async function getGitHubMetrics(
	repoUrl: string,
): Promise<Pick<ProjectMetrics, "stars" | "forks">> {
	const match = repoUrl.match(/github\.com\/([^/]+\/[^/?#]+)/);
	if (!match) return { stars: null, forks: null };

	try {
		const res = await fetch(`https://api.github.com/repos/${match[1]}`, {
			next: { revalidate: 3600 },
			headers: { Accept: "application/vnd.github+json" },
		});
		if (!res.ok) return { stars: null, forks: null };
		const data = await res.json();
		return {
			stars: data.stargazers_count ?? null,
			forks: data.forks_count ?? null,
		};
	} catch {
		return { stars: null, forks: null };
	}
}

export async function getNpmDownloads(packageName: string): Promise<number | null> {
	try {
		const res = await fetch(
			`https://api.npmjs.org/downloads/point/last-month/${encodeURIComponent(packageName)}`,
			{ next: { revalidate: 3600 } },
		);
		if (!res.ok) return null;
		const data = await res.json();
		return data.downloads ?? null;
	} catch {
		return null;
	}
}

// Fetches combined installs from VS Code Marketplace + OpenVSX
export async function getVSCodeInstalls(extensionId: string): Promise<number | null> {
	const [publisher, name] = extensionId.split(".");
	if (!publisher || !name) return null;

	const [marketplace, openVsx] = await Promise.allSettled([
		fetchMarketplaceInstalls(publisher, name),
		fetchOpenVsxInstalls(publisher, name),
	]);

	const a = marketplace.status === "fulfilled" ? marketplace.value : null;
	const b = openVsx.status === "fulfilled" ? openVsx.value : null;

	if (a === null && b === null) return null;
	return (a ?? 0) + (b ?? 0);
}

async function fetchMarketplaceInstalls(publisher: string, name: string): Promise<number | null> {
	try {
		const res = await fetch(
			"https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
			{
				method: "POST",
				next: { revalidate: 3600 },
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json;api-version=3.0-preview.1",
				},
				body: JSON.stringify({
					filters: [{ criteria: [{ filterType: 7, value: `${publisher}.${name}` }] }],
					flags: 256,
				}),
			},
		);
		if (!res.ok) return null;
		const data = await res.json();
		const stats: { statisticName: string; value: number }[] =
			data?.results?.[0]?.extensions?.[0]?.statistics ?? [];
		return stats.find((s) => s.statisticName === "install")?.value ?? null;
	} catch {
		return null;
	}
}

async function fetchOpenVsxInstalls(publisher: string, name: string): Promise<number | null> {
	try {
		const res = await fetch(`https://open-vsx.org/api/${publisher}/${name}`, {
			next: { revalidate: 3600 },
		});
		if (!res.ok) return null;
		const data = await res.json();
		return data.downloadCount ?? null;
	} catch {
		return null;
	}
}

export async function getProjectMetrics(
	repoUrl: string,
	npmPackage?: string,
	vscodeExtension?: string,
): Promise<ProjectMetrics> {
	const [github, npmDownloads, vscodeInstalls] = await Promise.all([
		getGitHubMetrics(repoUrl),
		npmPackage ? getNpmDownloads(npmPackage) : Promise.resolve(null),
		vscodeExtension ? getVSCodeInstalls(vscodeExtension) : Promise.resolve(null),
	]);
	return { ...github, npmDownloads, vscodeInstalls };
}
