import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
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
  totalImages = 229,
  initialBatchSize = 12,
  loadMoreBatchSize = 8,
}) => {
  const [validImages, setValidImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const isValidatingRef = useRef(false);
  const hasInitializedRef = useRef(false);

  const allImages = useMemo((): GalleryImage[] => {
    if (images && images.length > 20) {
      return images;
    }

    const awsImages: GalleryImage[] = [];
    for (let i = 1; i <= totalImages; i++) {
      awsImages.push({
        id: i,
        src: `https://assets.ayoandosa.love/website-images/${i}-min.jpg`,
        alt: `Ayo & Osa ${i}`,
        category: "wedding",
      });
    }
    return awsImages;
  }, [images, totalImages]);

  const checkImageUrl = useCallback((url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;

      setTimeout(() => resolve(false), 3000);
    });
  }, []);

  const validateAndAddImages = useCallback(
    async (startIndex: number, batchSize: number) => {
      if (isValidatingRef.current || startIndex >= allImages.length) {
        if (startIndex >= allImages.length) {
          setHasMore(false);
        }
        return;
      }

      isValidatingRef.current = true;
      setIsLoading(true);

      try {
        const batch = allImages.slice(startIndex, startIndex + batchSize);
        const validatedBatch: GalleryImage[] = [];

        const validationPromises = batch.map(async (image) => {
          const isValid = await checkImageUrl(image.src);
          return isValid ? image : null;
        });

        const results = await Promise.all(validationPromises);

        for (const result of results) {
          if (result) {
            validatedBatch.push(result);
          }
        }

        if (validatedBatch.length > 0) {
          setValidImages((prev) => [...prev, ...validatedBatch]);
        }

        setCurrentIndex(startIndex + batchSize);

        if (startIndex + batchSize >= allImages.length) {
          setHasMore(false);
        }

        if (isInitialLoad) {
          setIsInitialLoad(false);
        }
      } catch (error) {
        console.error("Error validating images:", error);
      } finally {
        setIsLoading(false);
        isValidatingRef.current = false;
      }
    },
    [allImages, checkImageUrl, isInitialLoad]
  );

  useEffect(() => {
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      validateAndAddImages(0, initialBatchSize);
    }
  }, [validateAndAddImages, initialBatchSize]);

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
          !isValidatingRef.current &&
          validImages.length >= 7 &&
          !isInitialLoad
        ) {
          validateAndAddImages(currentIndex, loadMoreBatchSize);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      }
    );

    if (loadMoreRef.current && validImages.length >= 7) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    hasMore,
    isLoading,
    validImages.length,
    currentIndex,
    loadMoreBatchSize,
    validateAndAddImages,
    isInitialLoad,
  ]);

  const getGridItemClass = useCallback((index: number) => {
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
  }, []);
  if (validImages.length === 0 && !isLoading && !hasMore && !isInitialLoad) {
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
      {validImages.length === 0 && isInitialLoad && isLoading && (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brown mx-auto mb-2"></div>
            <p className="text-gold text-sm">Loading images...</p>
          </div>
        </div>
      )}

      {validImages.length > 0 && (
        <>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 grid-rows-[repeat(auto-fit,minmax(120px,1fr))]
           sm:grid-rows-[repeat(auto-fit,minmax(150px,1fr))] gap-2 sm:gap-3 lg:gap-4"
          >
            {validImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className={`group relative overflow-hidden rounded-xl cursor-pointer
                 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                 ${getGridItemClass(index)} min-h-0 animate-fade-in`}
                onClick={() => onImageClick(image, index)}
                style={{
                  animationDelay: `${(index % 12) * 50}ms`,
                }}
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

          {hasMore && <div ref={loadMoreRef} className="h-4 py-8" />}

          {isLoading && !isInitialLoad && hasMore && (
            <div className="flex justify-center py-8">
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-brown"></div>
                <span className="text-gold text-sm">Loading more...</span>
              </div>
            </div>
          )}
        </>
      )}

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
