import { useTranslations } from "next-intl";

export function Start() {
	const t = useTranslations();

	return (
		<section
			id="start"
			className="h-screen--100px bg-zinc-600 flex flex-col items-center justify-center text-center space-y-2"
		>
      <h1>{t("WIP")}</h1>
			<div className="text-3xl">{t("Start.Hello")}</div>
			<div className="text-6xl">{t("Start.Name")}</div>
			<div className="text-2xl">{t("Start.Details")}</div>
		</section>
	);
}
