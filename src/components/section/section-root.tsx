import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ClassValue } from "clsx";

const sectionVariants = cva("justify-center h-screen", {
	variants: {
		variant: {
			default: "grid justify-center h-screen",
			start:
				"h-screen flex flex-col items-center justify-center text-center space-y-2",
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
