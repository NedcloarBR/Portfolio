import NavBar from "@/components/NavBar";
import { useTranslation } from "react-i18next";

export default function HomePage() {
	const { t } = useTranslation();

	return (
		<>
			<NavBar />
			<div className="items-center flex justify-center text-3xl py-4">{t("Hello")}</div>
		</>
	);
}
