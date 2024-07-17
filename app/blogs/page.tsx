import BlogBanner from '@/components/single-use/blog-banner/BlogBanner';
import React from 'react';



interface ProjectOverviewMetaData{
  title: string,
  description: string,
  keywords: string
}


export const metadata: ProjectOverviewMetaData = {
  title: "Kunal's Blog",
  description: "Kunal Chandra Das Official Portfolio",
  keywords: "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, "
};

const Blogs = () => {
  return (
    <main>
      <BlogBanner />
    </main>
  )
}

export default Blogs;