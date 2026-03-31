import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import type { ClassValue } from "clsx";

const sectionVariants = cva("justify-center min-h-screen scroll-mt-16", {
	variants: {
		variant: {
			default: "grid justify-center min-h-screen scroll-mt-16 pb-16",
			start:
				"min-h-screen flex flex-col items-center justify-center text-center space-y-2",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});
interface SectionRootProps extends VariantProps<typeof sectionVariants> {
	id: string;
	children: React.ReactNode;
	className?: ClassValue;
	ref?: React.Ref<HTMLElement>;
}

export function SectionRoot({
	id,
	children,
	variant,
	className,
	ref,
}: Readonly<SectionRootProps>) {
	return (
		<section
			ref={ref}
			id={id}
			className={cn(sectionVariants({ variant, className }))}
		>
			{children}
		</section>
	);
}
