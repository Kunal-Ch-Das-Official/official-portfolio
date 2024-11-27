import React, { useEffect, useState } from "react";
import axios from "../../../../axios/axios";
import envConfig from "../../../../conf/envConfig";
import FeedbackCarousel from "./FeedbackCarousel";
import ReviewSkeleton from "../../../utils/skeleton/review-skeleton/ReviewSkeleton";

interface FeedbackDataI {
  userName: string;
  organization: string;
  reviewHeading: string;
  reviewContent: string;
  rating: [number];
  date: Date;
}
const FeedbackSection: React.FC = () => {
  const [allFeedbacks, setAllFeedbacks] = useState<FeedbackDataI[]>([]);
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      setPending(true);
      try {
        const response = await axios.get(envConfig.feedbacksUrl);
        if (response) {
          setAllFeedbacks(response.data);
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(`Unable to fetch feedbacks due to: ${error.message}`);
      } finally {
        setPending(false);
      }
    };
    fetchFeedbackData();
  }, []);
  return (
    <main id="feedback_and_reviews">
      {pending && <ReviewSkeleton />}

      {allFeedbacks.length === 0 ? (
        <div
          className="flex justify-center w-full lg:px-8 text-center text-lg
         font-base text-orange-400 py-10"
        >
          <p className="md:w-1/2 md:px-8">
            Feedback is currently unavailable. If we've worked together, please
            consider leaving feedback.
          </p>
        </div>
      ) : (
        <FeedbackCarousel feedbacks={allFeedbacks} />
      )}
    </main>
  );
};

export default FeedbackSection;
