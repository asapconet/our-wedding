import type { ReactNode } from "react";

export type ItineraryItem = {
  time: string;
  title: string;
  description: string;
};

export type DonationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  brideDetails: {
    accountNumber: string;
    bankName: string;
    accountName: string;
  };
  groomDetails: {
    accountNumber: string;
    bankName: string;
    accountName: string;
  };
};

export type PersonDetails = {
  accountNumber: string;
  bankName: string;
  accountName: string;
};

export interface StoryData {
  title: string;
  content: string;
  image?: string;
}

export interface StoryLayoutProps {
  title: string | ReactNode;
  content: string;
  image?: string;
}

export interface TimelineProps {
  stories: StoryData[];
}

export interface ImageCarouselProps extends StoryLayoutProps {
  reverse?: boolean;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "engagement" | "wedding" | "casual";
}

export interface LightboxProps {
  selectedImage: GalleryImage | null;
  currentIndex: number;
  images: GalleryImage[];
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onDownload: (imageUrl: string, filename: string) => void;
}

export interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage, index: number) => void;
}

export interface GalleryHeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
}
