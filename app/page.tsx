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


interface MetaData{
  title: string,
  description: string,
  keywords: string
}


export const metadata: MetaData = {
  title: "Kunal Chandra Das",
  description: "Kunal Chandra Das Magicmind Technology, Kolkata Backoffice employee, Linkdin, Facebook, Instagram Twitter, Github",
  keywords: "Web-Developer, MERN-Stack Developer, System Designer, Magicmind Technology, Kolkata, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,"
};


const Home = () => {

  return (
    <main>
      <LandingBanner />
      <StackOverview />
      <SectionHeading
        darkTitle="Showcasing"
        semiDarkTitle="Practical Applications"   
        lightTitle="and Impactful Solutions"
        subHeading="Explore a selection of my projects that demonstrate real-world problem-solving and innovative design. Each project reflects my commitment to delivering effective and user-centric web solutions tailored to meet diverse client needs."
      />
      <AllProjectsDisplayer sliceFrom={0} sliceTo={3}/>
      <div className="mt-28">
        <SectionHeading
          darkTitle="Client"   
          semiDarkTitle="Testimonials"
          lightTitle="and Feedbacks"
          subHeading="Discover the experiences and insights shared by those I've worked with. Their testimonials provide a glimpse into the quality, reliability, and impact of my work, showcasing the results and satisfaction achieved through our collaboration."
        />
      </div>
      <TesimonialBody />
    </main> 
  );
};

export default Home;
