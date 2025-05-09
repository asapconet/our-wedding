import DesertShot from "../assets/images/desertPhoto.png";

const OurStory: React.FC = () => {
  return (
    <div className=" flex flex-col pt-10 items-center h-[1150px]">
      <div className="text-center flex flex-col justify-between h-[355px] mb-10 max-w-[800px]">
        <h1 className="text-4xl font-[400] text-[3.5rem] text-neu-400 mb-4">
          Our Story
        </h1>
        <p className="text-[1.1rem] font-medium text-left text-neu-400 leading-[160%] max-h-[235px] h-full ">
          Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
          aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam
          diam felis, fringilla varius. Quis purus nisl orci eu, ultrices.{" "}
          <br />
          <br />
          Purus pretium egestas ultricies tempus sit elit. Maecenas pellentesque
          sit eros vitae. Maecenas suspendisse tincidunt ullamcorper justo neque
          quis et, laoreet. Vitae lacus, aliquet lorem mauris, sit dolor
          sodales. Nullam quam quis lorem dui tristique massa enim. <br />
          <br />
          Faucibus sed egestas mollis vivamus et sed sed.
        </p>
      </div>
      <img
        src={DesertShot}
        alt="desert meeting"
        className="max-w-[1007px] h-[566px]"
      />
    </div>
  );
};

export default OurStory;
