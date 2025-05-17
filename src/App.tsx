import { useEffect, useRef, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import WeddingParty from "./pages/WeddingParty";
import RSVP from "./pages/RSVP";
import Venue from "./pages/Venue";
import Navbar, { type SectionKey } from "./components/Navbar";
import OurStoryPage from "@pages/OurStory";
import OurStory from "@pages/OurStory/OurStory";
import { AppProvider } from "./context/appContext";

const App = () => {
  const [currentSection, setCurrentSection] = useState<SectionKey>("home");
  const sectionRefs = useRef<Record<SectionKey, HTMLDivElement | null>>({
    home: null,
    "our-story": null,
    venue: null,
    party: null,
    itinerary: null,
    rsvp: null,
  });

  // Handle navigation
  const handleNavigate = (sectionId: SectionKey) => {
    setCurrentSection(sectionId);
    const targetSection = sectionRefs.current[sectionId];
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find which section is currently in view
      let activeSection: SectionKey = "home";
      Object.entries(sectionRefs.current).forEach(([key, ref]) => {
        if (ref && scrollPosition >= ref.offsetTop) {
          activeSection = key as SectionKey;
        }
      });

      // Update current section if changed
      if (activeSection !== currentSection) {
        setCurrentSection(activeSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <div className="font-serif">
      <Navbar onNavigate={handleNavigate} currentSection={currentSection} />

      <div
        ref={(el) => (sectionRefs.current["home"] = el)}
        className="bg-black" // Dark background for home section
      >
        <Home />
      </div>

      <div
        ref={(el) => (sectionRefs.current["our-story"] = el)}
        className="min-h-screen bg-white" // Light background for "Our Story"
      >
        <OurStory/>
        <h2 className="text-4xl font-bold text-center pt-20">Our Story</h2>
      </div>

      <div
        ref={(el) => (sectionRefs.current["venue"] = el)}
        className="min-h-screen bg-gray-100" // Light background for Venue
      >
        <h2 className="text-4xl font-bold text-center pt-20">Venue</h2>
        <Venue/>
      </div>

      <div
        ref={(el) => (sectionRefs.current["party"] = el)}
        className="min-h-screen bg-white" // Light background
      ><WeddingParty/>
      </div>

      <div
        ref={(el) => (sectionRefs.current["itinerary"] = el)}
        className="min-h-screen bg-gray-100" // Light background
      >
        {/* Itinerary content */}
        <h2 className="text-4xl font-bold text-center pt-20">Itinerary</h2>
      </div>

      <div
        ref={(el) => (sectionRefs.current["rsvp"] = el)}
        className="min-h-screen bg-black" // Dark background
      >
        {/* RSVP content */}
        <h2 className="text-4xl font-bold text-center pt-20 text-white">
          RSVP
        </h2>
      </div>
    </div>
  );
};

export default App;