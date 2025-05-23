import { useState, useCallback, useEffect } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { MdDownload } from "react-icons/md";
import { AiOutlineZoomIn } from "react-icons/ai";

interface Image {
  id?: string;
  src: string;
  alt?: string;
  caption: string;
}

interface ImageGalleryProps {
  images: Image[];
}

interface LightboxProps {
  selectedImage: Image | null;
  currentIndex: number;
  images: Image[];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onDownload: (src: string, filename: string) => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  selectedImage,
  currentIndex,
  images,
  onClose,
  onPrevious,
  onNext,
  onDownload,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
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
    },
    [selectedImage, onClose, onPrevious, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

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
              onDownload(
                selectedImage.src,
                `gallery-${selectedImage.id || currentIndex}.jpg`
              )
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

        <div className="relative max-w-fit max-h-fit">
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />

          <div
            className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 
          to-transparent p-6 rounded-b-lg"
          >
            <h3 className="text-white text-lg font-medium mb-1">
              {selectedImage.caption || selectedImage.alt}
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

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const openLightbox = (image: Image, index: number) => {
    setCurrentIndex(index);
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const prevImage = useCallback(() => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [currentIndex, images]);

  const nextImage = useCallback(() => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [currentIndex, images]);

  const handleDownload = (src: string, filename: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full mt-8 bg-gray-100 py-6 sm:py-12 lg:py-24">
      <div className="relative">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6
         gap-2 sm:gap-4 px-2 sm:px-4">
            {images.map((image, index) => (
              <div
                key={image.id || index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer
                 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => openLightbox(image, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt || `Gallery image ${index + 1}`}
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
                  <p className="text-xs font-medium truncate">
                    {image.caption || image.alt}
                  </p>
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

      <Lightbox
        selectedImage={selectedImage}
        currentIndex={currentIndex}
        images={images}
        onClose={closeLightbox}
        onPrevious={prevImage}
        onNext={nextImage}
        onDownload={handleDownload}
      />
    </div>
  );
};
