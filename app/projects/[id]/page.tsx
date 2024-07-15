
import getSingleProject from '@/apis/project-fetching/getSingleProject';
import SingleProject from '@/components/re-use/single-project/SingleProject';
import React from 'react'


interface SingleProjectData {
    _id: string,
    projectName: string,
    author: string,
    description:string,
    projectThumbnail:string,
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

const ProjectOverview: React.FC<SingleProjectProps> = async ({params}) => {
    const {id} = params;
    const singleProjectData: SingleProjectData = await getSingleProject(id);
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
        githubLink={singleProjectData.githubLink}/>
    </div>
  )
}

export default ProjectOverview;