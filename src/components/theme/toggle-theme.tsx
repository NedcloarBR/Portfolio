"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui";
import { useTranslations } from "next-intl";

export function ToggleTheme() {
	const { setTheme } = useTheme();
	const t = useTranslations("Theme");

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild={true}>
				<Button
					variant="outline"
					size="sm"
					className="relative flex items-center"
				>
					<Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">{}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<span className="flex items-center gap-1">
						<Sun />
						{t("Light")}
					</span>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<span className="flex items-center gap-1">
						<Moon />
						{t("Dark")}
					</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
