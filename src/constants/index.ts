import type { ItineraryItem } from "../types/index";
interface DailySchedule {
  [key: string]: ItineraryItem[];
}

export const itineraryItems: DailySchedule = {
  "Friday, May 30": [
    {
      time: "12pm",
      title: "Traditional Wedding Ceremony",
      description:
        "A traditional wedding following the Edo tradition will be held at the bride's family compound in Zaria, Kaduna State, Nigeria.",
    },
    {
      time: "2pm",
      title: "Lunch",
      description:
        "After the ceremony, guests will be treated to a lunch at the bride's family compound.",
    },
    {
      time: "3pm",
      title: "Rest of evening",
      description:
        "The bulk of the evening will feature a small party with music and dancing.",
    },
  ],
  "Saturday, May 31": [
    {
      time: "10am",
      title: "Church Wedding Ceremony",
      description:
        "In the presence of family, friends and well-wishers, the couple will exchange vows and be joined in holy matrimony at the church, RCCG Life Gate Parish, Graceland, Zaria, Kaduna State.",
    },
    {
      time: "11am",
      title: "Photo Session",
      description:
        "Photo sessions with the couple, family members, bridal train, and guests will take place at the church grounds and nearby scenic locations.",
    },
    {
      time: "12pm",
      title: "Lunch",
      description:
        "To rest weary bellies, guests will be treated to a sumptuous lunch buffet.",
    },
    {
      time: "1pm",
      title: "Departures",
      description:
        "Guests begin to depart for their various destinations. The couple and their families will be available to share final hugs, express gratitude, and bid everyone safe travels.",
    },
  ],
  "Sunday, June 1": [
    {
      time: "10am",
      title: "Thanksgiving Service",
      description:
        "A thanksgiving service will be held at RCCG All Nations Assembly, FCT, to give glory to God for a successful wedding celebration and to bless the newlyweds.",
    },
  ],
};

export const paragraphs = [
  "A meeting orchestrated by Fingers beyond the grasp of our feeble minds has blossomed into a beautiful union of two souls.",
  "It started with a tired evening of gruesome examinations in the University of Abuja, Abuja, Nigeria. Ayodeji, would proceed to a prayer meeting against his wishes, but in compliance to an encouragement from his friend, Aaron.",
  "That evening will end with a hospital visit, but would mark the beginning of a beautiful journey.",
];
