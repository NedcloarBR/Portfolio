"use client"

import { useTranslations } from "next-intl";
import { Icon } from "./icon";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button, Separator } from "./ui";
import Link from "next/link";

type SkillData = {
  name: string;
  description: string;
  url: string;
};

export function Skills() {
  const t = useTranslations("Skills");
  
  const skills: SkillData[] = [
    {
      name: t("NodeJS.Title"),
      description: t("NodeJS.Description"),
      url: "https://nodejs.org/",
    },
    {
      name: t("TypeScript.Title"),
      description: t("TypeScript.Description"),
      url: "https://www.typescriptlang.org/",
    },
    {
      name: t("JavaScript.Title"),
      description: t("JavaScript.Description"),
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: t("NestJS.Title"),
      description: t("NestJS.Description"),
      url: "https://nestjs.com/",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [dialogSkill, setDialogSkill] = useState<SkillData | null>(null);

  function handleClick(skill: SkillData) {
    setDialogSkill(skill);
    setIsOpen(true);
  }

  return (
    <section id="skills" className="grid justify-center h-screen text-white" >
      <div className="mt-8 flex justify-center items-center text-4xl">
        {t("Title")}
      </div>
      <div className="flex gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <Button variant="ghost" size="sm" onClick={() => handleClick(skill)}>
              <Icon className="skills-icon-hover size-12 relative cursor-pointer" name={skill.name}/>
            </Button>
          </div>
        ))}
      </div>
      {dialogSkill && (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle >
                <Link className="flex items-center justify-center gap-6" href={dialogSkill.url}>
                  <Icon className="size-12" name={dialogSkill.name}/>
                  {dialogSkill.name}
                </Link>
              </DialogTitle>
              <Separator />
              <DialogDescription>
                {dialogSkill.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}