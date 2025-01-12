"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "../ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import type { Dispatch, SetStateAction } from "react";
import { ProjectCarousel } from "./project-carousel";
import { Project } from "@/@types";
import { Icon } from "../icon";
import { LucideUpload } from "lucide-react";
import { Button, Separator } from "../ui";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ProjectsFullCardProps {
  openState: [boolean, Dispatch<SetStateAction<boolean>>];
  info: Project;
}

export function ProjectsFullCard({
  openState,
  info,
}: Readonly<ProjectsFullCardProps>) {
  const [isOpen, setIsOpen] = openState;
  const t = useTranslations("Projects");

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)}>
      <DialogContent>
        <DialogHeader className="flex items-center justify-center">
          <ProjectCarousel name={info.name} />
          <DialogTitle className="flex items-center justify-center text-2xl">
            {info.name}
          </DialogTitle>
        </DialogHeader>
        <Separator />

        <DialogDescription>{t(info.description)}</DialogDescription>
        <Separator />
        <div>
          <Button variant="link" size="sm" className="flex">
            <Icon name="GitHub" className="size-8" />
            <Link href={info.github} />
            {t("ViewSource")}
          </Button>
          <Button variant="link" size="sm" className="flex">
            <LucideUpload className="size-8" />
            <Link href={info.deploy} />
            {t("ViewDeploy")}
          </Button>
        </div>
        <Separator />

        <div className="flex flex-wrap items-center justify-center gap-2">
          {info.techs.map((tech) => (
            <Icon
              key={tech}
              name={tech}
              extension={tech === "Necord" ? "png" : "svg"}
              className="size-10"
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
