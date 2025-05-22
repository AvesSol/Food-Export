import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Caraousel() {
  const images = [
    "/Events/e4.jpeg",
    "/Events/e1.jpeg",
    "/Events/e2.jpeg",
    "/Events/e3.jpeg",
    "/Events/e5.jpeg",
    "/Events/e6.jpeg",
    "/Events/e7.jpeg",
  ];

  return (
    <Carousel className="w-[80vw] sm:w-[80vw] mx-auto ">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="h-[40vh] shadow-sm sm:h-[80%] w-[90vw] sm:w-[80vw] overflow-hidden">
              <img src={src} className="h-[100%] w-[100%] object-cover" alt={`Event ${index + 1}`} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
