import React from "react";
import { BiCopy } from "react-icons/bi";

interface CopyButtonProps {
  accountNumber: string;
  person: string;
  accentColor: string;
  copiedAccount: string | null;
  onCopy: (accountNumber: string, person: string) => void;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  accountNumber,
  person,
  accentColor,
  copiedAccount,
  onCopy,
}) => {
  return (
    <div className="relative">
      <button
        onClick={() => onCopy(accountNumber, person)}
        className={`p-3 ${
          accentColor === "border-amber-300"
            ? "bg-amber-400 hover:bg-amber-600"
            : "bg-orange-400 hover:bg-orange-600"
        } text-white rounded-full transition-all duration-200 transform hover:scale-110 shadow-lg`}
        title="Copy account number"
      >
        <BiCopy className="w-5 h-5" />
      </button>
      {copiedAccount === person && (
        <div className="absolute -top-12 -right-2 bg-gold px-4 py-1 rounded-lg shadow-md animate-bounce">
          <p className="flex gap-2 text-white text-xs">
            Copied!
            <span>✨</span>
          </p>
        </div>
      )}
    </div>
  );
};