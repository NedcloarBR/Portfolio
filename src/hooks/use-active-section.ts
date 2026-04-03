"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
	"about",
	"skills",
	"experience",
	"projects",
	"contact",
] as const;

type Section = (typeof SECTIONS)[number];

// 64px fixed header + 16px buffer
const DETECTION_THRESHOLD = 80;

export function useActiveSection(): Section | null {
	const [activeSection, setActiveSection] = useState<Section | null>(null);

	useEffect(() => {
		let rafId: number | null = null;

		function handleScroll() {
			// Throttle to one update per animation frame to avoid
			// excessive getBoundingClientRect calls on every scroll pixel
			if (rafId !== null) return;
			rafId = requestAnimationFrame(() => {
				rafId = null;
				let current: Section | null = null;

				for (const id of SECTIONS) {
					const el = document.getElementById(id);
					if (!el) continue;
					if (el.getBoundingClientRect().top <= DETECTION_THRESHOLD) {
						current = id;
					}
				}

				setActiveSection(current);
			});
		}

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId !== null) cancelAnimationFrame(rafId);
		};
	}, []);

	return activeSection;
}
