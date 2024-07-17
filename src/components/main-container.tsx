import type { PropsWithChildren } from "react";

export function MainContainer({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className="p-0 m-0 font-medium bg-zinc-300 dark:bg-zinc-800 overflow-x-hidden">{children}</div>
  );
}