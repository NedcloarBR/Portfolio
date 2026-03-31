"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { BackToTop } from "./back-to-top";
import { Section } from "./section";

const containerVariants = {
	hidden: {},
	show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const TECH_BADGES = [
	"TypeScript",
	"NestJS",
	"Node.js",
	"PostgreSQL",
	"Docker",
];

const blobs = [
	{
		id: "blob-primary",
		className:
			"absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-green-500/20 blur-[130px] dark:bg-green-500/10",
		animate: { x: [0, 50, -20, 0], y: [0, -40, 25, 0] },
		duration: 13,
	},
	{
		id: "blob-secondary",
		className:
			"absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-teal-500/20 blur-[110px] dark:bg-teal-500/10",
		animate: { x: [0, -35, 25, 0], y: [0, 30, -45, 0] },
		duration: 16,
	},
	{
		id: "blob-center",
		className:
			"absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[90px] dark:bg-emerald-500/5",
		animate: { x: [0, 25, -25, 0], y: [0, -25, 25, 0] },
		duration: 19,
	},
];

export function Start() {
	const t = useTranslations();
	const startRef = useRef<HTMLElement>(null);

	return (
		<Section.Root
			ref={startRef}
			id="start"
			variant="start"
			className="relative overflow-hidden"
		>
			{blobs.map((blob) => (
				<motion.div
					key={blob.id}
					className={blob.className}
					animate={blob.animate}
					transition={{
						duration: blob.duration,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
			))}

			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="show"
				className="relative flex flex-col items-center space-y-2 text-center"
			>
				<motion.div variants={itemVariants} className="text-xl sm:text-3xl">
					{t("Start.Hello")}
				</motion.div>
				<motion.div
					variants={itemVariants}
					className="animate-gradient bg-[length:200%_auto] bg-gradient-to-r from-green-600 via-teal-400 to-emerald-500 bg-clip-text font-bold text-4xl text-transparent sm:text-6xl dark:from-green-400 dark:via-teal-300 dark:to-emerald-300"
				>
					{t("Start.Name")}
				</motion.div>
				<motion.div
					variants={itemVariants}
					className="text-lg text-muted-foreground sm:text-2xl"
				>
					{t("Start.Details")}
				</motion.div>
				<motion.div variants={itemVariants} className="flex gap-3 pt-4">
					<Button
						size="lg"
						onClick={() =>
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth", block: "start" })
						}
					>
						{t("Start.CTAProjects")}
					</Button>
					<Button
						size="lg"
						variant="outline"
						onClick={() =>
							document
								.getElementById("contact")
								?.scrollIntoView({ behavior: "smooth", block: "start" })
						}
					>
						{t("Start.CTAContact")}
						<ArrowDown className="size-4" />
					</Button>
				</motion.div>
				<motion.div
					variants={itemVariants}
					className="flex flex-wrap justify-center gap-2 pt-2"
				>
					{TECH_BADGES.map((tech) => (
						<span
							key={tech}
							className="rounded-full border border-border bg-muted/50 px-3 py-1 text-muted-foreground text-xs backdrop-blur-sm"
						>
							{tech}
						</span>
					))}
				</motion.div>
			</motion.div>

			<motion.div
				className="-translate-x-1/2 absolute bottom-8 left-1/2"
				animate={{ y: [0, 8, 0] }}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			>
				<ArrowDown className="size-5 text-muted-foreground/50" />
			</motion.div>

			<BackToTop startRef={startRef} />
		</Section.Root>
	);
}
