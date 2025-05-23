import React from "react";
import { GalleryHeader } from "./GalleryHeader";
import { useGallery } from "@hooks/useGallery";
import { galleryPageImages } from "@constants/gallery";
import { GalleryGrid } from "./GalleryGrid";
import { Lightbox } from "./GalleryLightBox";
import { BackButton } from "@components/BackButton";

const GalleryPage: React.FC = () => {
  const {
    selectedImage,
    currentIndex,
    openLightbox,
    closeLightbox,
    goToPrevious,
    goToNext,
    handleDownload,
  } = useGallery(galleryPageImages);

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <GalleryHeader />

      <GalleryGrid images={galleryPageImages} onImageClick={openLightbox} />

      <Lightbox
        selectedImage={selectedImage}
        currentIndex={currentIndex}
        images={galleryPageImages}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onDownload={handleDownload}
      />

      <div className="fixed bottom-6 left-6 z-40">
        <BackButton onClick={handleBackClick} />
      </div>
    </div>
  );
};

export default GalleryPage;
