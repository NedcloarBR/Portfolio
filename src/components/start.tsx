"use client";

import { motion } from "framer-motion";
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

export function Start() {
	const t = useTranslations();
	const startRef = useRef<HTMLElement>(null);

	return (
		<Section.Root ref={startRef} id="start" variant="start">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate="show"
				className="flex flex-col items-center space-y-2 text-center"
			>
				<motion.div variants={itemVariants} className="text-xl sm:text-3xl">
					{t("Start.Hello")}
				</motion.div>
				<motion.div
					variants={itemVariants}
					className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl dark:from-green-400 dark:to-teal-300"
				>
					{t("Start.Name")}
				</motion.div>
				<motion.div
					variants={itemVariants}
					className="text-lg text-muted-foreground sm:text-2xl"
				>
					{t("Start.Details")}
				</motion.div>
			</motion.div>
			<BackToTop startRef={startRef} />
		</Section.Root>
	);
}
