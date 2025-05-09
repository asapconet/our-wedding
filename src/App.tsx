import { useRef } from "react";
import Home from "./pages/Home";
import Itinierary from "./pages/Itinierary";
import OurStory from "./pages/OurStory";
import WeddingParty from "./pages/WeddingParty";
import RSVP from "./pages/RSVP";
import Venue from "./pages/Venue";
import Navbar, { type SectionKey } from "./components/Navbar";

const App: React.FC = () => {
  const sectionsRef = {
    home: useRef<HTMLElement>(null),
    "our-story": useRef<HTMLElement>(null),
    venue: useRef<HTMLElement>(null),
    itinierary: useRef<HTMLElement>(null),
    party: useRef<HTMLElement>(null),
    rsvp: useRef<HTMLElement>(null),
  };

  const scrollToSection = (key: SectionKey) => {
    sectionsRef[key]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <Navbar onNavigate={scrollToSection} />
      <main className="px-auto space-y-20">
        <section ref={sectionsRef.home}>
          <Home />
        </section>
        <section ref={sectionsRef["our-story"]}>
          <OurStory />
        </section>
        <section ref={sectionsRef.party}>
          <WeddingParty />
        </section>
        <section ref={sectionsRef.venue}>
          <Venue />
        </section>
        <section ref={sectionsRef.itinierary}>
          <Itinierary />
        </section>
        <section ref={sectionsRef.rsvp}>
          <RSVP />
        </section>
      </main>
    </div>
  );
};

export default App;
