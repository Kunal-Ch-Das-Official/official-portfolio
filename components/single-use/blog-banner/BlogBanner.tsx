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
          <h3 className="font-extrabold text-5xl text-white leading-tight">
            <span className="text-orange-500">Insights  </span>
           &
           <span className="text-orange-300"> Inspirations</span>
           </h3>
          <h6 className="text-2xl text-gray-50 mt-2">Kunal Chandra Das Technical Blogs</h6>
          <p className="text-gray-50 text-base leading-relaxed mt-4">Explore my latest blog posts on industry trends, design tips, and personal insights. Stay updated with articles that offer valuable knowledge and spark creative ideas.</p>
        </div>


      </div>
    </div>
    </section>
  )
}

export default BlogBanner