import React from "react";
import BlogBanner from "../../components/one-time-use/blog-banner/BlogBanner";
import Blog_banner from "../../assets/images/Blog_banner_image.webp";
import BlogDisplayer from "../../components/one-time-use/blog-component/BlogDisplayer";
import { Helmet } from "react-helmet"; // Import Helmet for managing head elements

const BlogArticle: React.FC = () => {
  return (
    <main className="mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl py-2 mt-[3.2rem] xl:mt-[5.7rem]">
      {/* SEO Head Tags using React Helmet */}
      <Helmet>
        <title>Articles - Kunal Chandra Das.</title>
        <meta
          name="description"
          content="Join me as I document and share the lessons, challenges, and discoveries encountered while learning web development. Explore coding basics and advanced techniques with me."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="My Web Development Journey" />
        <meta
          property="og:description"
          content="Join me as I document and share the lessons, challenges, and discoveries encountered while learning web development. From coding basics to advanced techniques, let's grow together!"
        />
        <meta property="og:image" content={Blog_banner} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="My Web Development Journey" />
        <meta
          name="twitter:description"
          content="Join me as I document and share the lessons, challenges, and discoveries encountered while learning web development. From coding basics to advanced techniques, let's grow together!"
        />
        <meta name="twitter:image" content={Blog_banner} />
      </Helmet>

      <BlogBanner
        bannerBackgroundImg={Blog_banner}
        headingFirst={"Join My "}
        UniqueHeading={"Web Development"}
        headingLast={"Journey."}
        subHeading={`Join me as I document and share the lessons, challenges, and discoveries I've encountered while learning web development. From coding basics to advanced techniques, let's grow together!`}
      />

      <BlogDisplayer />
    </main>
  );
};

export default BlogArticle;
