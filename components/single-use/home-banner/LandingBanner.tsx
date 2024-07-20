import Image from "next/image";
import React from "react";
import profilePicture from "@/public/images/kunal-chandra-das/Banner-Image.webp";
import dynamic from "next/dynamic";
import { MdDownload } from "react-icons/md";
import Link from "next/link";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
const TypeWriter = dynamic(() => import("@/utils/type-writter/TypeWritter"), {
  loading: () => <ComponentSpinner />,
});

const LandingBanner: React.FC = () => {
  const texts: string[] = [
    "Welcome To My Portfolio",
    "I'm a Mern Stack Developer",
    "I'm a Web Designer",
    "I'm A Tech Enthusiast",
    "Enjoy Your Stay",
  ];

  return (
    <section className="text-gray-100 body-font pt-24 mb-10 lg:mb-10">
      <div className="container mx-auto flex px-5 py-24 lg:flex-row md:flex-col flex-col justify-between items-center w-full">
        <div className=" text-center lg:text-left lg:w-1/2 md:w-3/4 w-full mt-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-white">
            <span className="text-orange-700 mb-2">Kunal </span>
            <span className="text-orange-500 mb-2"> Chandra </span>
            <span className="text-orange-400 mb-2"> Das </span>
            <br className="hidden lg:inline-block" />
            Official Portfolio
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl mb-4 text-white">
            <span>Hello,</span>
            <span className="text-orange-500 ml-2">
              <TypeWriter texts={texts} />
            </span>
          </h2>
          <p className="flex flex-col lg:w-3/4 md:w-full w-full text-sm md:text-sm lg:text-md">
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever. Technologies and tools that I use to create such
            awesome websites.
          </p>

          <div className="flex justify-center lg:justify-normal mt-8">
            <Link
              prefetch={false}
              href={"/about/#getResume"}
              className="relative 2xl:flex xl:flex lg:flex w-50 items-center justify-center overflow-hidden bg-tranparent hover:bg-transparent border-2 border-orange-500 text-black shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold bg-orange-500 hover:shadow-orange-600 hover:text-orange-500 rounded-lg inline-flex mb-4 lg:mb-0 lg:mr-8 h-[40px] w-45 text-sm md:text-md md:h-[45px] md:w-50 lg:text-lg lg:h-[50px] lg:w-50" 
            >
              <span className="relative z-0 ml-4">Download Resume</span>
              <MdDownload className="text-2xl font-bold mx-4 relative z-0" />
            </Link>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/2 w-5/6 flex justify-center lg:justify-end mb-28 lg:mb-0 pt-32 lg:pt-8">
          <Image
            className="object-cover object-center rounded-full shadow-custom-glow"
            alt="Kunal-Chandra-Das-Photo"
            height={430}
            width={430}
            priority
            quality={75}
            loading="eager"
            src={profilePicture}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingBanner;
