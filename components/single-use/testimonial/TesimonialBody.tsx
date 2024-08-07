"use client";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import envConfig from "@/envConfig";
import SwiperCard from "@/components/re-use/swiper-card/SwiperCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdRateReview } from "react-icons/md";
import dynamic from "next/dynamic";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
const SendReview = dynamic(() => import("../reviews/SendReview"), {
  loading: () => <ComponentSpinner />,
});

interface ReviewDataProps {
  _id: string;
  userName: string;
  organization: string;
  gender: string;
  reviewContent: string;
  rating: number[];
}

const TesimonialBody: React.FC = () => {
  const [openReviewPostOption, setReviewPostOption] = useState<boolean>(false);
  const [responseComming, setResponseComming] = useState<boolean>(true);
  const [reviewData, setReviewData] = useState<ReviewDataProps[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get(envConfig.allReviewsApiUrl);
        setReviewData(res.data);
        setResponseComming(false);
      } catch (error) {
        setResponseComming(false);
        console.error("Error fetching reviews:", error);
      }
    };
    getReviews();

    AOS.init();
  }, []);

  const handleOpenSubmitOption = useCallback(() => {
    setReviewPostOption(true);
  }, []);

  const handleCloseSubmitOption = useCallback(() => {
    setReviewPostOption(false);
  },[]);

  return (
    <section>
      {responseComming === true ? (
        <ComponentSpinner />
      ) : (
        <div>
          {openReviewPostOption ? (
            <SendReview
              closePostBox={handleCloseSubmitOption}
              mount={openReviewPostOption === true && "zoom-in"}
            />
          ) : (
            <SwiperCard content={reviewData} />
          )}

          <div className="flex justify-center">
            <button
              aria-label="Review-Post"
              onClick={handleOpenSubmitOption}
              className={`relative ${
                openReviewPostOption ? "hidden" : "flex"
              } w-56 items-center justify-center overflow-hidden bg-tranparent hover:bg-orange-500 border-2 border-orange-500 text-orange-500 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold  hover:shadow-orange-600 hover:text-black rounded-lg inline-flex
              h-[40px] w-45 text-sm md:text-md md:h-[45px] md:w-50 lg:text-lg lg:h-[50px] lg:w-50`}
            >
              <span className="relative z-10 mr-2">Post Review</span>
              <MdRateReview className="relative z-10 text-2xl" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TesimonialBody;
