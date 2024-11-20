import { lazy, useEffect, useState } from "react";
import LandingBanner from "../../components/one-time-use/landing-banner/LandingBanner";
const ProjectCard = lazy(
  () => import("../../components/one-time-use/project-card/ProjectCard")
);

import CommonHeading from "../../utils/common-heading/CommonHeading";
import axios from "../../../axios/axios";
import envConfig from "../../../conf/envConfig";
import CardSkeleton from "../../utils/skeleton/card-skeleton/CardSkeleton";
import { Link } from "react-router-dom";

interface IProjectResponse {
  _id: string;
  projectName: string;
  author: string;
  projectType: string;
  owner: string;
  description: string;
  projectLogoUrl: string;
  firstPageImageUrl: string;
  secondPageImageUrl: string;
  thirdPageImageUrl: string;
  liveProjectUrl: string;
  githubRepoUrl: string;
  technologyUsed: [string];
  createdAt: string;
  updatedAt: string;
}
const Landing = () => {
  const [projectData, setProjectData] = useState<[IProjectResponse]>();
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    setPending(true);
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(envConfig.projectUrl);
        if (response) {
          setProjectData(response.data);
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(`Unable to get project data due to:${error.message}`);
      } finally {
        setPending(false);
      }
    };
    fetchProjectData();
  }, []);

  return (
    <main className="pb-12 bg-[#000]">
      <LandingBanner />
      <div className="mt-28">
        <CommonHeading
          headingOne="All"
          headingTwo="Realworld"
          headingThree="Projects"
          paragraph={null}
        />
      </div>

      <p className="text-blue-600 text-center relative bottom-8 hover:underline cursor-pointer">
        <Link to={"/projects"}>See all</Link>
      </p>

      {pending === true ? (
        <section
          id="real_world_projects_skeleton"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </section>
      ) : (
        <section
          id="real_world_projects"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4
           mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4"
        >
          {projectData &&
            projectData.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.projectName}
                owner={item.owner}
                imageOneSrc={item.firstPageImageUrl}
                imageTwoSrc={item.secondPageImageUrl}
                imageThreeSrc={item.thirdPageImageUrl}
                githubUrl={item.githubRepoUrl}
                previewUrl={item.liveProjectUrl}
                aboutProjectUrl={`/project/${item._id}`}
              />
            ))}
        </section>
      )}
    </main>
  );
};

export default Landing;
