import { lazy, Suspense, useEffect, useState } from "react";
import LandingBanner from "../../components/one-time-use/landing-banner/LandingBanner";
const ProjectCard = lazy(
  () => import("../../components/one-time-use/project-card/ProjectCard")
);
const PostFeedbackForm = lazy(
  () => import("../../components/one-time-use/feedback/PostFeedbackForm")
);
import axios from "../../../axios/axios";
import envConfig from "../../../conf/envConfig";
import CardSkeleton from "../../utils/skeleton/card-skeleton/CardSkeleton";
import { Link } from "react-router-dom";
import AnimatedHading from "../../utils/common-heading/AnimatedHading";
import FeedbackSection from "../../components/one-time-use/feedback/FeedbackSection";

import PopupSkeleton from "../../utils/skeleton/popup-skeleton/PopupSkeleton";

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
  const [mountSendFeedback, setMountSendFeedback] = useState<boolean>(false);
  const handleAddReview = () => {
    setMountSendFeedback(true);
  };
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
        <AnimatedHading
          headingText="Best Realworld Projects"
          paragraph={null}
        />
      </div>

      <p className="text-blue-600 text-center relative bottom-2 hover:underline cursor-pointer">
        <Link to={"/projects"}>See all</Link>
      </p>

      {pending === true ? (
        <section
          id="real_world_projects_skeleton"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto"
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
            projectData
              .slice(0, 3)
              .map((item, index) => (
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

      <div className="mt-28">
        <AnimatedHading
          headingText="Client Feedbacks of mine"
          paragraph={null}
        />
      </div>

      <p className="text-blue-600 text-center relative bottom-2  cursor-pointer">
        <button
          aria-label="Add Feedback"
          className="underline font-bold"
          onClick={handleAddReview}
        >
          Add feedback
        </button>
      </p>
      <FeedbackSection />
      <Suspense fallback={<PopupSkeleton />}>
        <PostFeedbackForm
          mountUnmountState={mountSendFeedback}
          mountUnmountHandler={setMountSendFeedback}
        />
      </Suspense>
    </main>
  );
};

export default Landing;
