import getSingleProject from '@/apis/project-fetching/getSingleProject';
import SingleProject from '@/components/re-use/single-project/SingleProject';
import { notFound } from 'next/navigation';
import React from 'react';


interface ProjectOverviewMetaData{
    title: string,
    description: string,
    keywords: string
  }
 

  export const metadata: ProjectOverviewMetaData = {
    title: "Project Overview",
    description: "Kunal Chandra Das Official Portfolio",
    keywords: "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, "
  };

interface SingleProjectData {
    _id: string,
    projectName: string,
    author: string,
    description: string,
    projectThumbnail: string,
    firstView: string,
    secondView: string,
    thirdView: string,
    projectUrl: string,
    githubLink: string
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
                    projectOwner={singleProjectData.author}
                    projectDescription={singleProjectData.description}
                    projectThumbnail={singleProjectData.projectThumbnail}
                    firstPageView={singleProjectData.firstView}
                    secondPageView={singleProjectData.secondView}
                    thirdPageView={singleProjectData.thirdView}
                    githubLink={singleProjectData.githubLink}
                />
            </div>
        );
    } catch (error) {
        return notFound();
    }
};

export default ProjectOverview;
