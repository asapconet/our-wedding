import { useState } from "react";

export type SectionKey =
  | "home"
  | "our-story"
  | "venue"
  | "itinerary"
  | "party"
  | "rsvp";

interface NavbarProps {
  onNavigate: (sectionId: SectionKey) => void;
}

const Navbar = ({ onNavigate }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; page: SectionKey }[] = [
    { label: "Home", page: "home" },
    { label: "Our Story", page: "our-story" },
    { label: "Venue", page: "venue" },
    { label: "Itinerary", page: "itinerary" },
    { label: "Wedding Party", page: "party" },
    { label: "RSVP", page: "rsvp" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
      <div className="flex justify-between items-center p-4 md:hidden">
        <button
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-[#2B1105]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4 font-montserrat text-lg text-[#2B1105]">
          {navItems.map(({ label, page }) => (
            <li key={page}>
              <button
                className="hover:underline focus:outline-none focus:underline"
                onClick={() => {
                  onNavigate(page);
                  setIsMenuOpen(false);
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex fixed top-1/2 left-0 -translate-y-1/2 pl-6 lg:pl-8">
        <ul className="flex flex-col space-y-4 font-montserrat text-xl lg:text-2xl text-[#2B1105]">
          {navItems.map(({ label, page }) => (
            <li key={page}>
              <button
                className="hover:underline focus:outline-none focus:underline transition-all duration-200"
                onClick={() => onNavigate(page)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
