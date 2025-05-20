import { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import WeddingParty from "./pages/WeddingParty";
import RSVP from "./pages/RSVP";
import Venue from "./pages/Venue";
import Navbar, { type SectionKey } from "./components/Navbar";
import OurStory from "@pages/OurStory/OurStory";
import ErrorBoundary from "./ErrorBoundary";
import OurStoryPage from "@pages/OurStory";
import { galleryImages } from "./constants";
import { ImageGallery } from "@pages/ImageLigthbox";

const MainContent = () => {
  const [currentSection, setCurrentSection] = useState<SectionKey>("home");
  const sectionRefs = useRef<Record<SectionKey, HTMLDivElement | null>>({
    home: null,
    "our-story": null,
    gallery: null,
    venue: null,
    party: null,
    itinerary: null,
    rsvp: null,
  });

  const location = useLocation();

  const handleNavigate = (sectionId: SectionKey) => {
    if (sectionId !== "our-story") {
      setCurrentSection(sectionId);
      const targetSection = sectionRefs.current[sectionId];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let activeSection: SectionKey = "home";
        Object.entries(sectionRefs.current).forEach(([key, ref]) => {
          if (key !== "our-story" && ref && scrollPosition >= ref.offsetTop) {
            activeSection = key as SectionKey;
          }
        });
        if (activeSection !== currentSection) {
          setCurrentSection(activeSection);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [currentSection, location.pathname]);

  return (
    <ErrorBoundary>
      <Navbar onNavigate={handleNavigate} />
      <div
        ref={(el) => {
          sectionRefs.current["home"] = el;
        }}
        className="min-h-screen bg-mainBg bg-cover bg-center"
      >
        <Home />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current["our-story"] = el;
        }}
      >
        <OurStory />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current["gallery"] = el;
        }}
      >
        <ImageGallery images={galleryImages} />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current["venue"] = el;
        }}
        className=""
      >
        <Venue />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current["party"] = el;
        }}
        className=""
      >
        <WeddingParty />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current["itinerary"] = el;
        }}
        className="min-h-screen bg-gray-50"
      >
        <Itinerary />
      </div>
      <div
        ref={(el) => {
          sectionRefs.current["rsvp"] = el;
        }}
        className="min-h-screen bg-white"
      >
        <RSVP />
      </div>
    </ErrorBoundary>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/our-story" element={<OurStoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
