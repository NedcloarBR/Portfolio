import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

// SVGs with black/dark fills that are invisible on dark backgrounds
const DARK_INVERT_ICONS = new Set([
	"GitHub",
	"Vercel",
	"Prisma",
	"NextJS",
	"Curriculum",
]);

interface IconProps extends ComponentProps<"img"> {
	name: string;
	className?: string;
	extension?: "svg" | "png";
}

export function Icon({
	name,
	className,
	extension = "svg",
}: Readonly<IconProps>) {
	const iconSrc = `/icons/${name}.${extension}`;
	return (
		<img
			className={cn(className, DARK_INVERT_ICONS.has(name) && "dark:invert")}
			src={iconSrc}
			alt={`${name} Icon`}
		/>
	);
}
