import Image from "next/image";
import React from "react";
import BannerIllustration from "@/public/images/About-Banner-Illustration.png";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineSimCardDownload } from "react-icons/md";
import Link from "next/link";
const AboutBanner = () => {
  return (
    <section className="py-20 bannerBackground">
      <div className="pt-20">
        <div className="grid md:grid-cols-2 lg:gap-x-20 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
          <div className="md:h-[450px]">
            <Image
              src={BannerIllustration}
              className="w-full h-full rounded-md object-cover"
              alt="About Me Illustration"
            />
          </div>

          <div className="max-md:text-center">
            <h3 className="text-white font-semibold md:text-3xl text-2xl md:leading-10">
              Prompt Delivery and Enjoyable Dining Experience.
            </h3>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
              officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
              tempor ut reprehenderit.
            </p>

            <div className="flex justify-center flex-col lg:flex-row lg:justify-normal mt-8 mx-12 lg:mx-0">
              <a
                href="#getResume"
                className="relative 2xl:flex xl:flex lg:flex h-[50px] w-50 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600 mb-8 lg:mb-0 inline-flex lg:mr-6"
              >
                <span className="relative z-0 ml-4">Download Resume</span>
                <MdOutlineSimCardDownload className="text-2xl font-bold mx-4 hover:text-orange-500 relative z-0" />
              </a>

              <Link
                href={"/hire"}
                className="relative 2xl:flex xl:flex lg:flex h-[50px] w-50 items-center justify-center overflow-hidden bg-gradient-to-r from-red-400 to-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600 inline-flex"
              >
                <span className="relative z-0 ml-4">Send Proposal</span>
                <SiMinutemailer className="text-2xl font-bold mx-4 hover:text-orange-500 relative z-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
