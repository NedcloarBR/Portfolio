"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
	delay?: number;
}

export function FadeInView({ children, className, delay = 0 }: Props) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 28 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.1 }}
			transition={{ duration: 0.7, ease: "easeOut", delay }}
		>
			{children}
		</motion.div>
	);
}
