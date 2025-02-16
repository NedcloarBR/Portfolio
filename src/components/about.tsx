"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { HeaderAnchor } from "./header/header-anchor";
import { Icon } from "./icon";
import { Section } from "./section";

export function About() {
	const t = useTranslations("About");
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number | null>(null);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, []);

	return (
		<Section.Root id="about">
			<Section.Title title={t("Title")} />
			<Section.Content className="-mb-16 overflow-wrap break-word">
				<div className="flex flex-col gap-4">
					<img
						src="PPF.jpeg"
						alt="Miguel Alexandre Uhlein PPF"
						className="mt-2 mr-8 inline-block size-80 rounded-xl"
					/>
					<div className="mt-2 flex">
						<Button
							variant="link"
							className="card-hover"
							onClick={() =>
								window.open("archives/CV-MiguelAlexandreUhlein.pdf", "_blank")
							}
						>
							<Icon name="Curriculum" className="size-12" />
						</Button>
						<Mail
							className="card-hover size-12 cursor-pointer"
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth", block: "start" })
							}
						/>
						<Button
							variant="link"
							className="card-hover"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/miguel-alexandre-uhlein-7979a71b0/",
									"_blank",
								)
							}
						>
							<Icon name="LinkedIn" className="size-12" />
						</Button>
					</div>
				</div>
				<div className="mt-8 max-w-xl">
					<motion.div
						className="overflow-hidden"
						initial={{ height: 0 }}
						animate={{ height: isExpanded ? (contentHeight ?? undefined) : 80 }}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
						}}
						onAnimationStart={() => setIsAnimating(true)}
						onAnimationComplete={() => setIsAnimating(false)}
					>
						<div ref={contentRef}>
							{t.rich("Text", {
								br: () => <br />,
								contact: (text) => (
									<HeaderAnchor target="contact" text={text as string} />
								),
							})}
						</div>
					</motion.div>
					<Button
						className="text-blue-500"
						variant="link"
						onClick={() => setIsExpanded((prev) => !prev)}
						disabled={isAnimating}
					>
						{isExpanded ? t("Button2") : t("Button")}
					</Button>
				</div>
			</Section.Content>
		</Section.Root>
	);
}
