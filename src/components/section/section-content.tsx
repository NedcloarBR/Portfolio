import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface SectionContentProps {
	children: React.ReactNode;
	className?: ClassValue;
}

export function SectionContent({
	children,
	className,
}: Readonly<SectionContentProps>) {
	return <div className={cn("flex gap-4", className)}>{children}</div>;
}
