import ChangeLanguage from "./ChangeLanguage";
import HamburgerMenu from "./HamburgerMenu";
import ToggleTheme from "./ToggleTheme";

export default function NavBar() {
	return (
		<nav className="w-screen h-[100px] space-x-4 flex justify-between bg-zinc-400 dark:bg-zinc-900">
			<HamburgerMenu />
			<section className="px-4 flex justify-between items-center gap-2">
				<ToggleTheme />
				<ChangeLanguage />
			</section>
		</nav>
	);
}
