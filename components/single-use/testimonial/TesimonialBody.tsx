"use client";
import React, { useEffect, useState } from "react";
import SendReview from "../reviews/SendReview";
import axios from "axios";
import envConfig from "@/envConfig";
import SwiperCard from "@/components/re-use/swiper-card/SwiperCard";
import AOS from "aos";
import "aos/dist/aos.css";

interface ReviewDataProps {
  _id: string;
  userName: string;
  reviewContent: string;
  rating: number[];
}

const TesimonialBody: React.FC = () => {
  const [openReviewPostOption, setReviewPostOption] = useState<boolean>(false);
  const [reviewData, setReviewData] = useState<ReviewDataProps[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get(envConfig.allReviewsApiUrl);
        setReviewData(res.data); // Assuming res.data contains the array of reviews
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    getReviews();

    AOS.init();
  }, []);

  const handleOpenSubmitOption = () => {
    setReviewPostOption(true);
  };

  const handleCloseSubmitOption = () => {
    setReviewPostOption(false);
  };

  return (
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
          onClick={handleOpenSubmitOption}
          className={`relative 2xl:flex ${
            openReviewPostOption ? "hidden" : "flex"
          } h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600`}
        >
          <span className="relative z-10">Post Review</span>
        </button>
      </div>
    </div>
  );
};

export default TesimonialBody;
