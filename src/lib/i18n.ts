import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en-US", "pt-BR"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`../../public/locales/${locale}.json`)).default
  };
});