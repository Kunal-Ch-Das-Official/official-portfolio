import React from "react";
import BlogBanner from "../../components/one-time-use/blog-banner/BlogBanner";
import Blog_banner from "../../assets/images/Blog_banner_image.webp";
import BlogDisplayer from "../../components/one-time-use/blog-component/BlogDisplayer";
const BlogArticle: React.FC = () => {
  return (
    <main
      className=" mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem]
     2xl:max-w-12xl py-2 mt-[3.2rem] xl:mt-[5.7rem]"
    >
      <BlogBanner
        bannerBackgroundImg={Blog_banner}
        headingFirst={"Technical"}
        UniqueHeading={"Aricle"}
        headingLast={"By Kunal Chandra Das."}
        subHeading={`Discover the achievements and contributions of our distinguished alumni from CBS Research Group, who have made a significant impact in their respective fields. Their dedication, expertise, and innovative work continue to inspire future generations of researchers and professionals.`}
      />
      <BlogDisplayer />
    </main>
  );
};

export default BlogArticle;
