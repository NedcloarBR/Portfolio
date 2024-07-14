import { NavBar } from "@/components/nav-bar";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations();

	return (
		<main className="scroll">
			<section id={t("Pages.Home.Navigation.top")}>
				<NavBar />
			</section>
			<section
				id={t("Pages.Home.Navigation.about")}
				className="flex justify-center mt-8 h-screen text-4xl text-blue-700"
			>
				<div>{t("Hello")}</div>
			</section>
		</main>
	);
}
