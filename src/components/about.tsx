import { useTranslations } from "next-intl";

export function About() {
	const t = useTranslations("About");

	return (
		<section
			id="about"
			className="flex justify-center mt-8 h-screen text-white"
		>
			<div className="flex items-center mt-8 overflow-wrap break-word">
				<img
					src="PPF.jpeg"
					alt="Miguel Alexandre Uhlein PPF"
					className="size-80 mt-4 inline-block mr-4 rounded-xl"
				/>
				<p className="max-w-md">{t("Text")}</p>
			</div>
		</section>
	);
}
