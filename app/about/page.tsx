import AboutBanner from "@/components/single-use/about-banner/AboutBanner";
import dynamic from "next/dynamic";
import React from "react";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
const AboutMeInfo = dynamic(
  () => import("@/components/single-use/about-me-info/AboutMeInfo"),
  {
    loading: () => <ComponentSpinner />,
  }
);
const Resume = dynamic(() => import("@/components/single-use/resume/Resume"), {
  loading: () => <ComponentSpinner />,
});

interface AboutMetaData {
  title: string;
  description: string;
  keywords: string;
}

export const metadata: AboutMetaData = {
  title: "About Me",
  description:
    "Kunal Chandra Das Magicmind Technology Backoffice employee Linkdin, Facebook, Instagram Twitter, Github",
  keywords:
    "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,",
};

const About = () => {
  return (
    <main>
      <AboutBanner />
      <AboutMeInfo />
      <Resume />
    </main>
  );
};

export default About;
