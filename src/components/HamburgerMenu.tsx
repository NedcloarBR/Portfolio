import { Menu } from "lucide-react";
import { useState } from "react";

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<nav className="w-4 p-[25px] cursor-pointer ">
			<Menu className="size-12 zinc" onClick={() => setIsOpen(!isOpen)} />
			<div className="rounded-md h-20 w-20 p-1 bg-zinc-500 dark:bg-zinc-700" hidden={!isOpen}>
				hehe boy
			</div>
		</nav>
	);
}
