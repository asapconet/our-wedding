import { useState, forwardRef } from "react";
import { Link } from "react-router-dom";

export type SectionKey =
  | "home"
  | "our-story"
  | "gallery"
  | "venue"
  | "itinerary"
  | "party"
  | "rsvp";

interface NavbarProps {
  onNavigate: (sectionId: SectionKey) => void;
  isAtTop: boolean;
  isMobileScrolled: boolean;
  activeSection: SectionKey;
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ onNavigate, isAtTop, isMobileScrolled, activeSection }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems: { label: string; page: SectionKey }[] = [
      { label: "Home", page: "home" },
      { label: "Our Story", page: "our-story" },
      { label: "Gallery", page: "gallery" },
      { label: "Venue", page: "venue" },
      { label: "Wedding Party", page: "party" },
      { label: "Itinerary", page: "itinerary" },
      { label: "RSVP", page: "rsvp" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
      <nav
        ref={ref}
        className={`fixed left-0 w-full z-50 top-0 transition-all duration-300 ease-in-out
          md:bg-transparent md:backdrop-blur-none 
          ${
            isAtTop
              ? "md:top-0 md:translate-y-0 md:bg-white/80 md:backdrop-blur-xs"
              : ""
          }
          ${
            isMobileScrolled ? "bg-white/80 backdrop-blur-xs" : "bg-transparent"
          }`}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-white drop-shadow-sm"
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
          } overflow-hidden bg-white/80 backdrop-blur-xs`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4 font-montserrat text-base text-brown">
            {navItems.map(({ label, page }) => (
              <li key={page}>
                {page === "our-story" ? (
                  <Link
                    to="/our-story"
                    className={`hover:underline focus:outline-none focus:underline ${
                      activeSection === page ? "underline" : ""
                    }`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      onNavigate(page);
                    }}
                  >
                    {label}
                  </Link>
                ) : (
                  <button
                    className={`hover:underline focus:outline-none focus:underline ${
                      activeSection === page ? "underline" : ""
                    }`}
                    onClick={() => {
                      onNavigate(page);
                      setIsMenuOpen(false);
                    }}
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`hidden md:flex pl-6 lg:pl-8 transition-all duration-300 ease-in-out ${
            isAtTop
              ? "flex-row w-full items-center bg-white/80 backdrop-blur-xs py-4"
              : "flex-col fixed top-1/2 -translate-y-1/2"
          }`}
        >
          <ul
            className={`flex font-montserrat text-lg transition-all duration-300 ease-in-out ${
              isAtTop
                ? "flex-row space-x-6 text-brown"
                : "flex-col space-y-4 text-white"
            }`}
          >
            {navItems.map(({ label, page }) => (
              <li key={page}>
                {page === "our-story" ? (
                  <Link
                    to="/our-story"
                    className={`hover:underline focus:outline-none focus:underline ${
                      activeSection === page ? "underline" : ""
                    }`}
                    onClick={() => onNavigate(page)}
                  >
                    {label}
                  </Link>
                ) : (
                  <button
                    className={`hover:underline focus:outline-none focus:underline ${
                      activeSection === page ? "underline" : ""
                    }`}
                    onClick={() => onNavigate(page)}
                  >
                    {label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
);

export default Navbar;
