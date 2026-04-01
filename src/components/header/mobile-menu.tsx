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
import { NavLinks } from "./nav-links";

export function MobileMenu() {
	const [open, setOpen] = useState(false);
	const t = useTranslations("Header");

	function close() {
		setOpen(false);
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild={true}>
				<Button variant="ghost" size="icon" aria-label={t("OpenMenu")}>
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader>
					<SheetTitle>{t("Navigation")}</SheetTitle>
				</SheetHeader>
				<nav className="flex flex-col items-start gap-1 p-4">
					<NavLinks onNavigate={close} />
				</nav>
			</SheetContent>
		</Sheet>
	);
}
