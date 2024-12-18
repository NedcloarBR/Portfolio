import { Inter } from "next/font/google";
import "@/styles/global.css";
import "flag-icons/css/flag-icons.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { MainContainer, Theme } from "@/components";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata(props: { params: Promise<LocaleLayoutProps["params"]> }) {
  const params = await props.params;

  const {
    locale
  } = params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("Home.title"),
    description: t("Home.description"),
  };
}

export default async function LocaleLayout(props: Readonly<LocaleLayoutProps>) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Theme.Provider attribute="class" defaultTheme="dark">
          <NextIntlClientProvider messages={await getMessages()}>
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
