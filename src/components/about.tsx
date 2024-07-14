import { useTranslations } from "next-intl";

export function About() {
	const t = useTranslations();

	return (
		<section
			id="about"
			className="flex justify-center mt-8 h-screen text-4xl text-blue-700"
		>
			<div>{t("Hello")}</div>
		</section>
	);
}
