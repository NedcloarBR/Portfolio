import i18n from "i18next";
import DetectBrowserLanguage from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
	.use(DetectBrowserLanguage)
	.use(HttpApi)
	.use(initReactI18next)
	.init({
		fallbackLng: "pt-BR",
		saveMissing: true,
		interpolation: { escapeValue: false },
		load: "all",
	});

export default i18n;
