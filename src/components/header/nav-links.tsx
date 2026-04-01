"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import { HeaderAnchor } from "./header-anchor";

const NAV_SECTIONS = ["about", "skills", "projects", "contact"] as const;

interface Props {
	onNavigate?: () => void;
}

export function NavLinks({ onNavigate }: Props) {
	const activeSection = useActiveSection();

	return (
		<>
			{NAV_SECTIONS.map((section) => (
				<HeaderAnchor
					key={section}
					target={section}
					isActive={activeSection === section}
					onNavigate={onNavigate}
				/>
			))}
		</>
	);
}
