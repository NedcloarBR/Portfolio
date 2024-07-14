import { useTranslations } from "next-intl";

export function Start() {
	const t = useTranslations("Start");

	return (
		<section
			id="start"
			className="h-screen--100px bg-zinc-600 flex flex-col items-center justify-center text-center space-y-2"
		>
			<div className="text-3xl">{t("Hello")}</div>
			<div className="text-6xl">{t("Name")}</div>
			<div className="text-2xl">{t("Details")}</div>
		</section>
	);
}
