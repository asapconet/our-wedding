import { useState, useEffect, useRef,type ReactNode } from "react";

interface AdaptiveTextProps {
  children: ReactNode;
  className?: string;
  lightTextClass?: string;
  darkTextClass?: string;
}

const AdaptiveText = ({
  children,
  className = "",
  lightTextClass = "text-black",
  darkTextClass = "text-white",
}: AdaptiveTextProps) => {
  const [textColorClass, setTextColorClass] = useState(darkTextClass);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an observer to detect when background color/image changes
    const checkBackgroundColor = () => {
      if (!textRef.current) return;

      const element = textRef.current;
      const rect = element.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      // Capture a screenshot at the element's position
      try {
        // This is a pseudocode approach - in a real implementation, you might use a library
        // like html2canvas to analyze the background at this position
        // For now, we'll implement a simpler approach using intersection observer

        // Create a sentinel element to detect when the text enters a light background area
        const sentinel = document.createElement("div");
        sentinel.style.position = "absolute";
        sentinel.style.top = `${y}px`;
        sentinel.style.left = `${x}px`;
        sentinel.style.width = "1px";
        sentinel.style.height = "1px";
        sentinel.style.pointerEvents = "none";
        document.body.appendChild(sentinel);

        // Get the background color behind our element
        const bgColor = window.getComputedStyle(sentinel).backgroundColor;
        document.body.removeChild(sentinel);

        // Simple brightness calculation (for RGB colors)
        // This is not perfect but gives a rough estimate for testing
        const brightness = getBrightness(bgColor);

        // Set text color based on background brightness
        if (brightness > 128) {
          setTextColorClass(lightTextClass); // Dark text for light backgrounds
        } else {
          setTextColorClass(darkTextClass); // Light text for dark backgrounds
        }
      } catch (error) {
        console.error("Error detecting background color:", error);
      }
    };

    // Calculate brightness from RGB color
    const getBrightness = (color: string): number => {
      // Extract RGB values from string like "rgb(255, 255, 255)" or rgba
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return 0;

      // Calculate perceived brightness using the formula
      // (0.299*R + 0.587*G + 0.114*B)
      return (
        0.299 * parseInt(rgb[0]) +
        0.587 * parseInt(rgb[1]) +
        0.114 * parseInt(rgb[2])
      );
    };

    // Run the check initially
    checkBackgroundColor();

    // Set up an observer to recheck when the element's position or visibility changes
    const observer = new IntersectionObserver(checkBackgroundColor, {
      threshold: [0, 0.5, 1],
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Additional event listener for scroll events
    window.addEventListener("scroll", checkBackgroundColor);
    window.addEventListener("resize", checkBackgroundColor);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkBackgroundColor);
      window.removeEventListener("resize", checkBackgroundColor);
    };
  }, [darkTextClass, lightTextClass]);

  return (
    <div ref={textRef} className={`${className} ${textColorClass}`}>
      {children}
    </div>
  );
};

export default AdaptiveText;
