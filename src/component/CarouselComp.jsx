import React, { useEffect } from 'react';
import { Carousel } from 'flowbite-react';

const images = [
  "https://via.placeholder.com/600x400?text=Slide+1",
  "https://via.placeholder.com/600x400?text=Slide+2",
  "https://via.placeholder.com/600x400?text=Slide+3",
  "https://via.placeholder.com/600x400?text=Slide+1",
  "https://via.placeholder.com/600x400?text=Slide+2",
  "https://via.placeholder.com/600x400?text=Slide+3",
];

export function CarouselComp() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </Carousel>
    </div>
  );
}