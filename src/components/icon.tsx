import { ComponentProps } from "react";

interface Props extends ComponentProps<"img"> {
  name: string;
}

export function Icon({ name, className }: Readonly<Props>) {
  return <img className={className} src={`/icons/${name}.svg`} alt={`${name} Icon`} />
}