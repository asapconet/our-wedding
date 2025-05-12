import { useState } from "react";

// Define TypeScript interfaces for our data structures
interface ItineraryItem {
  time: string;
  title: string;
  description: string;
}

interface DailySchedule {
  [key: string]: ItineraryItem[];
}

const Itinerary = () => {
  const [activeDay, setActiveDay] = useState("Friday, July 11");

  const days = ["Friday, July 11", "Saturday, July 12", "Sunday, July 13"];

  const itineraryItems: DailySchedule = {
    "Friday, July 11": [
      {
        time: "10am",
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
      {
        time: "12pm",
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
      {
        time: "2pm",
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
    "Saturday, July 12": [
      {
        time: "9am",
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
      {
        time: "11am",
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
    "Sunday, July 13": [
      {
        time: "10am",
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
      {
        time: "1pm",
        title: "Item Title",
        description:
          "Phasellus accumsan neque viverra ut sem aliquam purus rhoncus, morbi. Ut in eget leo dui nunc. Tortor viverra magna dignissim sit. Libero eu euismod risus, mauris etiam ut morbi amet in. Tortor duis dignissim adipiscing sem.",
      },
    ],
  };

  // Handler for day selection
  const handleDayChange = (day: string): void => {
    setActiveDay(day);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-normal mb-12 text-center">Itinerary</h1>

        <div className="flex justify-center space-x-8 mb-16">
          {days.map((day) => (
            <button
              key={day}
              className={`text-base pb-1 ${
                activeDay === day
                  ? "border-b-2 border-gray-400 font-medium"
                  : "text-gray-500"
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
          {/* Time Column */}
          <div className="col-span-1">
            {itineraryItems[activeDay].map(
              (item: ItineraryItem, index: number) => (
                <div
                  key={`time-${index}`}
                  className="mb-24 text-right text-gray-500"
                >
                  <p className="text-lg">{item.time}</p>
                </div>
              )
            )}
          </div>

          {/* Content Column */}
          <div className="col-span-3">
            {itineraryItems[activeDay].map(
              (item: ItineraryItem, index: number) => (
                <div key={`content-${index}`} className="mb-16">
                  <h2 className="text-xl font-medium mb-4">{item.title}</h2>
                  <p className="text-base leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div
          className="bg-plantBg h-64 sm:h-80 md:h-96 w-full max-w-[350px]
         sm:max-w-[350px] opacity-15 mt-8 md:mt-12 bg-fit bg-no-repeat"
        />
      </div>
    </div>
  );
};

export default Itinerary;
