import React from "react";
import ProjectDisplayer from "@/components/re-use/project-card/ProjectDisplayer";
import LandingBanner from "@/components/single-use/home-banner/LandingBanner";
import SectionHeading from "@/components/re-use/section-heading/SectionHeading";
import StackOverview from "@/components/single-use/stack-overview/StackOverview";
import TesimonialBody from "@/components/single-use/testimonial/TesimonialBody";
import BackgroundEffect from "@/components/user-interface/application-background/BackgroundEffect";


const Home = () => {
  return (
    <main>
      <BackgroundEffect />
      <div style={{ position: 'relative', zIndex: 1 }}>
      <LandingBanner />
      </div>
      <StackOverview />
      <SectionHeading
        mainHeading="Here is my best projects"
        subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptate veniam"
      />
      <ProjectDisplayer />
      <div className="mt-28">
        <SectionHeading
          mainHeading="This is my client reviews"
          subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptate veniam"
        />
      </div>

      <TesimonialBody />
    </main>
  );
};

export default Home;
