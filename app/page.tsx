import React from "react";
import LandingBanner from "@/components/single-use/home-banner/LandingBanner";
import SectionHeading from "@/components/re-use/section-heading/SectionHeading";
import StackOverview from "@/components/single-use/stack-overview/StackOverview";
import TesimonialBody from "@/components/single-use/testimonial/TesimonialBody";
import dynamic from "next/dynamic";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
const AllProjectsDisplayer = dynamic(() => import("@/components/single-use/all-projects-displayer/AllProjectsDisplayer"),
{
  loading: () => <ComponentSpinner />
});





const Home = () => {

  return (
    <main>
      <LandingBanner />
      <StackOverview />
      <SectionHeading
        mainHeading="My best projects of all time"
        subHeading="Explore a curated selection of my recent work and innovative projects, demonstrating my skills and expertise in web development and design."
      />
      <AllProjectsDisplayer sliceFrom={0} sliceTo={3}/>
      <div className="mt-28">
        <SectionHeading
          mainHeading="Hear What My Client Say's"
          subHeading="Hear what my clients have to say about working with me and the impact of my projects on their businesses."
        />
      </div>
      <TesimonialBody />
    </main>
  );
};

export default Home;
