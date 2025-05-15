import { useState, useEffect, useCallback } from "react";
import { FaAngleDoubleLeft, FaAngleRight } from "react-icons/fa";

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
    <div className="w-full my-8">
      <div className="flex flex-wrap justify-center gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer mb-4 hover:opacity-80 transition-opacity"
          >
            <img
              src={image.src}
              alt={image.alt || `Gallery image ${index + 1}`}
              className="w-24 h-24 object-cover"
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={handleOutsideClick}
        >
          <button
            className="absolute top-4 right-6 text-white hover:text-gray-400"
            onClick={closeLightbox}
          >
            X
          </button>

          <button
            className="absolute left-4 text-white hover:text-gray-400"
            onClick={prevImage}
          >
            <FaAngleDoubleLeft size={40} />
          </button>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt || `Image ${currentIndex + 1}`}
                className="max-h-[70vh] max-w-full object-contain"
              />
            </div>

            <div className="text-white mt-2">
              <div className="text-xl mb-1">{images[currentIndex].caption}</div>
              <div className="text-gray-300 text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>

          <button
            className="absolute right-4 text-white hover:text-gray-400"
            onClick={nextImage}
          >
            <FaAngleRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};
