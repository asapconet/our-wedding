import { useState, useEffect } from "react";

// This hook helps determine if the background at a specific element position is light or dark
export function useBackgroundBrightness(
  elementRef: React.RefObject<HTMLElement>,
  threshold = 128
) {
  const [isDarkBackground, setIsDarkBackground] = useState(true);

  useEffect(() => {
    if (!elementRef.current) return;

    const checkBackgroundBrightness = () => {
      try {
        // Create a temporary element at the same position
        const el = elementRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();

        // A more accurate approach would be to use a library like html2canvas
        // But for a simpler approach, we can check the computed background color

        // Find the element behind our current element
        const elementsAtPoint = document.elementsFromPoint(
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        );

        // Skip the first element (which is our element) and find the first with a background
        let bgElement = null;
        for (let i = 1; i < elementsAtPoint.length; i++) {
          const computedStyle = window.getComputedStyle(elementsAtPoint[i]);
          const bgColor = computedStyle.backgroundColor;
          const bgImage = computedStyle.backgroundImage;

          if (bgColor !== "rgba(0, 0, 0, 0)" || bgImage !== "none") {
            bgElement = elementsAtPoint[i];
            break;
          }
        }

        // If we found an element with a background
        if (bgElement) {
          const computedStyle = window.getComputedStyle(bgElement);
          const bgColor = computedStyle.backgroundColor;

          // Calculate brightness from the background color
          const brightness = calculateBrightness(bgColor);
          setIsDarkBackground(brightness < threshold);
        } else {
          // Default to dark if we can't determine
          setIsDarkBackground(true);
        }
      } catch (error) {
        console.error("Error checking background:", error);
        // Default to dark background if there's an error
        setIsDarkBackground(true);
      }
    };

    // Calculate perceived brightness of a color
    const calculateBrightness = (color: string): number => {
      // Handle named colors
      if (color === "black") return 0;
      if (color === "white") return 255;

      // Extract RGB values from string (rgba or rgb)
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return 0;

      // Calculate brightness using formula: 0.299*R + 0.587*G + 0.114*B
      return (
        0.299 * parseInt(rgb[0]) +
        0.587 * parseInt(rgb[1]) +
        0.114 * parseInt(rgb[2])
      );
    };

    // Check initially
    checkBackgroundBrightness();

    // Set up observers for changes
    window.addEventListener("scroll", checkBackgroundBrightness);
    window.addEventListener("resize", checkBackgroundBrightness);

    const observer = new IntersectionObserver(checkBackgroundBrightness, {
      threshold: [0, 0.5, 1],
    });

    observer.observe(elementRef.current);

    return () => {
      window.removeEventListener("scroll", checkBackgroundBrightness);
      window.removeEventListener("resize", checkBackgroundBrightness);
      observer.disconnect();
    };
  }, [elementRef, threshold]);

  return isDarkBackground;
}

// This hook helps implement a simple parallax effect
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    transform: `translateY(${offset * speed}px)`,
  };
}

// This hook helps with section-based navigation
export function useSectionNavigation(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return { activeSection, scrollToSection };
}
