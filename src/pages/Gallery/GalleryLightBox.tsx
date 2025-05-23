import React, { useEffect } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import type { LightboxProps } from "../../types/index";

export const Lightbox: React.FC<LightboxProps> = ({
  selectedImage,
  currentIndex,
  images,
  onClose,
  onPrevious,
  onNext,
  onDownload,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrevious();
          break;
        case "ArrowRight":
          onNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, onClose, onPrevious, onNext]);

  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-4">
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10
           hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <IoChevronBack className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10
           hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <IoChevronForward className="w-6 h-6" />
        </button>

        <div className="absolute top-4 right-4 z-10 flex gap-3">
          <button
            onClick={() =>
              onDownload(selectedImage.src, `ayo-osa-${selectedImage.id}.jpg`)
            }
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full
             p-3 text-white transition-all duration-300 hover:scale-110"
            aria-label="Download image"
          >
            <MdDownload className="w-6 h-6" />
          </button>

          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full
             p-3 text-white transition-all duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <IoClose className="w-6 h-6" />
          </button>
        </div>

        <div className="relative max-w-full max-h-full">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl"
          />

          <div className="absolute -bottom-5 left-0 right-0 bg-gradient-to-t from-black/80 
          to-transparent p-6 rounded-b-lg">
            <h3 className="text-white text-lg font-medium mb-1">
              {selectedImage.alt}
            </h3>
            <p className="text-white/80 text-sm">
              Photo {currentIndex + 1} of {images.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
