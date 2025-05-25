import { useState } from "react";
import type { SectionKey } from "@components/Navbar";
import { bridesmaids, groomsmen } from "@constants/weddingParty";

interface WeddingPartyProps {
  activeSection: SectionKey;
}

const WeddingParty = ({ activeSection }: WeddingPartyProps) => {
  const [activeTab, setActiveTab] = useState<"groomsmen" | "bridesmaids">(
    "groomsmen",
  );

  const people = activeTab === "groomsmen" ? groomsmen : bridesmaids;

  const handleTabChange = (tab: "groomsmen" | "bridesmaids") => {
    setActiveTab(tab);
  };

  return (
    <div
      id="train"
      className="bg-brown-500 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brown"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-normal mb-8">
          Bridesmaids & Groomsmen
        </h2>

        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="flex w-full max-w-lg justify-center gap-4 sm:gap-6">
            <button
              onClick={() => handleTabChange("groomsmen")}
              className={`text-2xl sm:text-3xl md:text-4xl font-normal px-4 py-2 transition-all duration-200 animate-fade-in ${
                activeTab === "groomsmen"
                  ? "border-b-2 border-white text-white"
                  : "text-neu-100 hover:text-white opacity-70 hover:opacity-100"
              }`}
            >
              Groomsmen
            </button>
            <button
              onClick={() => handleTabChange("bridesmaids")}
              className={`text-2xl sm:text-3xl md:text-4xl font-normal px-4 py-2 transition-all duration-200 ${
                activeTab === "bridesmaids"
                  ? "border-b-2 border-white text-white"
                  : "text-neu-100 hover:text-white opacity-70 hover:opacity-100"
              }`}
            >
              Bridesmaids
            </button>
          </div>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${
            activeTab === "groomsmen" ? "lg:grid-cols-4" : "lg:grid-cols-6"
          } justify-items-center gap-6 sm:gap-8`}
        >
          {people.map((person) => (
            <div
              key={person.name}
              className={`flex flex-col items-center ${
                activeSection === "train"
                  ? "slide-up"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${people.indexOf(person) * 100}ms` }}
            >
              <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 mb-4 overflow-hidden border-2 border-white rounded-sm">
                <img
                  src={`${person.image}?t=${Date.now()}`}
                  alt={`${person.name} - ${
                    activeTab === "groomsmen" ? "Groomsman" : "Bridesmaid"
                  }`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-neu-100 text-center">
                {person.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
