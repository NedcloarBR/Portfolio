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
import { Techs } from "@/@types";

interface ProjectsSmallCardProps {
  name: string;
  description: string;
  techs: Techs[];
}

export function ProjectsSmallCard(props: Readonly<ProjectsSmallCardProps>) {
  const uniqueTechs = Array.from(new Set(props.techs));

  return (
    <Card className="w-[230px] card-hover cursor-pointer">
      <CardHeader>
        <img src={`images/${props.name}/Logo.png`} alt={`${props.name} Logo`} className="w-[210px] h-[90px] rounded-sm" />
        <Separator />
        <CardTitle className="flex justify-center">{props.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{props.description.split(".")[0]+"."}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center flex-wrap gap-2">
        {uniqueTechs.map((tech) => (
          <Icon key={tech} name={tech} extension={tech === "Necord" ? "png" : "svg"}  className="size-6"/>
        ))}
      </CardFooter>
    </Card>
  );
}
