import React, { lazy, Suspense } from "react";
import AboutBanner from "../../components/one-time-use/about-landing-banner/AboutBanner";
const AboutInfoSection = lazy(
  () =>
    import("../../components/one-time-use/about-info-section/AboutInfoSection")
);
const About: React.FC = () => {
  return (
    <div
      className="mx-auto w-full
     md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4 lg:px-0 pt-32 pb-32"
    >
      <AboutBanner />
      <Suspense fallback={"Loading"}>
        <AboutInfoSection />
      </Suspense>
    </div>
  );
};

export default About;
