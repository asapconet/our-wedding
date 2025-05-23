import { useNavigate } from "react-router-dom";
import { TextOnlyLayout } from "./textLayout";
import { longStoryContent, sampleStoryData } from "@constants/ourStory";
import { ImageCarouselLayout } from "./image";
import { SingleImageLayout } from "./singleImage";
import { TimelineWithImagesLayout } from "./timeline";
import { TimelineTextOnlyLayout } from "./timelineText";

const sampleImage =
  "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779423/nativeTwo_rsfjv3.jpg";

const OurStoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#2B1105] hover:underline focus:outline-none text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-6 sm:h-6"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="hidden sm:inline">Back to Wedding</span>
          <span className="sm:hidden">Back</span>
        </button>
      </div>

      <section className="py-12 sm:py-16 bg-white">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-base sm:text-lg font-medium text-gold mb-4">
            Ayo & Osa's Love Story
          </h2>
        </div>
        <TextOnlyLayout
          title={
            <>
              Our <br />
              Journey <br /> Together
            </>
          }
          content={longStoryContent}
        />
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-base sm:text-lg font-medium text-gold mb-4">
            How We Met
          </h2>
        </div>
        <ImageCarouselLayout
          title="The Beginning of Forever"
          content="From the moment Ayo first saw Osa, he knew there was something special about her smile. It was at a mutual friend's birthday party where their eyes met across a crowded room, and the rest, as they say, is history.

What started as casual conversation over shared interests in travel and photography quickly blossomed into late-night phone calls and weekend adventures exploring the city together."
          image={sampleImage}
        />
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-base sm:text-lg font-medium text-gold mb-4">
            The Proposal
          </h2>
        </div>
        <SingleImageLayout
          title="A Perfect Moment"
          content="After three years of building a beautiful relationship together, Ayo knew it was time to take the next step. He planned the perfect proposal at their favorite spot overlooking the city, where they had shared so many meaningful conversations about their future together."
          image={sampleImage}
        />
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="px-4 sm:px-0">
          <TimelineWithImagesLayout stories={sampleStoryData} />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="px-4 sm:px-0">
          <TimelineTextOnlyLayout stories={sampleStoryData} />
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
