"use client"

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

export function AboutText() {
  const t = useTranslations("About");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const element = document.getElementById("about_text");
    if (element) {
      element.textContent = isExpanded ? t("TextFull") : t("Text");
    }
  }, [isExpanded, t]);

  function handleClick() {
    setIsExpanded((isExpanded) => !isExpanded);
  }

  return (
    <Button className="text-blue-500" variant="link" onClick={handleClick}>
      {isExpanded ? t("Button2") : t("Button")}
    </Button>
  );
}
