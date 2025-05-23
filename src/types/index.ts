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
