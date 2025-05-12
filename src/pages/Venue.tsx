import VenueShot from "@assets/images/venue.png";

const Venue = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center py-12 md:py-16">
        <img
          src={VenueShot}
          alt="Desert meeting venue"
          className="w-full max-w-[380px] sm:max-w-[500px] md:max-w-[600px] h-auto object-cover"
        />

        <div className="text-center max-w-4xl mx-auto my-8 md:my-12">
          <p className="text-lg md:text-xl text-pri font-normal mb-6">
            The Location
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-8">
            Somewhere in Paradise
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-medium text-neu-400 leading-relaxed">
            Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
            aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur
            quam diam felis, fringilla varius. Quis purus nisl orci eu,
            ultrices. Purus pretium egestas ultricies tempus sit elit. Maecenas
            pellentesque sit eros vitae. Maecenas suspendisse tincidunt
            ullamcorper justo neque quis et, laoreet.
          </p>
        </div>

        <div className="bg-plantBg h-64 sm:h-80 md:h-96 w-full max-w-[350px]
         sm:max-w-[350px] opacity-15 mt-8 md:mt-12 bg-fit bg-no-repeat" />

        <div className="text-center max-w-7xl mx-auto my-12 md:my-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-10">
            Accommodations
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neu-400 mb-6">
                  Hotel {index + 1}
                </h2>
                <p className="text-base sm:text-lg font-medium text-neu-400 leading-relaxed mb-4">
                  Feugiat pretium egestas enim blandit purus euismod. Feugiat
                  magna aliquam lectus lectus eu amet. Eros, accumsan purus enim
                  nascetur quam diam felis, fringilla varius.
                </p>
                <p className="text-lg sm:text-xl font-normal text-pri">
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
