import { cn } from "@/lib/utils";
import type{ ClassValue } from "clsx";

interface SectionRootProps {
  id: string;
  children: React.ReactNode;
  className?: ClassValue;
  ref?: React.Ref<HTMLElement>;
}

export function SectionRoot({ id, children, className, ref }: Readonly<SectionRootProps>) {
  return (
    <section ref={ref} id={id} className={cn("grid justify-center h-screen", className)}>
      {children}
    </section>
  );
}