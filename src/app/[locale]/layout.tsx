import { Inter } from "next/font/google";
import "@/styles/global.css";
import "flag-icons/css/flag-icons.css";
import { MainContainer, Theme } from "@/components";
import { routing } from "@/lib/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(props: {
	params: Promise<{ locale: string }>;
}) {
	const params = await props.params;
	const { locale } = params;

	const t = await getTranslations({ locale, namespace: "Metadata" });

	return {
		title: t("Home.title"),
		description: t("Home.description"),
	};
}

export default async function LocaleLayout(props: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const params = await props.params;

	const { locale } = params;

	const { children } = props;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	const messages = await getMessages({ locale });

	return (
		<html lang={locale}>
			<body className={inter.className}>
				<Theme.Provider attribute="class" defaultTheme="dark">
					<NextIntlClientProvider messages={messages}>
						<MainContainer>
							{children}
							<Analytics />
						</MainContainer>
					</NextIntlClientProvider>
				</Theme.Provider>
			</body>
		</html>
	);
}
