import { lazy, Suspense, useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await axios.get(envConfig.projectUrl);
        if (response) {
          setProjectData(response.data);
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(`Unable to get project data due to:${error.message}`);
      }
    };
    fetchProjectData();
  }, []);

  return (
    <>
      <LandingBanner />
      <div className="mt-14">
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

      <section
        id="real_world_projects"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {projectData &&
          projectData.map((item, index) => (
            <Suspense fallback={<CardSkeleton />} key={index}>
              <ProjectCard
                title={item.projectName}
                owner={item.owner}
                imageOneSrc={item.firstPageImageUrl}
                imageTwoSrc={item.secondPageImageUrl}
                imageThreeSrc={item.thirdPageImageUrl}
                githubUrl={item.githubRepoUrl}
                previewUrl={item.liveProjectUrl}
                aboutProjectUrl={`/project/${item._id}`}
              />
            </Suspense>
          ))}
      </section>
    </>
  );
};

export default Landing;
