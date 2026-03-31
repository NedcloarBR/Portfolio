import { Card, CardContent, CardFooter, CardHeader, Separator } from "@/components/ui";

function ProjectCardSkeleton() {
	return (
		<Card className="h-100 w-60">
			<CardHeader>
				<div className="h-22.5 w-52.5 animate-pulse rounded-sm bg-muted" />
				<Separator />
				<div className="flex items-center justify-between">
					<div className="h-5 w-24 animate-pulse rounded bg-muted" />
					<div className="h-4 w-8 animate-pulse rounded bg-muted" />
				</div>
			</CardHeader>
			<CardContent className="-mt-4">
				<div className="space-y-2">
					<div className="h-3 w-full animate-pulse rounded bg-muted" />
					<div className="h-3 w-3/4 animate-pulse rounded bg-muted" />
				</div>
			</CardContent>
			<CardFooter className="flex flex-wrap justify-center gap-2">
				{Array.from({ length: 5 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton items
					<div key={i} className="size-6 animate-pulse rounded bg-muted" />
				))}
			</CardFooter>
		</Card>
	);
}

export function ProjectsSectionSkeleton() {
	return (
		<section id="projects" className="grid h-screen justify-center text-white">
			<div className="mt-8 flex items-center justify-center">
				<div className="h-9 w-32 animate-pulse rounded bg-muted" />
			</div>
			<div className="flex items-center gap-4">
				{Array.from({ length: 5 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: static skeleton items
					<ProjectCardSkeleton key={i} />
				))}
			</div>
		</section>
	);
}
