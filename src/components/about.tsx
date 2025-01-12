"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui";
import { useState, useRef, useEffect } from "react";
import { HeaderAnchor } from "./header/header-anchor";
import { motion } from "framer-motion";
import { Icon } from "./icon";
import { Mail } from "lucide-react"

export function About() {
  const t = useTranslations("About");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <section id="about" className="grid justify-center h-screen text-white">
      <div className="mt-8 flex justify-center items-center text-4xl">
        {t("Title")}
      </div>
      <div className="-mb-16 flex overflow-wrap break-word">
        <div className="flex-col flex gap-4">
          <img
            src="PPF.jpeg"
            alt="Miguel Alexandre Uhlein PPF"
            className="size-80 mt-2 mr-8 inline-block rounded-xl"
          />
          <div className="flex">
            <Button variant="ghost" onClick={() => window.open("CV-MiguelAlexandreUhlein.pdf", "_blank")}>
              <Icon name="Curriculum" className="size-12"/>
            </Button>
            <Mail className="size-12 cursor-pointer" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}/>
          </div>
        </div>
        <div className="mt-8 max-w-xl">
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: isExpanded ? contentHeight ?? undefined : 80 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div ref={contentRef}>
              {t.rich("Text", {
                br: () => <br />,
                contact: (text) => (
                  <HeaderAnchor target="contact" text={text as string} />
                ),
              })}
            </div>
          </motion.div>
          <Button
            className="text-blue-500"
            variant="link"
            onClick={() => setIsExpanded((prev) => !prev)}
            disabled={isAnimating}
          >
            {isExpanded ? t("Button2") : t("Button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
