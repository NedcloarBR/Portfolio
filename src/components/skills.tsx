"use client";

import { useTranslations } from "next-intl";
import { Icon } from "./icon";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Button,
  Card,
  Separator,
} from "@/components/ui";
import Link from "next/link";
import { SkillData } from "@/@types";
import { skills } from "@/constants";
import { track } from "@vercel/analytics";

export function Skills() {
  const t = useTranslations("Skills");
  const [isOpen, setIsOpen] = useState(false);
  const [dialogSkill, setDialogSkill] = useState<SkillData | null>(null);

  const skillsByCategory = useMemo(() => {
    const map = new Map<string, SkillData[]>();
    skills.forEach((skill) => {
      const category = skill.categories[0];
      if (!map.has(category)) {
        map.set(category, []);
      }
      map.get(category)!.push(skill);
    });
    return map;
  }, []);

  function handleClick(skill: SkillData) {
    track(
      "Skills",
      {
        action: "click",
        category: "Skills",
        label: skill.name,
      },
      {
        flags: ["Skills"],
      }
    );
    setDialogSkill(skill);
    setIsOpen(true);
  }

  return (
    <section id="skills" className="grid justify-center h-screen text-white">
      <h1 className="mt-8 flex justify-center items-center text-4xl">
        {t("Title")}
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-4">
        {Array.from(skillsByCategory.entries()).map(
          ([category, categorySkills]) => (
            <Card
              key={category}
              className="flex flex-col items-center rounded-lg"
            >
              <h1 className="m-1 text-2xl mb-2">
                {t(`Categories.${category}`)}
              </h1>
              <Separator className="m-2" />
              <div className="m-2 flex items-center justify-center flex-wrap gap-2 w-96">
                {categorySkills.map((skill) => (
                  <Button
                    key={skill.name}
                    onClick={() => handleClick(skill)}
                    className="flex items-center gap-4 card-hover"
                    variant="link"
                  >
                    <Icon
                      className="size-12"
                      name={skill.name}
                      extension={skill.name === "Necord" ? "png" : "svg"}
                    />
                  </Button>
                ))}
              </div>
            </Card>
          )
        )}
      </div>

      {dialogSkill && (
        <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                <Link
                  className="flex items-center justify-center gap-6"
                  href={dialogSkill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    className="size-12"
                    name={dialogSkill.name}
                    extension={dialogSkill.name === "Necord" ? "png" : "svg"}
                  />
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
  );
}
