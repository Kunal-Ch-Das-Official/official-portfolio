import React from 'react';
import KunalChandraDasImage from '@/public/images/kunal-chandra-das/Banner-Image.webp';
import Image from 'next/image';

const BlogBanner = () => {
  return (
    <section>
        <div className="bg-transparent relative max-w-full mx-auto rounded overflow-hidden bannerBackground">
      <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 pt-40">


      <div className="bg-gradient-to-tl from-orange-400 to-orange-600 rounded-tr-full rounded-br-full w-full h-max">
          <div className="p-2 flex justify-end">
            <Image src={KunalChandraDasImage} priority quality={75} loading='eager' className="h-64 w-64 rounded-full object-cover border-4 border-white" alt="Kunal Chandra Das" />
          </div>
        </div>


        <div className="text-center px-6">
          <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-white">
            <span className="text-orange-500">Insights  </span>
           &
           <span className="text-orange-300"> Inspirations</span>
           </h3>
          <h6 className="text-lg md:text-xl lg:text-2xl mb-4 text-white">Technical Blogs By Kunal</h6>
          <p className="flex flex-col lg:w-3/4 md:w-full w-full text-sm md:text-sm lg:text-md">Explore my latest blog posts on industry trends, design tips, and personal insights. Stay updated with articles that offer valuable knowledge and spark creative ideas.</p>
        </div>


      </div>
    </div>
    </section>
  )
}

export default BlogBanner