import SectionHeading from "@/components/re-use/section-heading/SectionHeading";
import AllProjectsDisplayer from "@/components/single-use/all-projects-displayer/AllProjectsDisplayer";
import ProjectBanner from "@/components/single-use/project-banner/ProjectBanner";
import React from "react";

interface ProjectMetaData{
  title: string,
  description: string,
  keywords: string
}
export const metadata: ProjectMetaData = {
  title: "All Projects",
  description: "Kunal Chandra Das Magicmind Technology Backoffice employee Linkdin, Facebook, Instagram Twitter, Github",
  keywords: "Expert Web-Developer, Senior MERN-Stack Developer, System Designer, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,"
};


const Projects = () => {
  return (
    <main className="">
      <ProjectBanner />
      <div className="my-12">
      <SectionHeading
        mainHeading="Innovative Creations Unveiled"
        subHeading="Discover the full range of my work, from web development to design, showcasing my dedication to quality and creativity."
      />
      </div>
      <AllProjectsDisplayer sliceFrom={undefined} sliceTo={undefined}/>
    </main>
  );
};

export default Projects;
