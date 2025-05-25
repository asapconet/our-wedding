import React from "react";
import type { TimelineProps } from "../../types/index";

export const TimelineWithImagesLayout: React.FC<TimelineProps> = ({
  stories,
}) => {
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl font-light text-gold mb-8 sm:mb-12 text-center lg:text-left">
        Ayodeji & Christabel's Love Timeline
      </h2>
      <div className="space-y-12 sm:space-y-16">
        {stories.map((story, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
          >
            <div className={`order-2 lg:order-${index % 2 === 0 ? "1" : "2"}`}>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gold mb-3 sm:mb-4">
                {story.title}
              </h3>
              {index === 1 && (
                <p className="text-orange-400 text-sm mb-3">
                  Our story continues
                </p>
              )}
              <p className="text-neu-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {story.content}
              </p>
            </div>
            <div className={`order-1 lg:order-${index % 2 === 0 ? "2" : "1"}`}>
              {story.image && (
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
