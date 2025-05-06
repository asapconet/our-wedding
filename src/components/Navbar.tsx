interface NavbarProps {
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setCurrentPage }) => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4 text-white">
        <li>
          <button
            className="hover:underline"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => setCurrentPage("about")}
          >
            About
          </button>
        </li>
        <li>
          <button
            className="hover:underline"
            onClick={() => setCurrentPage("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
