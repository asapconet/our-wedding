import { useState } from "react";
import Groom from "@assets/images/groom.png";
import useScrollAnimation from "@hooks/useScroll";
import { useFixedRefs } from "@hooks/useFixedRefs";

const WeddingParty = () => {
  const [activeTab, setActiveTab] = useState("groomsmen");

  const groomsmen = [
    { name: "T", image: Groom },
    { name: "M", image: Groom },
    { name: "R", image: Groom },
    { name: "A", image: Groom },
    { name: "T", image: Groom },
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

  const refs = useFixedRefs<HTMLDivElement>(5);

  useScrollAnimation(refs, {
    animationClass: "slide-up",
    delayIncrement: 100,
    threshold: 0.1,
  });

  const people = activeTab === "groomsmen" ? groomsmen : bridesmaids;

  return (
    <div className="bg-brown-500 text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-brown">
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
              ref={refs[index]}
              className="flex flex-col items-center"
            >
              <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 mb-4 overflow-hidden border-2 border-white rounded-sm">
                <img
                  src={person.image}
                  alt={`${person.name} - ${
                    activeTab === "groomsmen" ? "Groomsman" : "Bridesmaid"
                  }`}
                  className="w-full h-full object-cover grayscale"
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
