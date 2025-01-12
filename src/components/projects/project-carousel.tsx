"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface ProjectCarouselProps {
  name: string;
}

export function ProjectCarousel({ name }: ProjectCarouselProps) {
  const [pictures, setPictures] = useState<{ id: number, src: string; alt: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await fetch(`/api/images/${name}`);
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
  }, [name]);

  if(loading) {
    return (
      <Carousel>
        <CarouselContent className="w-full max-w-64">
          <CarouselItem>
            <div className="p-1">
              <Card className="w-[230px]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="animate-pulse bg-gray-300 w-full h-full rounded-sm"></div>
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
    <Carousel>
      <CarouselContent className="w-full max-w-64">
        {pictures.map((picture) => (
          <CarouselItem key={picture.id}>
            <div className="p-1">
              <Card className="w-[230px]">
                <CardContent className="flex aspect-square items-center justify-center p-6">
                 <img src={picture.src} alt={picture.alt} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}