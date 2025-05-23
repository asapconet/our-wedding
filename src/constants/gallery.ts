import type { GalleryImage } from "../types/index";

export const galleryPageImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779227/nativeOne_prxq80.jpg",
    alt: "Ayo & Osa - Engagement Photos",
    category: "engagement",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779423/nativeTwo_rsfjv3.jpg",
    alt: "Ayo & Osa - Outdoor Portrait",
    category: "engagement",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779589/englishOne_cabfly.jpg",
    alt: "Ayo & Osa - Photos",
    category: "engagement",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747781165/englishShirtOne_u7zwku.jpg",
    alt: "Ayo & Osa - Moments",
    category: "casual",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779715/best_3_owuag4.jpg",
    alt: "Ayo & Osa - Preparation",
    category: "wedding",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779825/nativeThree_alxdtt.jpg",
    alt: "Ayo & Osa - Walk",
    category: "casual",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779715/best_3_owuag4.jpg",
    alt: "Ayo & Osa - Hour",
    category: "engagement",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747781569/bride_zb0jji.jpg",
    alt: "Ayo & Osa - Forever",
    category: "wedding",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779715/best_3_owuag4.jpg",
    alt: "Ayo & Osa - Candid Moments",
    category: "casual",
  },
];

interface Image {
  src: string;
  alt: string;
  caption: string;
}

export const prevGalleryImages: Image[] = [
  {
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779227/nativeOne_prxq80.jpg",
    alt: "Asoke one",
    caption: "Asokeing",
  },
  {
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747781165/englishShirtOne_u7zwku.jpg",
    alt: "Englishha",
    caption: "Asokeinging",
  },
  {
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747781569/bride_zb0jji.jpg",
    alt: "Blide",
    caption: "Briding",
  },
  {
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779679/englishTwo_buatws.jpg",
    alt: "Englishing two",
    caption: "Englishinging",
  },
  {
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747781380/groom_bgfb4r.jpg",
    alt: "groom one",
    caption: "Grooming",
  },
  {
    src: "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779715/best_3_owuag4.jpg",
    alt: "Naitive four",
    caption: "Nativitity",
  },
];
