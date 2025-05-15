import type { ItineraryItem } from "../types/index";
import DesertShot from "../assets/images/desertPhoto.png";

interface DailySchedule {
  [key: string]: ItineraryItem[];
}

export const days = ["Friday, July 11", "Saturday, July 12", "Sunday, July 13"];

export const itineraryItems: DailySchedule = {
  "Friday, July 11": [
    {
      time: "10am",
      title: "Item Title",
      description:
        "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
    },
    {
      time: "12pm",
      title: "Item Title",
      description:
        "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
    },
    {
      time: "2pm",
      title: "Item Title",
      description:
        "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
    },
  ],
  "Saturday, July 12": [
    {
      time: "9am",
      title: "Item Title",
      description:
        "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
    },
    {
      time: "11am",
      title: "Item Title",
      description:
        "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
    },
  ],
  "Sunday, July 13": [
    {
      time: "10am",
      title: "Item Title",
      description:
        "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
    },
    {
      time: "1pm",
      title: "Item Title",
      description:
        "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
    },
  ],
};

export const paragraphs = [
  "Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius. Quis purus nisl orci eu, ultrices.",
  "Purus pretium egestas ultricies tempus sit elit. Maecenas pellentesque sit eros vitae. Maecenas suspendisse tincidunt ullamcorper justo neque quis et, laoreet. Vitae lacus, aliquet lorem mauris, sit dolor sodales. Nullam quam quis lorem dui tristique massa enim.",
  "Faucibus sed egestas mollis vivamus et sed sed.",
];

interface Image {
  src: string;
  alt: string;
  caption: string;
}

export const galleryImages: Image[] = [
  {
    src: DesertShot,
    alt: "Desert meeting",
    caption: "Team gathering in the desert",
  },
  {
    src: DesertShot,
    alt: "Company retreat",
    caption: "Annual company retreat",
  },
  {
    src: DesertShot,
    alt: "Team building",
    caption: "Team building activity",
  },
  {
    src: DesertShot,
    alt: "Office space",
    caption: "Our new office space",
  },
  {
    src: DesertShot,
    alt: "Product launch",
    caption: "Latest product launch event",
  },
  {
    src: DesertShot,
    alt: "Community outreach",
    caption: "Community outreach program",
  },
];
