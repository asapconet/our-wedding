import React, { useState, useEffect } from "react";
import { AiOutlineZoomIn } from "react-icons/ai";
import type { GalleryGridProps, GalleryImage } from "../../types/index";

interface ExtendedGalleryGridProps extends Omit<GalleryGridProps, "images"> {
  images?: GalleryImage[];
  totalImages?: number;
}

export const GalleryGrid: React.FC<ExtendedGalleryGridProps> = ({
  images,
  onImageClick,
  totalImages = 250,
}) => {
  const [validImages, setValidImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkImageUrl = (url: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;

        setTimeout(() => resolve(false), 5000);
      });
    };

    const generateImages = (): GalleryImage[] => {
      const awsImages: GalleryImage[] = [];

      for (let i = 1; i <= totalImages; i++) {
        awsImages.push({
          id: i,
          src: `https://assets.ayoandosa.love/website-images/${i}.jpg`,
          alt: `Ayo & Osa ${i}`,
          category: "wedding",
        });
      }
      return awsImages;
    };

    const validateImages = async (imagesToValidate: GalleryImage[]) => {
      setIsLoading(true);

      const batchSize = 10;
      const validatedImages: GalleryImage[] = [];

      for (let i = 0; i < imagesToValidate.length; i += batchSize) {
        const batch = imagesToValidate.slice(i, i + batchSize);

        const batchPromises = batch.map(async (image) => {
          const isValid = await checkImageUrl(image.src);
          return isValid ? image : null;
        });

        const batchResults = await Promise.all(batchPromises);
        const validBatchImages = batchResults.filter(
          (img): img is GalleryImage => img !== null
        );

        validatedImages.push(...validBatchImages);
      }

      setValidImages(validatedImages);
      setIsLoading(false);
    };

    const imagesToValidate =
      images && images.length > 20 ? images : generateImages();
    validateImages(imagesToValidate);
  }, [images, totalImages]);

  const getGridItemClass = (index: number) => {
    const patterns = [
      "col-span-1 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
    ];

    return patterns[index % patterns.length];
  };

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brown mx-auto mb-4"></div>
            <p className="text-gold">Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  if (validImages.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-ter text-lg">
              No images available at the moment.
            </p>
            <p className="text-ter text-sm mt-2">
              Please check back later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
      <div
        className="grid grid-cols-2 sm:grid-cols-3 grid-rows-[repeat(auto-fit,minmax(120px,1fr))]
       sm:grid-rows-[repeat(auto-fit,minmax(150px,1fr))] gap-2 sm:gap-3 lg:gap-4"
      >
        {validImages.map((image, index) => (
          <div
            key={image.id}
            className={`group relative overflow-hidden rounded-xl cursor-pointer
             transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
             ${getGridItemClass(index)} min-h-0`}
            onClick={() => onImageClick(image, index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent 
            to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div
              className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 text-white
               opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"
            >
              <p className="text-xs sm:text-sm font-medium truncate">
                {image.alt}
              </p>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100
             transition-opacity duration-300"
            >
              <div
                className="bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 transform scale-75
               group-hover:scale-100 transition-transform duration-300"
              >
                <AiOutlineZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
