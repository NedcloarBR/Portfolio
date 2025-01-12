import { useTranslations } from "next-intl";
import { ProjectsSmallCard } from "./small-card";
import { Techs } from "@/@types";

export function ProjectsSection() {
  const t = useTranslations("Projects");

  const projects: { name: string, description: string, techs: Techs[]}[] = [
    {
      name: t("N-D-B.Title"),
      description: t("N-D-B.Description"),
      techs: ["Necord", "NestJS", "TypeScript", "NodeJS", "DiscordJS", "Prisma", "Yarn", "PostgreSQL"],
    },
  ]

	return (
    <section id="projects" className="grid justify-center h-screen text-white">
      <div className="mt-8 flex justify-center items-center text-4xl">
        {t("Title")}
      </div>
      <div>
        {projects.map((project) => (
          <ProjectsSmallCard key={project.name} name={project.name} description={project.description} techs={project.techs} />
        ))}
      </div>
    </section>
  )
}
