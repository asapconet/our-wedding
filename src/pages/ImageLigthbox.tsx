import { useState, useEffect, useCallback } from "react";

interface Image {
  src: string;
  alt?: string;
  caption: string;
}

interface ImageGalleryProps {
  images: Image[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, prevImage, nextImage]);

  return (
    <div className="w-full mt-8 bg-gray-100 py-6 sm:py-12 lg:py-24">
      <div className="relative">
        <div
          className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
         gap-2 sm:gap-4 px-2 sm:px-4"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-105"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt || `Gallery image ${index + 1}`}
                className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded"
              />
            </div>
          ))}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="bg-plantBg bg-contain bg-no-repeat bg-center h-48 sm:h-64 md:h-80 lg:h-96
           w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg opacity-15"
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-85 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <button
            className="absolute top-4 right-6 text-white hover:text-gray-400 z-10"
            onClick={closeLightbox}
          >
            X
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-400 z-10"
            onClick={prevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 17 13 12 18 7"></polyline>
            </svg>
          </button>

          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="flex-grow flex items-center justify-center w-full">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
                className="w-full h-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="text-white mt-4 text-center">
              <div className="text-xl mb-1">{images[currentIndex].caption}</div>
              <div className="text-gray-300 text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-400 z-10"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
