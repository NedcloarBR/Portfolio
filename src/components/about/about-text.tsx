"use client"

import { Button } from "@/components/ui";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { HeaderAnchor } from "../header/header-anchor";

export function AboutText() {
  const t = useTranslations("About");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleClick() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <>
      <div>
        {isExpanded ? (
          <>
            {t.rich("TextFull", {
              br: () => <br/>,
              contact: (text) => <HeaderAnchor target="contact" text={text as string}/>
            })}
          </>
        ) : (
          t.rich("Text", {
            br: () => <br/>
          })
        )}
      </div>
      <Button className="text-blue-500" variant="link" onClick={handleClick}>
        {isExpanded ? t("Button2") : t("Button")}
      </Button>
    </>
  );
}
