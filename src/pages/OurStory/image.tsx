import React from "react";
import type { ImageCarouselProps } from "../../types/index";

export const ImageCarouselLayout: React.FC<ImageCarouselProps> = ({
  title,
  content,
  image,
  reverse = false,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className={reverse ? "lg:order-2" : "lg:order-1"}>
          <h3 className="text-xl sm:text-2xl font-light text-gold mb-4 sm:mb-6">
            {title}
          </h3>
          <p className="text-neu-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
        <div className={reverse ? "lg:order-1" : "lg:order-2"}>
          <img
            src={image}
            alt={title as string}
            className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
