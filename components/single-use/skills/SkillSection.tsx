import Image from "next/image";
import React from "react";
import skillBannerImage from "@/public/images/Skills-Illustration.png";

const SkillSection = () => {
  const allSkills = [
    "#git",
    "#github",
    "#html",
    "#ejs",
    "#css",
    "#bootstrap",
    "#tailwind",
    "#javascript",
    "#reactjs",
    "#nextjs",
    "#nodejs",
    "#expressjs",
    "#mongodb",
    "#postgres",
    "#mysql",
    "#vps",
    "#cloud",
    "#etc",
  ];
  return (
    <section className="text-white body-font min-h-screen flex items-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-col lg:flex-row flex-col items-center w-5/6 ">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={skillBannerImage}
          />
        </div>
        <div className="lg:flex-grow md:w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font lg:text-3xl sm:text-3xl text-2xl mb-4 font-semibold inline-flex items-center">
            <span className="text-orange-600">About </span>
            <span className="text-orange-400 mx-3">My </span>
            <span className="text-orange-300">Skills</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            I help business owners and busy web developers to design & develop
            creative websites that fits their vision and attracts the visitors
            to stay for ever. Technologies and tools that I use to create such
            awesome websites.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-2 w-full">
            {allSkills.map((skill: string, index) => (
              <div
                key={index}
                className="text-white border-[.5px]
         border-gray-300 rounded-full w-fit px-4
          inline-flex items-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
