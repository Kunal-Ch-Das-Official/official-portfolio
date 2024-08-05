
import singleBlogFetching from '@/apis/single-blog-fetching/singleBlogFetching';
import SingleBlogContent from '@/components/single-use/single-blog-content/SingleBlogContent';
import React from 'react';

interface SingleBlogProps{
    params: {
        id:string
    }
}
const SingleBlog:React.FC<SingleBlogProps> = async ({params}) => {
    const {id} = params;
    const getSingleBlog = await singleBlogFetching(id);

  return (
    <main className='min-h-screen'>
      <SingleBlogContent 
      authorName={getSingleBlog.authorName}
      blogTitle={getSingleBlog.blogTitle}
      statementHeading={getSingleBlog.statementHeading}
      supportingImg={getSingleBlog.supportingImg}
      statement={getSingleBlog.statement}
      commandLine={getSingleBlog.commandLine}
      corespondingCode={getSingleBlog.corespondingCode}/> 
    </main>

  )
}

export default SingleBlog;