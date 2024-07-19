"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import envConfig from "@/envConfig";
import SwiperCard from "@/components/re-use/swiper-card/SwiperCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdRateReview } from "react-icons/md";
import dynamic from "next/dynamic";
const SendReview = dynamic(() => import("../reviews/SendReview"),
{
  loading: () => <p>Loading...</p>,
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
  const [reviewData, setReviewData] = useState<ReviewDataProps[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await axios.get(envConfig.allReviewsApiUrl);
        setReviewData(res.data);
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
        <button aria-label="Review-Post"
          onClick={handleOpenSubmitOption}
          className={`relative 2xl:flex ${
            openReviewPostOption ? "hidden" : "flex"
          } h-[50px] w-56 items-center justify-center overflow-hidden bg-tranparent hover:bg-orange-500 border-2 border-orange-500 text-orange-500 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold  hover:shadow-orange-600 hover:text-white rounded-lg inline-flex`}
        >
          <span className="relative z-10 mr-2">Post Review</span>
          <MdRateReview className="relative z-10 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default TesimonialBody;
