"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import maleAvatar from '@/public/avatar/male-avatar-removebg-preview.png';
import femaleAvatar from '@/public/avatar/female-avatar-removebg-preview.png';
import transGenderAvatar from '@/public/avatar/transgender-avatar-removebg-preview.png';
import Image from "next/image";
// Define the types for the component props
interface SwiperCardProps {
  content: {
    userName: string,
    organization: string,
    gender: string,
    reviewContent: string,
    rating: number[]
  }[];
}

const SwiperCard: React.FC<SwiperCardProps> = ({ content }) => {

  return (
    <main className="my-12 w-4/5 lg:w-1/2 xl:w-[700px] 2xl:w-[700px] mx-auto lg:mx-auto flex justify-center items-center">
      {
        content.length === 0 ? <h1 className="text-xl font-bold text-orange-400">Currently I Don't Have Any Review Please Write A Review For Me</h1> : 
   
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
                <Image
                  src={info.gender == 'male'? maleAvatar : info.gender == "female" ? femaleAvatar : transGenderAvatar}
                  className="w-14 h-14 rounded-full shadow-xl border-2 border-white hover:border-orange-400"
                  alt={`${info.userName}'s profile`}
                />
                <div className="ml-4">
                  <h4 className="text-white text-sm font-extrabold">
                    {info.userName}
                  </h4>
                  <p className="text-xs text-orange-400 font-semibold mt-1">
                    {info.organization}
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
         }
    </main>
  );
};

export default SwiperCard;
