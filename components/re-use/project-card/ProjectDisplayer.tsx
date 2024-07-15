import getProjectData from '@/apis/project-fetching/getProjects';
import { ProjectCard } from "@/components/re-use/project-card/ProjectCard";

interface ProjectData {
  _id: string,
  projectName: string,
  projectThumbnail: string,
  author: string,
  projectUrl: string,
  firstView: string,
}

const ProjectDisplayer = async () => {
  const projectData: ProjectData[] = await getProjectData();

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
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
    </main>
  );
}

export default ProjectDisplayer;
