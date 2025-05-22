import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { useSectionNavigation } from "@hooks/useSectionNav";

const MainContent = () => {
  const sectionIds: SectionKey[] = [
    "home",
    "our-story",
    "gallery",
    "venue",
    "party",
    "itinerary",
    "rsvp",
  ];
  const { activeSection, scrollToSection, isNavAtTop, isMobileScrolled } = useSectionNavigation(sectionIds);

  return (
    <ErrorBoundary>
      <Navbar
        onNavigate={scrollToSection}
        isAtTop={isNavAtTop}
        isMobileScrolled={isMobileScrolled}
        activeSection={activeSection}
      />
      <div id="home" className="min-h-screen bg-mainBg bg-cover bg-center">
        <Home />
      </div>
      <div id="our-story">
        <OurStory />
      </div>
      <div id="gallery">
        <ImageGallery images={galleryImages} />
      </div>
      <div id="venue" className="">
        <Venue />
      </div>
      <div id="party" className="">
        <WeddingParty activeSection={activeSection} />
      </div>
      <div id="itinerary" className="min-h-screen bg-gray-50">
        <Itinerary />
      </div>
      <div id="rsvp" className="min-h-screen bg-white">
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

