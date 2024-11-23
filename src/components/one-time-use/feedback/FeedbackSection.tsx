import React, { useEffect, useState } from "react";
import axios from "../../../../axios/axios";
import envConfig from "../../../../conf/envConfig";
import FeedbackCarousel from "./FeedbackCarousel";
import PageLoader from "../../../utils/page-loader/PageLoader";
import { VscFeedback } from "react-icons/vsc";

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
    <main className="pt-10">
      {pending && <PageLoader />}

      <div
        className="flex flex-wrap justify-center lg:justify-start flex-1 shrink gap-5 items-center self-stretch
           my-auto basis-0 min-w-[240px] max-md:max-w-full"
      >
        <div className="flex relative flex-col justify-center self-stretch bg-orange-100 h-[70px] min-h-[70px] rounded-[16px] overflow-hidden w-[70px]">
          <div className="w-[100px] h-[100px] aspect-auto">
            <VscFeedback className="text-7xl text-red-400" />
          </div>
        </div>
        <div className="flex flex-col self-stretch my-auto min-w-[240px]">
          <div className="text-lg text-start max-[492px]:text-center text-gray-800 font-semibold">
            Building Digital Success Together
          </div>
          <div className="text-sm text-gray-500">
            See how my web development expertise <br />
            helped them achieve their online goals.
          </div>
        </div>
      </div>
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
