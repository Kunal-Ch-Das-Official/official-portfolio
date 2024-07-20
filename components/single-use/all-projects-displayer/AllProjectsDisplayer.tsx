'use client';
import { AllProjectCard } from '@/components/re-use/all-project-card/AllProjectCard';
import envConfig from '@/envConfig';
import ComponentSpinner from '@/utils/loading-state/component-loading/ComponentSpinner';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface AllProjectData {
    _id: string,
    projectName: string,
    author: string,
    projectUrl: string,
    projectThumbnail: string,
    firstView: string,
    githubLink: string
  }
  interface ProjectDisplayerProps {
    sliceFrom: number | undefined,
    sliceTo: number | undefined
  }

const AllProjectsDisplayer:React.FC<ProjectDisplayerProps> = ({sliceFrom, sliceTo}) => {
    const [projectData, setProjectData] = useState<AllProjectData[]>([]);
    const [responseComming, setResponseComming] = useState<boolean>(true);
    useEffect(() => {
    const getProjects = async () => {
      try {
        const response:any = await axios.get(envConfig.allProjectsApiUrl);
        setProjectData(response.data);
        setResponseComming(false);
      } catch (error) {
        console.log(`Unable to fetch, cause: ${error}`);
        setResponseComming(false);
      }
      
    }
    getProjects();
    }, []);
  return (

    <>
    {responseComming === true ? <ComponentSpinner /> :
    <section>
      {projectData.length === 0 ? <h2 className="text-orange-500 text-center text-xl font-bold">Currently projects are unavailable!!</h2> :
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-2 xl:w-full 2xl:w-[70%] 2xl:mx-auto'>
        {projectData.slice(sliceFrom, sliceTo).map((project) =>(
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
}
    </section>
    }
    </>
  )
}

export default AllProjectsDisplayer;