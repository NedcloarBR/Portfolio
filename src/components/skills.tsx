"use client"

import { useTranslations } from "next-intl";
import { Icon } from "./icon";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button, Separator } from "./ui";
import Link from "next/link";
import { SkillData } from "@/@types";
import { skills } from "@/constants";
import { track } from '@vercel/analytics';

export function Skills() {
  const t = useTranslations("Skills");

  const [isOpen, setIsOpen] = useState(false);
  const [dialogSkill, setDialogSkill] = useState<SkillData | null>(null);

  function handleClick(skill: SkillData) {
    track("Skills",{
      action: "click",
      category: "Skills",
      label: skill.name,
    }, {
      flags: ["Skills"]
    });
    setDialogSkill(skill);
    setIsOpen(true);
  }

  return (
    <section id="skills" className="grid justify-center h-screen text-white" >
      <div className="mt-8 flex justify-center items-center text-4xl">
        {t("Title")}
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <Button variant="ghost" size="sm" onClick={() => handleClick(skill)}>
              <Icon className="card-hover size-12 cursor-pointer" name={skill.name} extension={skill.name === "Necord" ? "png" : "svg"}/>
            </Button>
          </div>
        ))}
      </div>
      {dialogSkill && (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle >
                <Link className="flex items-center justify-center gap-6" href={dialogSkill.url} target="_blank" rel="noopener noreferrer">
                  <Icon className="size-12" name={dialogSkill.name} extension={dialogSkill.name === "Necord" ? "png" : "svg"}/>
                  {dialogSkill.name}
                </Link>
              </DialogTitle>
              <Separator />
              <DialogDescription>
                {t(dialogSkill.description)}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}