import BlogBanner from "@/components/single-use/blog-banner/BlogBanner";
import ComponentSpinner from "@/utils/loading-state/component-loading/ComponentSpinner";
import dynamic from "next/dynamic";
import React from "react";
const BlogCanvas = dynamic(
  () => import("@/components/single-use/blog-canvas/BlogCanvas"),
  {
    loading: () => <ComponentSpinner />,
  }
);

interface ProjectOverviewMetaData {
  title: string;
  description: string;
  keywords: string;
}

export const metadata: ProjectOverviewMetaData = {
  title: "Kunal's Blog",
  description:
    "Kunal Chandra Das Magicmind Technology Kolakata, Backoffice employee Linkdin, Facebook, Instagram Twitter, Github",
  keywords:
    "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,",
};

const Blogs = () => {
  return (
    <main>
      <BlogBanner />
      <BlogCanvas />
    </main>
  );
};

export default Blogs;
