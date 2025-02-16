import type { ComponentProps } from "react";

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
	return <img className={className} src={iconSrc} alt={`${name} Icon`} />;
}
