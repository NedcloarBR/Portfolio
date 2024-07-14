import { ChangeLanguage, ToggleTheme } from "@/components";

export function Header() {
	return (
		<section
			id="header"
			className="w-screen h-[100px] space-x-4 flex justify-between bg-zinc-400 dark:bg-zinc-900"
		>
			<nav className="px-4 gap-2 flex justify-end items-center w-full">
				<div className="ml-auto flex gap-2 mr-8">
					<ToggleTheme />
					<ChangeLanguage />
				</div>
			</nav>
		</section>
	);
}
