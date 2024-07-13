import Image from "next/image";
import React from "react";
import profilePicture from "@/public/images/banner-images/Banner-Image.jpg";
import TypeWriter from "@/utils/type-writter/TypeWritter";

const LandingBanner: React.FC = () => {
  const texts: string[] = [
    "Welcome To My Portfolio",
    "I'm a Next.js Developer",
    "Using Tailwind CSS",
    "Enjoy Your Stay!",
  ];

  return (
    <section className="text-gray-100 body-font pt-16 pb-28 h-[180vh] lg:h-[140vh] mb-60 lg:mb-32">
      <div className="container mx-auto flex px-5 py-24 lg:flex-row md:flex-col flex-col items-center">
        <div className="lg:flex-grow  md:w-1/2 lg:pr-24 md:mx-auto flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
            <span className="text-orange-700 mb-2">Before </span>
            <span className="text-orange-500 mb-2"> they </span>
            <span className="text-orange-400 mb-2"> sold </span>
            <span className="text-orange-300 mb-2"> out </span>  
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
          <h2 className="text-2xl mb-4 text-orange-400">
            <TypeWriter texts={texts} />
          </h2>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra
            air plant cold-pressed tacos poke beard tote bag. Heirloom echo
            park mlkshk tote bag selvage hot chicken authentic tumeric
            truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center">
            <button className="relative 2xl:flex xl:flex lg:flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600">
              <span className="relative z-0">Get Started</span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 order-first lg:order-none mb-28 lg:mb-0">
          <Image
            className="object-cover object-center bgStyle"
            alt="Kunal-Chandra-Das-Photo"
            height={500}
            width={500}
            src={profilePicture}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
