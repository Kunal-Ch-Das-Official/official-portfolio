import getProjectData from '@/apis/project-fetching/getProjects';


export default async function sitemap() {
  const baseUrl = 'https://www.kunalchandradas.tech';

  try {
    const res = await getProjectData();
    const projectsMetaData = res.map((project: any) => {

      return {
        url: `${baseUrl}/projects/${project.projectName}`,
        lastModified: project.createdAt
      };
    });

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
      },
      ...projectsMetaData,
    ];
    
  } catch (error) {
    console.error('Error fetching project data:', error);
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
    ];
  }
}
