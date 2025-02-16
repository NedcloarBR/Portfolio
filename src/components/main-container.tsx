import type { PropsWithChildren } from "react";

export function MainContainer({ children }: Readonly<PropsWithChildren>) {
	return (
		<div className="m-0 overflow-x-hidden bg-zinc-300 p-0 font-medium dark:bg-zinc-800">
			{children}
		</div>
	);
}
