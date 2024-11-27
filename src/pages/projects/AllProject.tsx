import React, { useEffect, useState } from "react";
import axios from "../../../axios/axios";
import envConfig from "../../../conf/envConfig";
import SimpleProjectCard from "../../components/one-time-use/project-card/SimpleProjectCard";
import SimpleCardSkeleton from "../../utils/skeleton/card-skeleton/SimpleCardSkeleton";
import { Helmet } from "react-helmet";

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
  const [responseLength, setResponseLength] = useState<number>(0);
  const [isPending, setPending] = useState<boolean>(false);

  useEffect(() => {
    const fetchAllProjects = async () => {
      setPending(true);
      try {
        const response = await axios.get(envConfig.projectUrl);
        if (response) {
          setResponseLength(response.data.length);
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

  // Dynamic SEO Setup
  const pageTitle = "All Projects - Kunal Chandra Das";
  const pageDescription =
    "Explore all the projects by Kunal Chandra Das, a skilled software engineer specializing in MERN-stack, JavaScript, React, Node.js, and more. Check out the live demos and GitHub repositories.";
  const keywords =
    "Kunal Chandra Das, projects, software engineer, web developer, full-stack development, React, JavaScript, MERN-stack, Node.js, GitHub, live project demos";

  return (
    <main className="bg-white mx-6">
      {responseLength === 0 && isPending === false ? (
        <div className="flex justify-center pt-28 lg:pt-36 lg:px-8 text-center text-lg font-semibold text-orange-400 py-10">
          <p className="w-full lg:w-3/4">
            Project not yet uploaded. But it will be available soon.
          </p>
        </div>
      ) : (
        ""
      )}
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png" // Default image for OG tags
        />
        <meta
          property="og:url"
          content="https://www.kunalchandradas.tech/projects"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Kunal Chandra Das" />
      </Helmet>
      <div
        className="min-h-screen pt-28 mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem]
       2xl:max-w-12xl flex justify-center"
      >
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
          {isPending === true
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
      </div>{" "}
    </main>
  );
};

export default AllProject;
