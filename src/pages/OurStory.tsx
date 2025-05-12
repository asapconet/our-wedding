import DesertShot from "../assets/images/desertPhoto.png";

const OurStory = () => {
  return (
    <div className="flex flex-col items-center py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-6">
          Our Story
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-neu-400 leading-relaxed text-left">
          Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
          aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam
          diam felis, fringilla varius. Quis purus nisl orci eu, ultrices.
          <br /><br />
          Purus pretium egestas ultricies tempus sit elit. Maecenas pellentesque
          sit eros vitae. Maecenas suspendisse tincidunt ullamcorper justo neque
          quis et, laoreet. Vitae lacus, aliquet lorem mauris, sit dolor
          sodales. Nullam quam quis lorem dui tristique massa enim.
          <br /><br />
          Faucibus sed egestas mollis vivamus et sed sed.
        </p>
      </div>
      <img
        src={DesertShot}
        alt="Desert meeting"
        className="w-full max-w-[1007px] sm:max-w-[1200px] h-auto object-cover"
      />
    </div>
  );
};

export default OurStory;
