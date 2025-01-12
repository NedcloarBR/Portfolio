"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "../icon";
import { Separator } from "../ui";
import { Project } from "@/@types";
import { ProjectsFullCard } from "./full-card";
import { useState } from "react";
import { useTranslations } from "next-intl";

interface ProjectsSmallCardProps {
  info: Project
}

export function ProjectsSmallCard({ info }: Readonly<ProjectsSmallCardProps>) {
  const uniqueTechs = Array.from(new Set(info.techs));
  const openState = useState(false);
  const t = useTranslations("Projects");

  return (
    <>
      <Card className="w-[230px] card-hover cursor-pointer" onClick={() => openState[1](true)}>
        <CardHeader>
          <img src={`images/${info.name}/Logo.png`} alt={`${info.name} Logo`} className="w-[210px] h-[90px] rounded-sm" />
          <Separator />
          <CardTitle className="flex justify-center">{info.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{t(info.description).split(".")[0]+"."}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-center flex-wrap gap-2">
          {uniqueTechs.map((tech) => (
            <Icon key={tech} name={tech} extension={tech === "Necord" ? "png" : "svg"}  className="size-6"/>
          ))}
        </CardFooter>
      </Card>
      <ProjectsFullCard openState={openState} info={info}/>
    </>
  );
}
