import { ChangeLanguage, HeaderAnchor, ToggleTheme } from "@/components";

export function Header() {
	return (
    <section
			id="header"
			className="fixed w-screen h-[100px] flex bg-zinc-400 dark:bg-zinc-900 border-b-4 border-green-700"
		>
			<nav className="px-4 flex items-center justify-between w-full">
        <div className="flex-1"></div>
        <div className="flex justify-center items-center w-full gap-4 ml-28">
          <HeaderAnchor target="about"/>
          <HeaderAnchor target="projects"/>
          <HeaderAnchor target="contact"/>
        </div>
        <div className="flex gap-2 mr-8">
				  <ToggleTheme />
				  <ChangeLanguage />
			  </div>
			</nav>
		</section>
	);
}
