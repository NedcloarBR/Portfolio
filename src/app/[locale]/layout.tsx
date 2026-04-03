import "@/styles/global.css";
import "flag-icons/css/flag-icons.css";
import { MainContainer, Theme } from "@/components";
import { BASE_URL } from "@/lib/base-url";
import { routing } from "@/lib/i18n/routing";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Miguel Alexandre Uhlein",
	url: BASE_URL,
	email: "nedcloar1@hotmail.com",
	jobTitle: "Back-end Developer",
	sameAs: [
		"https://github.com/NedcloarBR",
		"https://www.linkedin.com/in/miguel-alexandre-uhlein-7979a71b0/",
		"http://discord.gg/5CHARxbaRk",
	],
};

export async function generateMetadata(props: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await props.params;
	const t = await getTranslations({ locale, namespace: "Metadata" });
	const url = `${BASE_URL}/${locale}`;

	return {
		title: t("Home.title"),
		description: t("Home.description"),
		metadataBase: new URL(BASE_URL),
		alternates: {
			canonical: url,
			languages: {
				"en-US": `${BASE_URL}/en-US`,
				"pt-BR": `${BASE_URL}/pt-BR`,
			},
		},
		openGraph: {
			title: t("Home.title"),
			description: t("Home.description"),
			url,
			siteName: "Miguel Alexandre Uhlein",
			locale: locale.replace("-", "_"),
			type: "website",
		},
		twitter: {
			card: "summary_large_image",
			title: t("Home.title"),
			description: t("Home.description"),
		},
	};
}

export default async function LocaleLayout(props: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await props.params;
	const { children } = props;

	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	const messages = await getMessages({ locale });

	return (
		<html lang={locale} suppressHydrationWarning={true}>
			<head>
				<script
					type="application/ld+json"
					// biome-ignore lint/security/noDangerouslySetInnerHtml: structured data for SEO
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className={inter.className}>
				<Theme.Provider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
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
