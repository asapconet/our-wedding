import { useState } from "react";
import Home from "./pages/Home";
import Itinierary from "./pages/Itinierary";
import OurStory from "./pages/OurStory";
import Registry from "./pages/Registry";
import RSVP from "./pages/RSVP";
import Venue from "./pages/Venue";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />;
      case "itiniery":
        return <Itinierary />;
      case "our-story":
        return <OurStory />;
      case "registry":
        return <Registry />;
      case "rsvp":
        return <RSVP />;
      case "venue":
        return <Venue />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="container mx-auto p-4">{renderPage()}</main>
    </div>
  );
};

export default App;
