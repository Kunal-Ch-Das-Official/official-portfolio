import React, { useEffect, useState } from "react";
import axios from "../../../../axios/axios";
import envConfig from "../../../../conf/envConfig";
import FeedbackCarousel from "./FeedbackCarousel";
import PageLoader from "../../../utils/page-loader/PageLoader";

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
    <main>
      {pending && <PageLoader />}

      {allFeedbacks.length === 0 ? (
        <p className="flex px-8 text-lg font-semibold text-orange-400 py-20">
          Currently feedbacks are not available. please write a feedback if we
          had work together{" "}
        </p>
      ) : (
        <FeedbackCarousel feedbacks={allFeedbacks} />
      )}
    </main>
  );
};

export default FeedbackSection;
