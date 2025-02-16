import { ChangeLanguage, Header, Theme } from "@/components";

export function HeaderRoot() {
	return (
		<section
			id="header"
			className="fixed flex h-25 w-screen border-green-700 border-b-4 bg-zinc-400 dark:bg-zinc-900"
		>
			<nav className="flex w-full items-center justify-between px-4">
				<div className="flex-1" />
				<div className="ml-28 flex w-full items-center justify-center gap-4">
					<Header.Anchor target="about" />
					<Header.Anchor target="skills" />
					<Header.Anchor target="projects" />
					<Header.Anchor target="contact" />
				</div>
				<div className="mr-8 flex gap-2">
					<Theme.Toggle />
					<ChangeLanguage />
				</div>
			</nav>
		</section>
	);
}
