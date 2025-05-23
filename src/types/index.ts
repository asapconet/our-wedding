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
