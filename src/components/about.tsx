"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
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
		<Section.Root id="about" className="bg-muted/20">
			<Section.Title title={t("Title")} />
			<Section.Content className="flex-col items-center gap-8 break-words px-6 py-8 md:flex-row md:items-start">
				<div className="flex shrink-0 flex-col items-center gap-4">
					<Image
						src="/PPF.jpeg"
						alt="Miguel Alexandre Uhlein"
						width={320}
						height={320}
						className="rounded-xl ring-2 ring-border"
					/>
					<div className="flex gap-2">
						<Button
							variant="outline"
							className="card-hover gap-2"
							onClick={() =>
								window.open("archives/CV-MiguelAlexandreUhlein.pdf", "_blank")
							}
						>
							<Icon name="Curriculum" className="size-4" />
							{t("CV")}
						</Button>
						<Button
							variant="outline"
							className="card-hover gap-2"
							onClick={() =>
								document
									.getElementById("contact")
									?.scrollIntoView({ behavior: "smooth", block: "start" })
							}
						>
							<Mail className="size-4" />
							{t("Email")}
						</Button>
						<Button
							variant="outline"
							className="card-hover gap-2"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/miguel-alexandre-uhlein-7979a71b0/",
									"_blank",
								)
							}
						>
							<Icon name="LinkedIn" className="size-4" />
							{t("LinkedIn")}
						</Button>
					</div>
				</div>
				<div className="max-w-xl">
					<div className="relative">
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
							<div ref={contentRef} className="leading-relaxed">
								{t.rich("Text", {
									br: () => <br />,
									contact: (text) => (
										<HeaderAnchor target="contact" text={text as string} />
									),
								})}
							</div>
						</motion.div>
						{!isExpanded && !isAnimating && (
							<div className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-muted/20 to-transparent" />
						)}
					</div>
					<Button
						className="mt-1 gap-1 text-primary"
						variant="link"
						onClick={() => setIsExpanded((prev) => !prev)}
						disabled={isAnimating}
					>
						{isExpanded ? (
							<>
								{t("Button2")}
								<ChevronUp className="size-4" />
							</>
						) : (
							<>
								{t("Button")}
								<ChevronDown className="size-4" />
							</>
						)}
					</Button>
				</div>
			</Section.Content>
		</Section.Root>
	);
}
