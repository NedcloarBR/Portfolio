import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function ErrorPage() {
	const { t } = useTranslation();

	return (
		<>
			<NavBar />
			<section className="items-center justify-center flex flex-col mt-8">
				<h1 className="text-3xl font-black mb-8">
					<strong>404 - Not Found</strong>
				</h1>
				<Button variant="outline" className="mt-8">
					<Link to={"/"}>{t("Reload")}</Link>
				</Button>
			</section>
		</>
	);
}
