import { Card, CardContent, CardHeader } from "@/components/ui";

function ProjectCardSkeleton() {
	return (
		<Card className="flex w-full flex-col overflow-hidden">
			<div className="h-28 w-full animate-pulse bg-muted sm:h-36" />
			<CardHeader className="px-4 pt-3 pb-1">
				<div className="flex items-center justify-between">
					<div className="h-4 w-24 animate-pulse rounded bg-muted" />
					<div className="h-3 w-8 animate-pulse rounded bg-muted" />
				</div>
			</CardHeader>
			<CardContent className="flex-1 px-4 pb-0">
				<div className="space-y-1.5">
					<div className="h-3 w-full animate-pulse rounded bg-muted" />
					<div className="h-3 w-3/4 animate-pulse rounded bg-muted" />
				</div>
			</CardContent>
			<div className="mt-3 flex justify-center gap-2 border-border/40 border-t bg-muted/20 px-4 py-2.5">
				{Array.from({ length: 5 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton items
					<div key={i} className="size-5 animate-pulse rounded bg-muted" />
				))}
			</div>
		</Card>
	);
}

export function ProjectsSectionSkeleton() {
	return (
		<section
			id="projects"
			className="min-h-screen scroll-mt-16 bg-muted/20 px-6 py-8"
		>
			<div className="mb-8 flex items-center justify-center">
				<div className="h-9 w-32 animate-pulse rounded bg-muted" />
			</div>
			<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 5 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton items
					<ProjectCardSkeleton key={i} />
				))}
			</div>
		</section>
	);
}
