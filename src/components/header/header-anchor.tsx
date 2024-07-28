"use client"

import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { ComponentProps, MouseEvent,  useEffect, useState } from "react"

interface Props extends ComponentProps<"a"> {
  target: string
  text?: string
}

export function HeaderAnchor({ target, text }: Readonly<Props>) {
  const t = useTranslations("Header");

  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(target))
  }, [target])
  
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    anchorTarget?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return <Link onClick={handleClick} href={`#${target}`}>{text ?? t(target)}</Link>
}