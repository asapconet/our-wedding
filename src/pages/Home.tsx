import useContrastTextColor from "@hooks/useContrast";
import { useRef, useEffect } from "react";
import confetti from "canvas-confetti";

const Home: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const textColor = useContrastTextColor(textRef);

  useEffect(() => {
    
    confetti({
      particleCount: 200,
      spread: 500,
      origin: { y: 0.6 },
      colors: ["#FFD700", "#FF69B4", "#00FF00", "#4169E1"], 
    });
  }, []); 

  return (
    <div
      className="relative z-10 flex flex-col justify-end items-center text-center 
        min-h-[100vh] w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-12 sm:pb-16 md:pb-20 bg-mainBg bg-cover bg-center"
    >
      <h1
        ref={textRef}
        className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
          font-bold mb-4 sm:mb-6 md:mb-8 mix-blend-difference ${
            textColor === "white" ? "text-white" : "text-black"
          }`}
      >
        Christabel & Ayodeji
      </h1>

      <p
        className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl
          max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg mix-blend-difference ${
            textColor === "white" ? "text-white" : "text-black"
          }`}
      >
        30th & 31st May, 2025 - Zaria, Kaduna
      </p>
    </div>
  );
};

export default Home;
