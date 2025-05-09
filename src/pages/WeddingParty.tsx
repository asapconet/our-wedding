import { useState } from "react";
import Groom from "@assets/images/groom.png";

const WeddingParty = () => {
  const [activeTab, setActiveTab] = useState("groomsmen");

  const groomsmen = [
    { name: "T", image: { Groom } },
    { name: "M", image: { Groom } },
    { name: "R", image: { Groom } },
    { name: "A", image: { Groom } },
    { name: "T", image: { Groom } },
  ];

  const bridesmaids = [
    { name: "Emma ", image: "/api/placeholder/200/200" },
    { name: "Sophia", image: "/api/placeholder/200/200" },
    { name: "Olivia", image: "/api/placeholder/200/200" },
    { name: "Mia", image: "/api/placeholder/200/200" },
    { name: "Mia", image: "/api/placeholder/200/200" },
  ];

  return (
    <div className="bg-gold text-white py-12 px-4 md:px-8 lg:px-22 h-[655px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-base font-normal mb-6">
          The Wedding Party
        </h2>

        <div className="flex justify-center mb-12">
          <div className="flex w-full max-w-md justify-center">
            <button
              onClick={() => setActiveTab("groomsmen")}
              className={`text-[3.5rem] font-normal px-4 py-2 mx-2 ${
                activeTab === "groomsmen"
                  ? "border-b-2 border-white font-normal"
                  : "text-neu-100"
              }`}
            >
              Groomsmen
            </button>
            <button
              onClick={() => setActiveTab("bridesmaids")}
              className={`text-[3.5rem] font-normal px-4 py-2 mx-2 ${
                activeTab === "bridesmaids"
                  ? "border-b-2 border-white font-normal"
                  : "opacity-50"
              }`}
            >
              Bridesmaids
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-[2rem] text-neu-100">
          {activeTab === "groomsmen"
            ? groomsmen.map((person, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 md:w-52 md:h-52 mb-4 overflow-hidden border-2 border-white">
                    <img
                      src={Groom}
                      alt={person.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <p className="text-center">{person.name}</p>
                </div>
              ))
            : bridesmaids.map((person, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-32 h-32 md:w-52 md:h-52 mb-4 overflow-hidden border-2 border-white">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                  <p className="text-center ">{person.name}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingParty;
