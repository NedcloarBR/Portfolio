import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function ChangeLanguage() {
	const { i18n } = useTranslation();

	const Languages = [
		{
			code: "pt-BR",
			flag: "br",
			name: i18n.t("Languages.pt-BR"),
		},
		{
			code: "en-US",
			flag: "us",
			name: i18n.t("Languages.en-US"),
		},
	];

	const currentLang = Languages.map((lang) => {
		if (i18n.language === lang.code)
			return <span key={`key_${lang.code}`} className={`fi fi-${lang.flag} size-12 rounded-full`} />;
	});

	function DropdownLanguages() {
		const arr: ReactElement[] = [];
		for (let i = 0; i < Languages.length; i++) {
			arr.push(
				<DropdownMenuItem onClick={() => i18n.changeLanguage(Languages[i].code)}>
					<div className="flex items-center gap-1">
						<span className={`fi fi-${Languages[i].flag}`} />
						<div>{Languages[i].name}</div>
					</div>
				</DropdownMenuItem>,
			);
		}

		return arr;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="rounded-full size-12 p-0 m-0">
					{currentLang}
					<span className="sr-only">{}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">{DropdownLanguages()}</DropdownMenuContent>
		</DropdownMenu>
	);
}
