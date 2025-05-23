import type { StoryLayoutProps } from "../../types/index";
import React from "react";

export const TextOnlyLayout: React.FC<StoryLayoutProps> = ({
  title,
  content,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        <div className="text-center lg:text-left h-full flex items-center">
          <h2 className="text-2xl sm:text-4xl lg:text-7xl font-light text-orange-400 mb-4 leading-tight">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-neu-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
