import { ChangeLanguage, Header, Theme } from "@/components";
import { MobileMenu } from "./mobile-menu";

export function HeaderRoot() {
	return (
		<section
			id="header"
			className="fixed z-50 flex h-16 w-screen items-center border-b border-green-700 bg-background/95 backdrop-blur-sm"
		>
			<nav className="grid w-full grid-cols-[1fr_auto_1fr] items-center px-4">
				<div />
				<div className="hidden items-center gap-4 md:flex">
					<Header.Anchor target="about" />
					<Header.Anchor target="skills" />
					<Header.Anchor target="projects" />
					<Header.Anchor target="contact" />
				</div>
				<div className="flex items-center justify-end gap-2">
					<Theme.Toggle />
					<ChangeLanguage />
					<div className="md:hidden">
						<MobileMenu />
					</div>
				</div>
			</nav>
		</section>
	);
}
