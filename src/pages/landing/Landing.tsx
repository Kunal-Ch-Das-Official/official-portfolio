import { lazy, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Import Helmet for SEO
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
      {/* SEO: Add SEO Metadata using React Helmet */}
      <Helmet>
        <title>Mern Stack Developer - Kunal Chandra Das.</title>
        <meta
          name="description"
          content="Discover the best real-world projects by Kunal Chandra Das, a software engineer specializing in MERN-stack development, UX/UI design, and system architecture."
        />
        <meta
          name="keywords"
          content="Kunal Chandra Das, software engineer, web developer, MERN-stack, React, JavaScript, TypeScript, MongoDB, Node.js, Express.js, system design, UX/UI, full-stack development, Kolkata, India"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Kunal Chandra Das - Software Engineer"
        />
        <meta
          property="og:description"
          content="Explore Kunal Chandra Das's portfolio of real-world projects, showcasing full-stack development with the MERN stack, system design expertise, and more."
        />
        <meta
          property="og:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png"
        />
        <meta property="og:url" content="https://www.kunalchandradas.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Kunal Chandra Das" />
        <meta property="og:updated_time" content="2024-11-25T12:00:00Z" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kunal Chandra Das - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Visit the personal website of Kunal Chandra Das, a skilled software engineer and web developer with expertise in the MERN stack and system design."
        />
        <meta
          name="twitter:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png"
        />
      </Helmet>

      <LandingBanner />
      <div className="mt-28">
        <AnimatedHading
          headingText="Industry Relevant Projects"
          paragraph={null}
        />
      </div>

      <p className="text-blue-600 text-center relative bottom-2 underline font-semibold cursor-pointer">
        <Link to={"/projects"} aria-label="See Total Project">
          See all
        </Link>
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
        <AnimatedHading headingText="Feedback from Clients" paragraph={null} />
      </div>

      <p className="text-blue-600 text-center relative bottom-2 hover:underline cursor-pointer">
        <button
          aria-label="Add Feedback"
          className="underline font-semibold"
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
