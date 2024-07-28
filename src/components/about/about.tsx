"use client"

import { useTranslations } from "next-intl";
import { AboutText, Icon } from "@/components";

export function About() {
	const t = useTranslations("About");

	return (
		<section id="about" className="grid justify-center h-screen text-white" >
      <div className="mt-8 flex justify-center items-center text-4xl">{t("Title")}</div>
			<div className="-mb-16 flex overflow-wrap break-word">
				<img
					src="PPF.jpeg"
					alt="Miguel Alexandre Uhlein PPF"
					className="size-80 mt-2 mr-8 inline-block rounded-xl"
				/>
				<div className="mt-8 max-w-xl">
          <AboutText />
        </div>
			</div>
      <div className="flex gap-2">
        <Icon className="size-12" name="NodeJS"/>
        <Icon className="size-12" name="TypeScript"/>
        <Icon className="size-12" name="JavaScript"/>
        <Icon className="size-12" name="NestJS"/>
      </div>
		</section>
	);
}
