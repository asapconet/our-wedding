import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import WeddingParty from "./pages/WeddingParty";
import RSVP from "./pages/RSVP";
import Venue from "./pages/Venue";
import Navbar, { type SectionKey } from "./components/Navbar";
import OurStory from "@pages/OurStory/OurStory";
import ErrorBoundary from "./ErrorBoundary";
import OurStoryPage from "@pages/OurStory";
import { prevGalleryImages } from "./constants/gallery";
import { ImageGallery } from "@pages/Gallery/ImageLigthbox";
import { useSectionNavigation } from "@hooks/useSectionNav";
import GalleryPage from "@pages/Gallery/Gallerypage";

const MainContent = () => {
  const sectionIds: SectionKey[] = [
    "home",
    "our-story",
    "gallery",
    "venue",
    "train",
    "itinerary",
    "rsvp",
  ];
  const { activeSection, scrollToSection, isNavAtTop, isMobileScrolled } =
    useSectionNavigation(sectionIds);

  return (
    <ErrorBoundary>
      <Helmet>
        <meta
          name="description"
          content="Join us for our special wedding day! Explore our story, venue, pre-wedding shots, and RSVP details."
        />
        <meta property="og:title" content="Ayo & Osa Wedding Order" />
        <meta
          property="og:description"
          content="Celebrate our love story! Find all the details about our wedding, including the venue, itinerary, and Gallery."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dsz3obfpx/image/upload/v1748054415/handsacross_ekrkac.jpg"
        />
        <meta property="og:image:alt" content="Our Wedding Preview Image" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ayoandosa.love" />
        <meta property="og:site_name" content="Ayo & Osa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayo & Osa Wedding Order" />
        <meta
          name="twitter:description"
          content="Celebrate our love story! Find all the details about our wedding, including the venue, itinerary, and Gallery."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dsz3obfpx/image/upload/v1748054415/handsacross_ekrkac.jpg"
        />
      </Helmet>
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
        <ImageGallery images={prevGalleryImages} />
      </div>
      <div id="venue">
        <Venue />
      </div>
      <div id="train" className="">
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

const OurStoryContent = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="Read about Ayo & Osa's love story and how they met."
      />
      <meta property="og:title" content="Ayo & Osa - Our Story" />
      <meta
        property="og:description"
        content="Discover the journey of Ayo & Osa's love story."
      />
      <meta
        property="og:image"
        // content="https://res.cloudinary.com/dsz3obfpx/image/upload/v1748054415/ourstory.jpg"
      />
      <meta property="og:image:alt" content="Ayo & Osa Love Story" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ayoandosa.love/our-story" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ayo & Osa - Our Story" />
      <meta
        name="twitter:description"
        content="Discover the journey of Ayo & Osa's love story."
      />
      <meta
        name="twitter:image"
        content="https://res.cloudinary.com/dsz3obfpx/image/upload/v1748054415/ourstory.jpg"
      />
    </Helmet>
    <OurStoryPage />
  </>
);

const GalleryContent = () => (
  <>
    <Helmet>
      <meta
        name="description"
        content="View Ayo & Osa's pre-wedding photos and gallery."
      />
      <meta property="og:title" content="Ayo & Osa - Gallery" />
      <meta
        property="og:description"
        content="Explore Ayo & Osa's beautiful pre-wedding photos."
      />
      <meta
        property="og:image"
        content="res.cloudinary.com/dsz3obfpx/image/upload/v1748054415/ourstory.jpg"
      />
      <meta property="og:image:alt" content="Ayo & Osa Gallery" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ayoandosa.love/gallery" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ayo & Osa - Gallery" />
      <meta
        name="twitter:description"
        content="Explore Ayo & Osa's beautiful pre-wedding photos."
      />
      <meta
        name="twitter:image"
        // content="https://res.cloudinary.com/dsz3obfpx/image/upload/v1748054415/gallery.jpg"
      />
    </Helmet>
    <GalleryPage />
  </>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/our-story" element={<OurStoryContent />} />
          <Route path="/gallery" element={<GalleryContent />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
