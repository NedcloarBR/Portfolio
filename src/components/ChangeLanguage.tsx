import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function ChangeLanguage() {
	const { i18n } = useTranslation();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					{i18n.language === "pt-BR" && <span className="fi fi-br" />}
					{i18n.language === "en-US" && <span className="fi fi-us" />}
					<span className="sr-only">{}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => i18n.changeLanguage("pt-BR")}>
					<span className="fi fi-br" />
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => i18n.changeLanguage("en-US")}>
					<span className="fi fi-us" />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
