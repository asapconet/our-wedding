import { useNavigate } from "react-router-dom";
import { TextOnlyLayout } from "./textLayout";
import {
  acknowledgements,
  longStoryContent,
  timelineData,
} from "@constants/ourStory";
import { ImageCarouselLayout } from "./image";
import { SingleImageLayout } from "./singleImage";
import { TimelineWithImagesLayout } from "./timeline";
import { TimelineTextOnlyLayout } from "./timelineText";
import { BackButton } from "@components/BackButton";

const sampleImage =
  "https://res.cloudinary.com/dsz3obfpx/image/upload/v1747779423/nativeTwo_rsfjv3.jpg";

const OurStoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 left-4 z-50">
        <BackButton onClick={() => navigate("/")} />
      </div>

      <section className="py-12 sm:py-16 bg-white">
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h2 className="text-base sm:text-lg font-medium text-gold mb-4">
            Christabel and Ayodeji's Love Story
          </h2>
        </div>
        <TextOnlyLayout
          title={<>Our Journey Together</>}
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
          title="Giant steps begin with a tiny step of kindness"
          content="Ayodeji and Christabel met during their final year at university in 2021, both serving in the choir at Redeemed Christian Fellowship: where he played the keyboard, and she was a vocalist. At the time, their interactions were minimal; Christabel saw him as overly jovial, while Ayodeji hardly noticed her beyond fellowship duties and school activities.
          
          After their first semester exams, a friend (now bestman) encouraged Ayodeji to attend a prayer meeting, where they found Christabel sitting outside, clearly unwell. Though she initially said she was fine, Ayodeji sensed otherwise and tried to get a female executive to check on her. When that didn’t yield much, he stepped in and took her to the hospital himself. She was diagnosed with malaria, and Ayodeji insisted on standing by her side, an act of kindness that became the starting point of something much more."
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
          title="Perfect Moment"
          content='Fast forward to 2024, Ayodeji knew he wanted to propose to Christabel before the year ran out. He carefully planned a surprise that would feel intimate, meaningful, and unforgettable. With the help of close friends from both sides, he booked a private cinema and invited Christabel under the pretence of a casual movie hangout. To make it less suspicious, he had her invite her friends too. In the middle of the movie, a video began to play: a collection of their memories together, narrated by Ayodeji, recounting their journey. It ended with the words, “Would you give me a chance to pop your knuckles forever, and will you marry me?”, to which Christabel, completely stunned and emotional, gave a joyful and resounding "yes."'
          image="https://assets.ayoandosa.love/website-images/our-story/our-story-2.jpg"
        />
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="px-4 sm:px-0">
          <TimelineWithImagesLayout stories={timelineData} />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
        <div className="px-4 sm:px-0">
          <TimelineTextOnlyLayout stories={acknowledgements} />
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
