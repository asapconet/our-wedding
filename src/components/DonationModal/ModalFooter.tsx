import React from "react";

export const ModalFooter: React.FC = () => {
  return (
    <div className="px-6 py-6 text-center rounded-b-2xl">
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-pri font-medium">
        Thank you for your thoughtfulness and generosity!
      </p>
      <span className="inline-block ml-2 animate-pulse">💕✨🎁</span>
    </div>
  );
};
