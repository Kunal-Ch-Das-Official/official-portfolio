import Image from "next/image";
import React from "react";
import BannerIllustration from "@/public/images/about/Skills-Illustration.webp";
import { SiMinutemailer } from "react-icons/si";
import { MdOutlineSimCardDownload } from "react-icons/md";
import Link from "next/link";

const AboutBanner = () => {
  return (
    <section className="py-20 bannerBackground">
      <div className="pt-20">
        <div className="grid md:grid-cols-2 lg:gap-x-20 items-center gap-10 max-w-5xl max-md:max-w-md mx-auto">
          <div className="md:h-[450px] lg:w-full">
            <Image
              src={BannerIllustration}
              width={500}
              height={500}
              quality={75}
              loading="eager"
              priority
              className="w-full h-full rounded-md object-cover"
              alt="About Me Illustration"
            />
          </div>

          <div className="max-md:text-center">
            <h3 className="text-white font-semibold md:text-3xl text-2xl md:leading-10">
              Discover my journey, passion, and the expertise that drives my
              creativity.
            </h3>
            <p className="text-gray-300 mt-4 text-sm leading-relaxed">
              From early inspirations to professional milestones, learn about my
              experiences, skills, and the dedication I bring to every project.
              Join me on a journey through my career and creative endeavors.
            </p>

            <div className="flex justify-center flex-col lg:flex-row lg:justify-normal mt-8 mx-12 lg:mx-0">
              <a
                rel="noopener"
                href="#getResume"
                className="relative 2xl:flex xl:flex lg:flex h-[50px] w-50 items-center justify-center overflow-hidden bg-tranparent hover:bg-transparent border-2 border-orange-500 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold bg-orange-500 hover:shadow-orange-600 hover:text-white rounded-lg inline-flex mb-4 lg:mb-0 lg:mr-8"
              >
                <span className="relative z-0 ml-4">Download Resume</span>
                <MdOutlineSimCardDownload className="text-2xl font-bold mx-4 relative z-0" />
              </a>

              <Link
                href={"/hire"}
                className="relative 2xl:flex xl:flex lg:flex h-[50px] w-50 items-center justify-center overflow-hidden bg-tranparent hover:bg-orange-500 border-2 border-orange-500 text-orange-500 shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:duration-100 before:ease-linear font-semibold  hover:shadow-orange-600 hover:text-white rounded-lg inline-flex"
              >
                <span className="relative z-0 ml-4">Send Proposal</span>
                <SiMinutemailer className="text-2xl font-bold mx-4 relative z-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
