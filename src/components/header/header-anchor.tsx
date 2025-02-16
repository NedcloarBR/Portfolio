"use client";

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import {
	type ComponentProps,
	type MouseEvent,
	useEffect,
	useState,
} from "react";
interface Props extends ComponentProps<"a"> {
	target: string;
	text?: string;
}

export function HeaderAnchor({ target, text }: Readonly<Props>) {
	const t = useTranslations("Header");

	const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

	useEffect(() => {
		setAnchorTarget(document.getElementById(target));
	}, [target]);

	function handleClick(event: MouseEvent<HTMLButtonElement>) {
		event.preventDefault();
		anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" });
	}

	return (
		<Button
			variant="link"
			size="sm"
			className="hover:font-bold hover:underline"
			onClick={handleClick}
		>
			{text ?? t(target)}
		</Button>
	);
}
