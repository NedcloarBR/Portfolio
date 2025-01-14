import { useTranslations } from "next-intl";
import { ProjectsSmallCard } from "./small-card";
import { projects } from "@/constants";

export function ProjectsSection() {
  const t = useTranslations("Projects");

	return (
    <section id="projects" className="grid justify-center h-screen text-white">
      <div className="mt-8 flex justify-center items-center text-4xl">
        {t("Title")}
      </div>
      <div>
        {projects.map((project) => (
          <ProjectsSmallCard key={project.name} info={project} />
        ))}
      </div>
    </section>
  )
}
