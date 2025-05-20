import VenueShot from "@assets/images/venue.png";
import { typeWriter } from "@utils/typesWriter";
import { useEffect, useState } from "react";

export const fullDescription = `Feugiat pretium egestas enim blandit purus euismod. Feugiat magna aliquam lectus lectus
   eu amet. Eros, accumsan purus enim nascetur quam diam felis, fringilla varius. 
   Quis purus nisl orci eu, ultrices. Purus pretium egestas ultricies tempus sit elit.
    Maecenas pellentesque sit eros vitae. Maecenas suspendisse tincidunt ullamcorper justo
     neque quis et, laoreet.`;

const Venue = () => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    typeWriter(fullDescription, {
      speed: 20,
      onUpdate: (currentText) => setDescription(currentText),
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

        <div className="text-center max-w-4xl mx-auto my-8 md:my-12 animate-slideUp ">
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
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="animate-fadeIn transition-transform transform hover:scale-105 text-center sm:text-left"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neu-400 mb-6">
                  Hotel {index + 1}
                </h2>
                <p className="text-base sm:text-lg font-medium text-neu-400 leading-relaxed mb-4">
                  Feugiat pretium egestas enim blandit purus euismod. Feugiat
                  magna aliquam lectus lectus eu amet. Eros, accumsan purus enim
                  nascetur quam diam felis, fringilla varius.
                </p>
                <p className="text-lg sm:text-xl font-normal text-pri hover:text-pri-dark transition-colors">
                  +123 2343 545 4545
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Venue;
