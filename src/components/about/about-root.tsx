"use client"

import { useTranslations } from "next-intl";
import { About } from "@/components";

export function AboutRoot() {
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
          <About.Text />
        </div>
      </div>
    </section>
  );
}
