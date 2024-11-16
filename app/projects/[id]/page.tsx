import getSingleProject from "@/apis/project-fetching/getSingleProject";
import SingleProject from "@/components/re-use/single-project/SingleProject";
import { notFound } from "next/navigation";
import React from "react";

interface ProjectOverviewMetaData {
  title: string;
  description: string;
  keywords: string;
}

export const metadata: ProjectOverviewMetaData = {
  title: "All Projects",
  description:
    "Kunal Chandra Das Magicmind Technology Backoffice employee Kolkata, Linkdin, Facebook, Instagram Twitter, Github",
  keywords:
    "Expert Web-Developer, Magicmind Technology , Senior MERN-Stack Developer, System Designer, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,",
};

interface SingleProjectData {
  _id: string;
  projectName: string;
  author: string;
  projectType: string;
  owner: string;
  description: string;
  projectThumbnail: string;
  firstView: string;
  secondView: string;
  thirdView: string;
  projectUrl: string;
  githubLink: string;
  technologyUsed: [string];
}

interface SingleProjectProps {
  params: {
    id: string;
  };
}

const ProjectOverview: React.FC<SingleProjectProps> = async ({ params }) => {
  const { id } = params;

  try {
    const singleProjectData: SingleProjectData = await getSingleProject(id);
    if (!singleProjectData || id !== singleProjectData._id) {
      return notFound();
    }

    return (
      <div>
        <SingleProject
          projectId={singleProjectData._id}
          projectName={singleProjectData.projectName}
          projectAuthor={singleProjectData.author}
          projectOwner={singleProjectData.owner}
          projectType={singleProjectData.projectType}
          projectDescription={singleProjectData.description}
          projectThumbnail={singleProjectData.projectThumbnail}
          firstPageView={singleProjectData.firstView}
          secondPageView={singleProjectData.secondView}
          thirdPageView={singleProjectData.thirdView}
          githubLink={singleProjectData.githubLink}
          usedStack={singleProjectData.technologyUsed}
        />
      </div>
    );
  } catch (error) {
    return notFound();
  }
};

export default ProjectOverview;
