import React from "react";
import AboutInfoSection from "../../components/one-time-use/about-info-section/AboutInfoSection";

const About: React.FC = () => {
  return (
    <div className=" border-l border-r bg-gray-50 border-gray-100 mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4">
      <AboutInfoSection />
    </div>
  );
};

export default About;
