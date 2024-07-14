import { NavBar } from "@/components/nav-bar";
import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations();

	return (
		<main className="scroll">
			<section id="top">
				<NavBar />
			</section>
			<section
				id="about"
				className="flex justify-center mt-8 h-screen text-4xl text-blue-700"
			>
				<div>{t("Hello")}</div>
			</section>
			<section id="competencies" className="h-screen bg-zinc-600"></section>
			<section id="projects" className="h-screen"></section>
			<section id="contact" className="h-screen bg-zinc-600"></section>
			<section id="footer" className="h-28"></section>
		</main>
	);
}
