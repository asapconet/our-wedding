import { useState } from "react";
import Groom from "@assets/images/groom.png";
import type { SectionKey } from "@components/Navbar";

interface WeddingPartyProps {
  activeSection: SectionKey;
}

const WeddingParty = ({ activeSection }: WeddingPartyProps) => {
  const [activeTab, setActiveTab] = useState<"groomsmen" | "bridesmaids">("groomsmen");

  const groomsmen = [
    {
      name: "Tuoyo OTuedon",
      image:
        "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747996284/IMG_1838_jvb4g2.jpg",
    },
    { name: "M", image: Groom },
    {
      name: "Richard Adams",
      image:
        "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747996565/ri_ofga5s.jpg",
    },
    {
      name: "Temitope David",
      image:
        "https://res.cloudinary.com/dsz3obfpx/image/upload/v1748002571/195580ab-88d1-455b-bf91-8a83b2db837a_lkunft.jpg",
    },
    {
      name: "Aaron Sunday",
      image:
        "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747997489/IMG_6089_h3frfn.png",
    },
  ];

  const bridesmaids = [
    {
      name: "Mercy Ladani",
      image:
        "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747835841/ojoPrinces_e8bcf5.jpg",
    },
    {
      name: "Ada Precious Akaniru",
      image:
        "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747915945/ada_strisn.jpg",
    },
    {
      name: "Victory Oga",
      image:
        "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747916148/victory_on4l2b.jpg",
    },
    { name: "Mia", image: "/api/placeholder/200/200" },
    { name: "Ava", image: "/api/placeholder/200/200" },
  ];

  const people = activeTab === "groomsmen" ? groomsmen : bridesmaids;

  return (
    <div id="party" className="bg-brown-500 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brown">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl font-normal mb-8">
          The Wedding Party
        </h2>

        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="flex w-full max-w-lg justify-center gap-4 sm:gap-6">
            <button
              onClick={() => setActiveTab("groomsmen")}
              className={`text-2xl sm:text-3xl md:text-4xl font-normal px-4 py-2 transition-all duration-200 animate-fade-in ${
                activeTab === "groomsmen"
                  ? "border-b-2 border-white text-white"
                  : "text-neu-100 hover:text-white opacity-70 hover:opacity-100"
              }`}
            >
              Groomsmen
            </button>
            <button
              onClick={() => setActiveTab("bridesmaids")}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {people.map((person, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                activeSection === "party" ? "slide-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 mb-4 overflow-hidden border-2 border-white rounded-sm">
                <img
                  src={typeof person.image === "string" ? person.image : person.image}
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
