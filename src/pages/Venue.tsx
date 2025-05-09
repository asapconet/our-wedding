import VenueShot from "@assets/images/venue.png";

const Venue = () => {
  return (
    <div className=" flex flex-col pt-10 items-center h-[732px]">
      <img
        src={VenueShot}
        alt="desert meeting"
        className="max-w-[380px] h-[285px]"
      />

      <div className="text-center flex flex-col justify-between h-[270px] my-10 max-w-[800px]">
        <p className="text-[1.12rem] text-pri font-normal my-10">The Location</p>

        <h1 className="text-4xl font-[400] text-[3.5rem] text-neu-400 mb-12">
          Joshua Tree Carmine Resort
        </h1>

        <p className="text-[1.1rem] font-medium text-center text-neu-400 leading-[160%] max-h-[235px] h-full ">
          Feugiat pretium egestas enim blandit purus euismod. Feugiat magna
          aliquam lectus lectus eu amet. Eros, accumsan purus enim nascetur quam
          diam felis, fringilla varius. Quis purus nisl orci eu, ultrices. Purus
          pretium egestas ultricies tempus sit elit. Maecenas pellentesque sit
          eros vitae. <br /> <br /> Maecenas suspendisse tincidunt ullamcorper
          justo neque quis et, laoreet.
        </p>
      </div>
    </div>
  );
};

export default Venue;
