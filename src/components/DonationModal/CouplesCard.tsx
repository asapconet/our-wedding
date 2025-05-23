import React from "react";
import { BiHeart } from "react-icons/bi";
import { BsBank, BsPerson } from "react-icons/bs";
import { CopyButton } from "./CopyButton";
import type { PersonDetails } from "../../types/index";

interface PersonCardProps {
  details: PersonDetails;
  person: string;
  bgColor: string;
  accentColor: string;
  copiedAccount: string | null;
  onCopyAccount: (accountNumber: string, person: string) => void;
}

export const CouplesCard: React.FC<PersonCardProps> = ({
  details,
  person,
  bgColor,
  accentColor,
  copiedAccount,
  onCopyAccount,
}) => {
  return (
    <div
      className={`${bgColor} rounded-xl p-4 border border-dashed ${accentColor} relative overflow-hidden`}
    >
      <div className="absolute top-4 right-4">
        <BiHeart className="w-6 h-6 text-brown fill-current" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-brown">
          {person === "bride" ? "Bride's" : "Groom's"} Details
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-sm font-medium text-brown">
              <BsPerson /> <span>Name:</span>
            </p>
            <span className="font-semibold text-brown">
              {details.accountName}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <p className="flex items-center gap-2 text-sm font-medium text-brown">
              <BsBank size={12} /> <span>Bank:</span>
            </p>
            <span className="font-medium text-brown">{details.bankName}</span>
          </div>

          <div className="mt-6 p-4 bg-white/70 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-brown">
                💳 Account Number:
              </span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-lg font-bold text-neu-400 bg-yellow-50 px-3 py-2 rounded-lg border-2 border-yellow-200">
                {details.accountNumber}
              </span>
              <CopyButton
                accountNumber={details.accountNumber}
                person={person}
                accentColor={accentColor}
                copiedAccount={copiedAccount}
                onCopy={onCopyAccount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
