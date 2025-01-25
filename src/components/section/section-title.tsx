import { cn } from "@/lib/utils";
import type { ClassValue } from "clsx";

interface SectionTitleProps {
  title: string;
  className?: ClassValue;
}

export function SectionTitle({ title, className }: Readonly<SectionTitleProps>) {
  return (
    <h1 className={cn("mt-8 flex justify-center items-center text-4xl", className)}>
      {title}
    </h1>
  );
}