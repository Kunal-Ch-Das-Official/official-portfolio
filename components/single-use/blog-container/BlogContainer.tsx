import BlogCard from '@/components/re-use/blog-card/BlogCard';
import React from 'react';


interface BlogContainerProps {
  backgroundColor: string;
  backendRes: any;
}
const BlogContainer:React.FC<BlogContainerProps> = ({
  backgroundColor, backendRes
}) => {
  return (
    <main className={`py-16 ${backgroundColor}`}>
      {backendRes.map((content:any, index:number) => (
        <div key={index}>
           <BlogCard 
           uniqeId={content._id}
           title={content.blogTitle}
           writer={content.authorName}
           corespondingImage={content.supportingImg}
           contentOverView={content.statement}
           createdAT={content.createdAt}
           />
        </div>
      ))

      }
      
      
      </main>
  )
}

export default BlogContainer;