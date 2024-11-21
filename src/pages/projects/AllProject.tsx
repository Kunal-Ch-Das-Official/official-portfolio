import React, { useEffect, useState } from "react";
import axios from "../../../axios/axios";
import envConfig from "../../../conf/envConfig";
import SimpleProjectCard from "../../components/one-time-use/project-card/SimpleProjectCard";
import SimpleCardSkeleton from "../../utils/skeleton/card-skeleton/SimpleCardSkeleton";

interface allProjectsResponseI {
  _id: string;
  projectName: string;
  projectType: string;
  description: string;
  firstPageImageUrl: string;
}

const AllProject: React.FC = () => {
  const [projectResponse, setProjectResponse] = useState<
    allProjectsResponseI[]
  >([]);
  const [isPending, setPending] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const response = await axios.get(envConfig.projectUrl);
        if (response) {
          setProjectResponse(response.data);
        }
      } catch (error) {
        console.log(error);
        throw new Error(`Can't fetch projects due to: ${error}`);
      } finally {
        setPending(false);
      }
    };
    fetchAllProjects();
  }, []);

  return (
    <main className="bg-orange-100">
      <div
        className="min-h-screen pt-28 mx-auto w-full md:max-w-full lg:max-w-5xl 
      xl:max-w-[78rem] 2xl:max-w-12xl flex justify-center"
      >
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
          {isPending
            ? Array.from({ length: 8 }).map((_, index) => (
                <SimpleCardSkeleton key={index} />
              ))
            : projectResponse.map((project, index) => (
                <SimpleProjectCard
                  key={index}
                  projectTitle={project.projectName}
                  projectFirstviewSrc={project.firstPageImageUrl}
                  projectType={project.projectType}
                  projectDescription={project.description}
                  overViewUrl={`/project/${project._id}`}
                />
              ))}
        </section>
      </div>
    </main>
  );
};

export default AllProject;
