"use client";

import Image from "next/image";
import { useState } from "react";

export function GroupLogo({ src, alt }: { src: string; alt: string }) {
	const [error, setError] = useState(false);
	if (error) return null;
	return (
		<Image
			src={src}
			alt={alt}
			width={40}
			height={40}
			className="size-10 rounded-md object-contain"
			onError={() => setError(true)}
		/>
	);
}

