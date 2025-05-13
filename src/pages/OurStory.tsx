import { useState, useEffect, useRef } from "react";
import { typeWriter } from "../utils/typesWriter";
import DesertShot from "../assets/images/desertPhoto.png";
import { paragraphs } from "@constants/index";

const OurStory = () => {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedParagraphs, setTypedParagraphs] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateContent = async () => {
      await typeWriter("Our Story", {
        speed: 50,
        onUpdate: (currentText: string) => {
          setTypedTitle(currentText);
        },
      });

      const typedParas: string[] = [];
      for (const para of paragraphs) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        await typeWriter(para, {
          speed: 10,
          onUpdate: (currentText: string) => {
            typedParas[paragraphs.indexOf(para)] = currentText;
            setTypedParagraphs([...typedParas]);
          },
        });
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateContent();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center py-12 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 min-h-[355px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-6 animate-fade-in">
          {typedTitle}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-medium text-neu-400 leading-relaxed text-left">
          {paragraphs.map((_, index) => (
            <span key={index}>
              {typedParagraphs[index] || ""}
              {index < paragraphs.length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </span>
          ))}
        </p>
      </div>
      <img
        src={DesertShot}
        alt="Desert meeting"
        className="w-full max-w-[1007px] sm:max-w-[1200px] h-auto object-cover animate-slide-in-left"
      />
    </div>
  );
};

export default OurStory;
