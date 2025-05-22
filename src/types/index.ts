export type ItineraryItem ={
  time: string;
  title: string;
  description: string;
}


export interface DonationModalProps {
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
}

export interface PersonDetails {
  accountNumber: string;
  bankName: string;
  accountName: string;
}