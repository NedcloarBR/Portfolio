import type { PropsWithChildren } from "react";

export function MainContainer({ children }: PropsWithChildren) {
  return (
    <div className="p-0 m-0 h-screen w-screen font-medium bg-zinc-300 dark:bg-zinc-800 overflow-hidden">{children}</div>
  );
}