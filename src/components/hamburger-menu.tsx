"use client";

import { Menu } from "lucide-react";

import { ToggleTheme, ChangeLanguage } from "@/components";
import { useTranslations } from "next-intl";
import { Separator, Sheet, SheetContent, SheetTrigger } from "@/components/ui";

export function HamburgerMenu() {
	const t = useTranslations();

	return (
		<Sheet>
			<SheetTrigger>
				<Menu color="white" className="ml-2 mr-2 size-8" />
			</SheetTrigger>
			<SheetContent side="left" className="pt-[96px] flex flex-col">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<ToggleTheme />
						{t("Theme.Toggle")}
					</div>
					<div className="flex items-center gap-2">
						<ChangeLanguage />
						{t("Languages.Change")}
					</div>
					<Separator />
				</div>
			</SheetContent>
		</Sheet>
	);
}
