import { Icon } from "./icon";

export function Skills() {
  return (
    <section id="skills" className="grid justify-center h-screen text-white" >
      <div className="flex gap-2">
        <Icon className="size-12" name="NodeJS" />
        <Icon className="size-12" name="TypeScript" />
        <Icon className="size-12" name="JavaScript" />
        <Icon className="size-12" name="NestJS" />
      </div>
  </section>
  )
}