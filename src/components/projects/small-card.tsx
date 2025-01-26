"use client"

import { Icon } from "@/components";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator
} from "@/components/ui";
import { Project } from "@/@types";
import { ProjectsFullCard } from "./full-card";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { track } from "@vercel/analytics";

interface ProjectsSmallCardProps {
  info: Project
}

export function ProjectsSmallCard({ info }: Readonly<ProjectsSmallCardProps>) {
  const uniqueTechs = Array.from(new Set(info.techs));
  const openState = useState(false);
  const t = useTranslations("Projects");

  function handleClick() {
    track("Projects", {
      action: "click",
      category: "Projects",
      label: info.name,
    }, {
      flags: ["Projects"]
    });
    openState[1](true);
  }
  const nameForAssets = info.name.split(" ").join("");
  return (
    <>
      <Card className="w-[240px] h-[400px] card-hover cursor-pointer" onClick={handleClick}>
        <CardHeader>
          <img src={`images/${nameForAssets}/Logo.png`} alt={`${info.name} Logo`} className="w-[210px] h-[90px] rounded-sm" />
          <Separator />
          <CardTitle className="flex justify-center">{info.name}</CardTitle>
        </CardHeader>
        <CardContent className="-mt-4">
          <CardDescription>{t(info.description).split(".")[0] + "."}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center flex-wrap gap-2">
          {uniqueTechs.map((tech) => (
            <Icon key={tech} name={tech} extension={tech === "Necord" ? "png" : "svg"} className="size-6" />
          ))}
        </CardFooter>
      </Card>
      <ProjectsFullCard openState={openState} info={info} />
    </>
  );
}
