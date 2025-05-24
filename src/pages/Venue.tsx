import VenueShot from "@assets/images/venue.png";
import { typeWriter } from "@utils/typesWriter";
import { useEffect, useState } from "react";

export const fullDescription = `For guests traveling from out of town, we've curated a list of recommended hotels to ensure a comfortable and convenient stay. Each option offers easy access to the wedding venues and provides a range of amenities to help you relax between events. We encourage you to book early, as availability may be limited due to the busy weekend. Contact details are provided below for direct reservations.`;

const accommodations = [
  {
    name: "Hotel 1",
    address:
      "Joclarif Hotels and Suits, Yankarfe Kwarin Ayuba, Graceland, Zaria, Kaduna State",
    phone: "+2348160009982",
  },
  {
    name: "Hotel 2",
    address: "Peace Garden Hotel, Near Central Mosque, Kawo, Kaduna State",
    phone: "+2348123456789",
  },
  {
    name: "Hotel 3",
    address: "Eagle Heights Resort, Behind ABC Park, Barnawa, Kaduna State",
    phone: "+2348034567890",
  },
];

const formatPhone = (phone: string) =>
  phone.replace(/(\+234)(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");

const Venue = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    typeWriter(fullDescription, {
      speed: 20,
      onUpdate: setDescription,
    });
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <img
          src={VenueShot}
          alt="Desert meeting venue"
          className="w-full h-[300px] object-cover animate-fadeIn bg-brown py-3"
        />

        <div className="text-center max-w-4xl mx-auto my-8 md:my-12 animate-slideUp">
          <p className="text-lg md:text-xl text-pri font-normal mb-6">
            The Location
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-8 animate-slideFromRight">
            Somewhere in Paradise
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-neu-400 leading-relaxed min-h-[120px] sm:min-h-[140px] md:min-h-[160px]">
            {description}
          </p>
        </div>

        <div
          className="absolute bg-plantBg h-64 sm:h-80 md:h-96 w-full max-w-[350px]
         sm:max-w-[350px] opacity-15 mt-8 md:mt-12 bg-fit bg-no-repeat bottom-96 transform translate-y-1/2"
          style={{ animationDelay: "0.3s" }}
        />

        <div className="text-center max-w-7xl mx-auto my-12 md:my-16 animate-slideUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-10">
            Accommodations
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {accommodations.map((hotel, index) => (
              <div
                key={hotel.name}
                className="animate-fadeIn transition-transform transform hover:scale-105 text-center sm:text-left"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neu-400 mb-6">
                  {hotel.name}
                </h2>
                <p className="text-base sm:text-lg font-medium text-neu-400 leading-relaxed mb-4">
                  {hotel.address}
                </p>
                <a
                  href={`tel:${hotel.phone}`}
                  className="text-lg sm:text-xl font-normal text-pri hover:text-pri-dark transition-colors"
                >
                  {formatPhone(hotel.phone)}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
