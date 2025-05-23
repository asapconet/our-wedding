import React, { useState, useEffect, useCallback, useRef } from "react";
import { AiOutlineZoomIn } from "react-icons/ai";
import type { GalleryGridProps, GalleryImage } from "../../types/index";

interface ExtendedGalleryGridProps extends Omit<GalleryGridProps, "images"> {
  images?: GalleryImage[];
  totalImages?: number;
  initialBatchSize?: number;
  loadMoreBatchSize?: number;
}

export const GalleryGrid: React.FC<ExtendedGalleryGridProps> = ({
  images,
  onImageClick,
  totalImages = 50,
  initialBatchSize = 12,
  loadMoreBatchSize = 8,
}) => {
  const [validImages, setValidImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Function to check if an image URL is valid
  const checkImageUrl = useCallback((url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;

      // Add timeout to prevent hanging on slow connections
      setTimeout(() => resolve(false), 3000);
    });
  }, []);

  const generateImages = useCallback((): GalleryImage[] => {
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
  }, [totalImages]);

  const validateAndAddImages = useCallback(
    async (imagesToValidate: GalleryImage[], batchSize: number) => {
      if (currentIndex >= imagesToValidate.length) {
        setHasMore(false);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);

      const batch = imagesToValidate.slice(
        currentIndex,
        currentIndex + batchSize
      );
      const validatedBatch: GalleryImage[] = [];

      // Process images one by one to show them as they load
      for (const image of batch) {
        const isValid = await checkImageUrl(image.src);
        if (isValid) {
          validatedBatch.push(image);
          // Add image immediately when validated
          setValidImages((prev) => [...prev, image]);
        }
      }

      setCurrentIndex((prev) => prev + batchSize);

      // Check if we have more images to load
      if (currentIndex + batchSize >= imagesToValidate.length) {
        setHasMore(false);
      }

      setIsLoading(false);
    },
    [currentIndex, checkImageUrl]
  );

  // Initialize images and load first batch
  useEffect(() => {
    const imagesToUse =
      images && images.length > 20 ? images : generateImages();
    setAllImages(imagesToUse);
    setValidImages([]);
    setCurrentIndex(0);
    setHasMore(true);

    // Load initial batch
    validateAndAddImages(imagesToUse, initialBatchSize);
  }, [images, generateImages, initialBatchSize, validateAndAddImages]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          hasMore &&
          !isLoading &&
          allImages.length > 0
        ) {
          validateAndAddImages(allImages, loadMoreBatchSize);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // Start loading when 100px away from viewport
      }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoading, allImages, validateAndAddImages, loadMoreBatchSize]);

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

  if (validImages.length === 0 && !isLoading && !hasMore) {
    return (
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              No images available at the moment.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Please check back later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-8 lg:py-12">
      {validImages.length === 0 && isLoading && (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-2"></div>
            <p className="text-gray-600 text-sm">Loading images...</p>
          </div>
        </div>
      )}

      {validImages.length > 0 && (
        <div
          className="grid grid-cols-2 sm:grid-cols-3 grid-rows-[repeat(auto-fit,minmax(120px,1fr))]
         sm:grid-rows-[repeat(auto-fit,minmax(150px,1fr))] gap-2 sm:gap-3 lg:gap-4"
        >
          {validImages.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer
               transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
               ${getGridItemClass(index)} min-h-0 animate-fade-in`}
              onClick={() => onImageClick(image, index)}
              style={{
                animationDelay: `${(index % 12) * 50}ms`, // Stagger animation for visual appeal
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  // Hide image if it fails to load (backup protection)
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
      )}

      {/* Load more trigger */}
      {hasMore && !isLoading && <div ref={loadMoreRef} className="h-4 py-8" />}

      {/* Loading indicator */}
      {isLoading && hasMore && (
        <div className="flex justify-center py-8">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            <span className="text-gray-600 text-sm">Loading more...</span>
          </div>
        </div>
      )}

      {/* Add fade-in animation styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `,
        }}
      />
    </div>
  );
};
