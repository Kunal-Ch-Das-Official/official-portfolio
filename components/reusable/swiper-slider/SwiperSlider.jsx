"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const SwiperSlider = ({ content }) => {
  console.log(content);
  return (
    <main className="my-12 w-10/12 mx-auto lg:ml-24">
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
            <div className="border border-orange-600 lg:p-6 p-4 rounded-xl  relative">
              <div className="flex items-center">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  className="w-14 h-14 rounded-full shadow-xl border-2 border-orange-600"
                />
                <div className="ml-4">
                  <h4 className="text-white text-sm font-extrabold">
                    {" "}
                    {info.userName}{" "}
                  </h4>
                  <p className="text-xs text-orange-600 font-semibold mt-1">
                    CEO, Company
                  </p>
                </div>
              </div>

              <hr className="rounded-full border-[3px] mt-6 border-orange-700" />

              <div className="mt-6">
                <p className="text-gray-100 text-sm leading-relaxed">
                  {info.reviewContent}
                </p>
              </div>

              <div className="flex space-x-1 mt-4">
                {info.rating.map((star) => (
                  <FaStar key={star} className="text-xl text-orange-500" />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default SwiperSlider;
