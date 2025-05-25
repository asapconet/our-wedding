import React from "react";
import type { StoryLayoutProps } from "../../types/index";

export const SingleImageLayout: React.FC<StoryLayoutProps> = ({
  title,
  content,
  image,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        <div className="order-2 lg:order-1">
          <img
            src={image}
            alt={title as string}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="order-1 lg:order-2 pt-0 lg:pt-4">
          <h3 className="text-xl sm:text-2xl font-light text-gold mb-4 sm:mb-6">
            {title}
          </h3>
          <p className="text-neu-neu-400 text-sm sm:text-base leading-relaxed mb-4 whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
