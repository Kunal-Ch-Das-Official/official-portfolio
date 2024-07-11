"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Define the types for the component props
interface SwiperCardProps {
  content: {
    userName: string;
    reviewContent: string;
    rating: number[];
  }[];
}

const SwiperCard: React.FC<SwiperCardProps> = ({ content }) => {
 
  return (
    <main className="my-12 w-full lg:w-1/2 mx-auto lg:mx-auto flex justify-center items-center">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {content.map((info, index) => (
          <SwiperSlide key={index}>
            <div className="border border-white hover:border-orange-500 lg:p-6 p-4 rounded-xl">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-14 h-14 rounded-full shadow-xl border-2 border-white hover:border-orange-400"
                  alt={`${info.userName}'s profile`}
                />
                <div className="ml-4">
                  <h4 className="text-white text-sm font-extrabold">
                    {info.userName}
                  </h4>
                  <p className="text-xs text-orange-400 font-semibold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>
              <div className="flex space-x-1  ml-[68px]">
                {info.rating.map((star, starIndex) => (
                  <FaStar key={starIndex} className="text-xl text-orange-400 " />
                ))}
              </div>

              <hr className="rounded-full border-[3px] mt-6 border-orange-500" />

              <div className="mt-6">
                <p className="text-gray-100 text-sm leading-relaxed">
                  {info.reviewContent}
                </p>
              </div>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default SwiperCard;
