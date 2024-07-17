import { ChangeLanguage, HeaderAnchor, ToggleTheme } from "@/components";

export function Header() {
	return (
    <section
			id="header"
			className="fixed w-screen h-[100px] space-x-4 flex bg-zinc-400 dark:bg-zinc-900 border-b-4 border-green-700"
		>
			<nav className="px-4 gap-2 flex items-center w-full">
        <div className="gap-4 flex flex-auto justify-center items-center">
          <HeaderAnchor target="start"/>
          <HeaderAnchor target="about"/>
          <HeaderAnchor target="competencies"/>
          <HeaderAnchor target="projects"/>
          <HeaderAnchor target="contact"/>
        </div>
				<div className="ml-auto flex gap-2 mr-8">
					<ToggleTheme />
					<ChangeLanguage />
				</div>
			</nav>
		</section>
	);
}
