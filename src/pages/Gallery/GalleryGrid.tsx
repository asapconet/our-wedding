import React from "react";
import { AiOutlineZoomIn } from "react-icons/ai";
import type { GalleryGridProps } from "../../types/index";

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer
             transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => onImageClick(image, index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent 
            to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"
            >
              <p className="text-xs font-medium truncate">{image.alt}</p>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
             transition-opacity duration-300"
            >
              <div
                className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-75
               group-hover:scale-100 transition-transform duration-300"
              >
                <AiOutlineZoomIn className="w-6 h-6 text-gray-800" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
