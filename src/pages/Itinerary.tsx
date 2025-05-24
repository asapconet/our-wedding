import { useState, useEffect, useCallback } from "react";
import { days, itineraryItems } from "@constants/index";
import type { ItineraryItem } from "../types/index";
import { typeWriter } from "../utils/typesWriter";
import useTypewriterOnScroll from "@hooks/useTypeWritter";

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState("Friday, May 30");
  const [activeItems, setActiveItems] = useState<ItineraryItem[]>([]);
  const [typedContents, setTypedContents] = useState<{
    [key: number]: { title: string; description: string };
  }>({});

  const handleDayChange = (day: string): void => {
    setActiveDay(day);
    setActiveItems([]);
    setTypedContents({});
    setTimeout(() => {
      setActiveItems(itineraryItems[day]);
    }, 50);
  };

  const animateItems = useCallback(async () => {
    for (let index = 0; index < activeItems.length; index++) {
      const item = activeItems[index];

      await typeWriter(item.title, {
        speed: 50,
        onUpdate: (currentText: string) => {
          setTypedContents((prev) => ({
            ...prev,
            [index]: {
              ...prev[index],
              title: currentText,
            },
          }));
        },
      });

      await typeWriter(item.description, {
        speed: 10,
        onUpdate: (currentText: string) => {
          setTypedContents((prev) => ({
            ...prev,
            [index]: {
              ...prev[index],
              description: currentText,
            },
          }));
        },
      });
    }
  }, [activeItems]);

  const sectionRef = useTypewriterOnScroll({
    threshold: 0.1,
    animate: animateItems,
  });

  useEffect(() => {
    setActiveItems(itineraryItems[activeDay]);
  }, [activeDay]);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gray-50 text-brown py-8 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-normal mb-12 text-center animate-fade-in">
          Itinerary
        </h1>

        <div className="flex justify-center space-x-8 mb-16 animate-fade-in">
          {days.map((day) => (
            <button
              key={day}
              className={`text-base pb-1 transition-all duration-300 ${
                activeDay === day
                  ? "border-b-2 border-gray-400 font-medium"
                  : "text-brown hover:text-gold"
              }`}
              onClick={() => handleDayChange(day)}
              aria-selected={activeDay === day}
              role="tab"
            >
              {day}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-4 gap-6"
          role="tabpanel"
          aria-label={`Schedule for ${activeDay}`}
        >
          <div className="col-span-1">
            {activeItems.map((item: ItineraryItem, index: number) => (
              <div
                key={`time-${index}`}
                className="mb-24 text-right text-brown animate-slide-in-right"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-lg">{item.time}</p>
              </div>
            ))}
          </div>

          <div className="col-span-3">
            {activeItems.map((_: ItineraryItem, index: number) => {
              const typedContent = typedContents[index] || {};
              return (
                <div
                  key={`content-${index}`}
                  className="mb-16 animate-slide-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h2 className="text-xl font-medium mb-4 h-8 min-h-[2rem]">
                    {typedContent.title || ""}
                  </h2>
                  <p className="text-base leading-relaxed text-brown min-h-[3rem]">
                    {typedContent.description || ""}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="absolute bottom-5 bg-plantBg h-64 sm:h-80 md:h-96 w-full max-w-[350px] sm:max-w-[350px]
         opacity-15 mt-8 bg-fit bg-no-repeat animate-fade-in left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default Itinerary;
