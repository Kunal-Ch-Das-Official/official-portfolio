import React from "react";
import BlogBanner from "../../components/one-time-use/blog-banner/BlogBanner";
import Blog_banner from "../../assets/images/Blog_banner.jpg";
const BlogArticle: React.FC = () => {
  return (
    <main>
      <BlogBanner
        bannerBackgroundImg={Blog_banner}
        headingFirst={"Technical"}
        UniqueHeading={"Aricle"}
        headingLast={"of Kunal Chandra Das."}
        subHeading={`Discover the achievements and contributions of our distinguished alumni from CBS Research Group, who have made a significant impact in their respective fields. Their dedication, expertise, and innovative work continue to inspire future generations of researchers and professionals.`}
      />
    </main>
  );
};

export default BlogArticle;
