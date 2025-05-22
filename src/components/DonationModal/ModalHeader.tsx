import React from "react";
import { BiGift } from "react-icons/bi";

interface ModalHeaderProps {
  onClose: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ onClose }) => {
  return (
    <div className="flex items-center justify-between pt-4 px-4 bg-white/80 rounded-t-xl">
      <div className="flex items-center space-x-3">
        <BiGift className="w-6 h-6 text-gold" />
        <h2 className="text-xl font-bold bg-gradient-to-r from-gold to-orange-600 bg-clip-text text-transparent">
          Gift Details
        </h2>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-red-100 rounded-full transition-colors text-2xl font-bold text-gray-500 hover:text-red-500"
      >
        ×
      </button>
    </div>
  );
};
