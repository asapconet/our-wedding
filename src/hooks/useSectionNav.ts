import { useEffect, useState } from "react";
import { debounce } from "lodash";
import type { SectionKey } from "@components/Navbar";

export function useSectionNavigation(sectionIds: SectionKey[]) {
  const [activeSection, setActiveSection] = useState<SectionKey>(sectionIds[0]);
  const [isNavAtTop, setIsNavAtTop] = useState(false);
  const [isMobileScrolled, setIsMobileScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let newActiveSection: SectionKey = sectionIds[0];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          newActiveSection = sectionIds[i];
          break;
        }
      }

      setActiveSection(newActiveSection);
      setIsNavAtTop(newActiveSection !== "home");
      setIsMobileScrolled(newActiveSection !== "home");
    }, 100); // Debounce for 100ms

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel pending debounced calls
    };
  }, [sectionIds]);

  const scrollToSection = (sectionId: SectionKey) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsNavAtTop(sectionId !== "home");
      setIsMobileScrolled(sectionId !== "home");
    }
  };

  return { activeSection, scrollToSection, isNavAtTop, isMobileScrolled };
}

