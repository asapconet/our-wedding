import React from "react";
import type { TimelineProps } from "../../types/index";

export const TimelineTextOnlyLayout: React.FC<TimelineProps> = ({
  stories,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-light text-gold mb-8 sm:mb-12 text-center">
        Our Journey to "I Do"
      </h2>
      <div className="space-y-12 sm:space-y-16">
        {stories.map((story, index) => (
          <div key={index} className="text-center max-w-2xl mx-auto px-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gold mb-4 sm:mb-6">
              {story.title}
            </h3>
            <p className="text-neu-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {story.content}
            </p>
            {index < stories.length - 1 && (
              <div className="mt-8 sm:mt-12 mb-6 sm:mb-8">
                <div className="w-px h-12 sm:h-16 bg-gray-300 mx-auto"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
