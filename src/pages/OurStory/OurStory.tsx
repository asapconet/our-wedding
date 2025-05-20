import { useState, useEffect, useRef } from "react";
import { typeWriter } from "../../utils/typesWriter";
import { galleryImages, paragraphs } from "@constants/index";
import { ImageGallery } from "@components/ImageLigthbox";
import { Link } from "react-router-dom";

const OurStory = () => {
  const [typedTitle, setTypedTitle] = useState<string>("");
  const [typedText, setTypedText] = useState<string>("");
  const [isTypingComplete, setIsTypingComplete] = useState<boolean>(false);
  const [hasStartedAnimation, setHasStartedAnimation] =
    useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const fullText = paragraphs.join(" ");
  const words = fullText.split(" ");
  const truncatedText = words.slice(0, 150).join(" ");
  const displayText =
    words.length > 150 ? `${truncatedText}...` : truncatedText;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStartedAnimation) {
          setHasStartedAnimation(true);
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
  }, [hasStartedAnimation]);

  useEffect(() => {
    if (!hasStartedAnimation) return;

    const animateTitle = async () => {
      try {
        await typeWriter("Our Story", {
          speed: 25,
          onUpdate: setTypedTitle,
        });
      } catch (error) {
        console.error("Error animating title:", error);
        setTypedTitle("Our Story");
      }
    };

    animateTitle();
  }, [hasStartedAnimation]);

  useEffect(() => {
    if (!hasStartedAnimation || typedTitle !== "Our Story") return;

    const animateText = async () => {
      try {
        await typeWriter(displayText, {
          speed: 5,
          onUpdate: setTypedText,
        });
        setIsTypingComplete(true);
      } catch (error) {
        console.error("Error animating text:", error);
        setTypedText(displayText);
        setIsTypingComplete(true);
      }
    };

    animateText();
  }, [hasStartedAnimation, typedTitle, displayText]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center py-12 md:py-16"
    >
      <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12 min-h-[255px] px-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neu-400 mb-6 animate-fade-in">
          {typedTitle || "Our Story"}
        </h1>

        <div className="text-base sm:text-lg md:text-xl font-medium text-neu-400 leading-relaxed text-left">
          {typedText}

          {isTypingComplete && words.length > 150 && (
            <div className="mt-4">
              <Link
                to="/our-story-full"
                className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
              >
                Read Full Story
              </Link>
            </div>
          )}
        </div>
      </div>

      <ImageGallery images={galleryImages} />
    </section>
  );
};

export default OurStory;
