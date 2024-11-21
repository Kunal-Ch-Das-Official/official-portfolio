import React from "react";
import AboutInfoSection from "../../components/one-time-use/about-info-section/AboutInfoSection";
import AboutBanner from "../../components/one-time-use/about-landing-banner/AboutBanner";

const About: React.FC = () => {
  return (
    <div
      className="mx-auto w-full
     md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4 pt-32 pb-32"
    >
      <AboutBanner />
      <AboutInfoSection />
    </div>
  );
};

export default About;
