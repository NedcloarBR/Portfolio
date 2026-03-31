"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { siDiscord } from "simple-icons";
import { Header } from "./header";
import { Separator } from "./ui";

const socials = [
	{
		label: "GitHub",
		href: "https://github.com/NedcloarBR",
		icon: <Github className="size-5" />,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/miguel-alexandre-uhlein-7979a71b0/",
		icon: <Linkedin className="size-5" />,
	},
	{
		label: "E-mail",
		href: "mailto:nedcloar1@hotmail.com",
		icon: <Mail className="size-5" />,
	},
	{
		label: "Discord",
		href: "http://discord.gg/5CHARxbaRk",
		icon: (
			<svg
				role="img"
				viewBox="0 0 24 24"
				aria-label="Discord"
				className="size-5 fill-current"
			>
				<path d={siDiscord.path} />
			</svg>
		),
	},
];

const navTargets = ["about", "skills", "projects", "contact"] as const;

export function Footer() {
	const t = useTranslations();
	const year = new Date().getFullYear();

	return (
		<footer className="bg-background">
			<Separator />
			<div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-8">
				{/* Nav */}
				<nav className="flex flex-wrap justify-center gap-1">
					{navTargets.map((target) => (
						<Header.Anchor
							key={target}
							target={target}
							text={t(`Header.${target}`)}
						/>
					))}
				</nav>

				<Separator className="w-full max-w-xs opacity-50" />

				{/* Social + copyright */}
				<div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
					<div className="flex items-center gap-3">
						{socials.map(({ label, href, icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={label}
								className="text-muted-foreground transition-colors hover:text-foreground"
							>
								{icon}
							</a>
						))}
					</div>
					<p className="text-center text-muted-foreground text-xs sm:text-right">
						© {year} Miguel Alexandre Uhlein. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
