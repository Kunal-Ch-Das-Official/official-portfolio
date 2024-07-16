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
  description: "Kunal Chandra Das Official Portfolio",
  keywords: "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, "
};


const Projects = () => {
  return (
    <main className="">
      <ProjectBanner />
      <div className="my-12">
      <SectionHeading
        mainHeading="Here Is All My Projects"
        subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
      />
      </div>
      <AllProjectsDisplayer />
    </main>
  );
};

export default Projects;
