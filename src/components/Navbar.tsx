export type SectionKey =
  | "home"
  | "our-story"
  | "venue"
  | "itinierary"
  | "registry"
  | "rsvp";

interface NavbarProps {
  onNavigate: (sectionId: SectionKey) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {

const navItems: { label: string; page: SectionKey }[] = [
  { label: "Home", page: "home" },
  { label: "Our Story", page: "our-story" },
  { label: "Venue", page: "venue" },
  { label: "Itinerary", page: "itinierary" },
  { label: "Registry", page: "registry" },
  { label: "RSVP", page: "rsvp" },
];

  return (
    <nav className="fixed top-1/2 left-0 transform -translate-y-1/2 z-10">
      <ul className="flex flex-col pl-8 space-y-4 font-[400] text-[22px] font-montserrat text-[#2B1105]">
        {navItems.map(({ label, page }) => (
          <li key={page}>
            <button
              className="hover:underline focus:outline-none"
              onClick={() => onNavigate(page)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
