import getProjectData from '@/apis/project-fetching/getProjects';
import { AllProjectCard } from '@/components/re-use/all-project-card/AllProjectCard';
import React from 'react';

interface AllProjectData {
    _id: string,
    projectName: string,
    author: string,
    projectUrl: string,
    projectThumbnail: string,
    firstView: string,
    githubLink: string
  }

const AllProjectsDisplayer = async () => {
    const allProjectData: AllProjectData[] = await getProjectData();
  return (
    <main>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
        {allProjectData.map((project) =>(
         <AllProjectCard 
         key={project._id}
         projectName={project.projectName}
         projectOwner={project.author}
         previewLink={project.projectUrl}
         projectLogo={project.projectThumbnail}
         projectImage={project.firstView}
         githubRepo={project.githubLink}
         projectsId={project._id}/>
        ))
           
        }
      
     </div>
    </main>
  )
}

export default AllProjectsDisplayer;