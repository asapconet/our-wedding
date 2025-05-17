import { useNavigate } from "react-router-dom";
import OurStory from "./OurStory";

const OurStoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#2B1105] hover:underline focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Wedding
        </button>
      </div>

      <div className="pt-16">
        <OurStory />
      </div>
    </div>
  );
};

export default OurStoryPage;
