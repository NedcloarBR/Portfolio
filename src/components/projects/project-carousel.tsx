"use client";

import {
	Card,
	CardContent,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectCarouselProps {
	name: string;
}

export function ProjectCarousel({ name }: ProjectCarouselProps) {
	const [pictures, setPictures] = useState<
		{ id: number; src: string; alt: string }[]
	>([]);
	const [loading, setLoading] = useState(true);
	const nameForAssets = name.split(" ").join("");
	useEffect(() => {
		const fetchPictures = async () => {
			try {
				const response = await fetch(`/api/images/projects/${nameForAssets}`);
				if (response.ok) {
					const data = await response.json();
					setPictures(data);
				} else {
					console.error("Failed to fetch images");
				}
			} catch (error) {
				console.error("Error fetching images:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchPictures();
	}, [nameForAssets]);

	if (loading) {
		return (
			<Carousel className="w-full">
				<CarouselContent>
					<CarouselItem>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-video items-center justify-center p-6">
									<div className="h-full w-full animate-pulse rounded-sm bg-gray-300" />
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		);
	}

	return (
		<Carousel className="w-full">
			<CarouselContent>
				{pictures.map((picture) => (
					<CarouselItem key={picture.id}>
						<div className="p-1">
							<Card>
								<CardContent className="flex aspect-video items-center justify-center p-4">
									<Image
										src={picture.src}
										alt={picture.alt}
										width={400}
										height={225}
										className="h-full w-full object-contain"
										unoptimized={true}
									/>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
