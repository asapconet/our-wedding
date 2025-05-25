import React from "react";
import type { GalleryHeaderProps } from "../../types/index";

export const GalleryHeader: React.FC<GalleryHeaderProps> = ({
  title = "Christabel & Ayodeji",
  subtitle = "Our Photo Gallery",
  description = "Capturing our beautiful journey together",
}) => {
  return (
    <div className="relative bg-white/80 backdrop-blur-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-Gold mb-2">
            {title}
          </h1>
          <p className="text-lg text-orange-400 font-medium">{subtitle}</p>
          <p className="text-sm text-brown mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};
