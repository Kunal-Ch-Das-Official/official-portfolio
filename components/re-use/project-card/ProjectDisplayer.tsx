"use client";
import { ProjectCard } from "@/components/re-use/project-card/ProjectCard";
import envConfig from "@/envConfig";
import axios from "axios";
import { useEffect, useState } from "react";

interface ProjectData {
  _id: string;
  projectName: string;
  projectThumbnail: string;
  author: string;
  projectUrl: string;
  firstView: string;
}

const ProjectDisplayer: React.FC = () => {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  useEffect(() => {
    const getProject = async () => {
      try {
        const projectDataRes: any = await axios.get(
          envConfig.allProjectsApiUrl
        );
        setProjectData(projectDataRes.data);
      } catch (error) {
        console.log(`Error To Fetch..  Resion:${error}`);
      }
    };
    getProject();
  }, []);
  
  return (
    <section>
      {
        projectData.length === 0 ? <h2 className="text-orange-500 text-center text-xl font-bold">Currently projects are unavailable!!</h2> :
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projectData.slice(0, 3).map((projectDetails) => (
        <ProjectCard
          key={projectDetails._id}
          projectName={projectDetails.projectName}
          projectThumbnail={projectDetails.projectThumbnail}
          projectOwner={projectDetails.author}
          previewLink={projectDetails.projectUrl}
          projectImage={projectDetails.firstView}
        />
      ))}
    </div>
}
    </section>
  );
};

export default ProjectDisplayer;
