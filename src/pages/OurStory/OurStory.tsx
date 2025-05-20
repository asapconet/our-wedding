import { useState, useEffect, useRef } from "react";
import { typeWriter } from "../../utils/typesWriter";
import { galleryImages, paragraphs } from "@constants/index";
import { ImageGallery } from "@components/ImageLigthbox";
import { Link } from "react-router-dom";

const OurStory = () => {
  const [typedTitle, setTypedTitle] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const fullText = paragraphs.join(" ");
  const words = fullText.split(" ");
  const truncatedText = words.slice(0, 150).join(" ");
  const displayText =
    words.length > 150 ? `${truncatedText}...` : truncatedText;

  useEffect(() => {
    const animateContent = async () => {
      await typeWriter("Our Story", {
        speed: 25,
        onUpdate: (currentText: string) => {
          setTypedTitle(currentText);
        },
      });
      await typeWriter(displayText, {
        speed: 5,
        onUpdate: (currentText: string) => {
          setTypedText(currentText);
        },
      });
      // Estimate animation duration: text length * speed + buffer
      const animationDuration = displayText.length * 5 + 200;
      setTimeout(() => {
        setIsTypingComplete(true);
      }, animationDuration);
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
  }, [displayText]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center py-12 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 min-h-[355px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-6 animate-fade-in">
          {typedTitle}
        </h1>
        {isTypingComplete ? (
          <Link
            to="/our-story-full"
            className="text-base sm:text-lg md:text-xl font-medium text-neu-400 leading-relaxed text-left block hover:text-blue-500 transition-colors"
          >
            {typedText}
          </Link>
        ) : (
          <p className="text-base sm:text-lg md:text-xl font-medium text-neu-400 leading-relaxed text-left">
            {typedText}
          </p>
        )}
      </div>

      <ImageGallery images={galleryImages} />
    </section>
  );
};

export default OurStory;
