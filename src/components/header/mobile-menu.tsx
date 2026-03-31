"use client";

import {
	Button,
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { HeaderAnchor } from "./header-anchor";

export function MobileMenu() {
	const [open, setOpen] = useState(false);
	const t = useTranslations("Header");

	function close() {
		setOpen(false);
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon" aria-label={t("OpenMenu")}>
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					<SheetTitle>{t("Navigation")}</SheetTitle>
				</SheetHeader>
				<nav className="flex flex-col items-start gap-1 p-4">
					<HeaderAnchor target="about" onNavigate={close} />
					<HeaderAnchor target="skills" onNavigate={close} />
					<HeaderAnchor target="projects" onNavigate={close} />
					<HeaderAnchor target="contact" onNavigate={close} />
				</nav>
			</SheetContent>
		</Sheet>
	);
}
