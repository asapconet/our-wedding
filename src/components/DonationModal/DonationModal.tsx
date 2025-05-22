import React, { useState } from "react";
import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";
import type { DonationModalProps } from "@types/index";
import { CouplesCard } from "./CouplesCard";

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  brideDetails,
  groomDetails,
}) => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const copyAccountNumber = async (accountNumber: string, person: string) => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopiedAccount(person);
      setTimeout(() => setCopiedAccount(null), 2000);
    } catch (err) {
      console.error("Failed to copy account number: ", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader onClose={onClose} />

        <div className="p-4 space-y-6">
          <div className="space-y-6">
            <CouplesCard
              details={brideDetails}
              person="bride"
              bgColor="inherit"
              accentColor="border-amber-300"
              copiedAccount={copiedAccount}
              onCopyAccount={copyAccountNumber}
            />

            <CouplesCard
              details={groomDetails}
              person="groom"
              bgColor="inherit"
              accentColor="border-orange-300"
              copiedAccount={copiedAccount}
              onCopyAccount={copyAccountNumber}
            />
          </div>
        </div>

        <ModalFooter />
      </div>
    </div>
  );
};
