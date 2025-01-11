"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { BackToTop } from "./back-to-top";

export function Start() {
	const t = useTranslations();
  const startRef = useRef<HTMLElement>(null);

	return (
		<section
      ref={startRef}
			id="start"
			className="h-screen flex flex-col items-center justify-center text-center space-y-2"
		>
      <h1>{t("WIP")}</h1>
			<div className="text-3xl">{t("Start.Hello")}</div>
			<div className="text-6xl">{t("Start.Name")}</div>
			<div className="text-2xl">{t("Start.Details")}</div>
      <BackToTop startRef={startRef} />
		</section>
	);
}
