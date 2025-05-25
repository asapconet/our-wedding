import { useState, useCallback } from "react";
import type { GalleryImage } from "../types/index";
import { downloadImage, generateFilename } from "@utils/toDownLoad";

export const useGallery = (images: GalleryImage[]) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = useCallback((image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [currentIndex, images]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [currentIndex, images]);

  const handleDownload = useCallback(
    async (imageUrl: string, customFilename?: string) => {
      if (selectedImage) {
        const filename =
          customFilename ||
          generateFilename(
            selectedImage.id,
            "ayo",
            "osa",
            selectedImage.category,
          );
        await downloadImage(imageUrl, filename);
      }
    },
    [selectedImage],
  );

  return {
    selectedImage,
    currentIndex,
    openLightbox,
    closeLightbox,
    goToPrevious,
    goToNext,
    handleDownload,
  };
};
