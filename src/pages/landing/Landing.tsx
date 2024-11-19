import LandingBanner from "../../components/one-time-use/landing-banner/LandingBanner";
import ProjectCard from "../../components/one-time-use/project-card/ProjectCard";
import CommonHeading from "../../utils/common-heading/CommonHeading";

const Landing = () => {
  // const images = [
  //   {
  //     id: 1,
  //     src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
  //     alt: "Slide 1",
  //   },
  //   {
  //     id: 2,
  //     src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
  //     alt: "Slide 2",
  //   },
  //   {
  //     id: 3,
  //     src: "https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure-1024x576.webp",
  //     alt: "Slide 3",
  //   },
  // ];
  return (
    <>
      <LandingBanner />
      <CommonHeading
        headingOne="All"
        headingTwo="Realworld"
        headingThree="Projects"
        paragraph={null}
      />
      <p className="text-blue-600 text-center relative bottom-8 hover:underline cursor-pointer">
        See all
      </p>
      <ProjectCard />
    </>
  );
};

export default Landing;
