import React from 'react';
import KunalChandraDasImage from '@/public/images/kunal-chandra-das/Banner-Image.webp';
import Image from 'next/image';

const BlogBanner = () => {
  return (
    <section>
        <div className="bg-transparent relative max-w-full mx-auto rounded overflow-hidden mt-4">
      <div className="grid sm:grid-cols-2 items-center max-sm:gap-10 py-40">
        <div className="text-center px-6">
          <h3 className="font-extrabold text-5xl text-white leading-tight">
            <span className="text-orange-500">Insights  </span>
           &
           <span className="text-orange-300"> Inspirations</span>
           </h3>
          <h6 className="text-2xl text-gray-50 mt-2">Bolgs will be added in future</h6>
          <p className="text-gray-50 text-base leading-relaxed mt-4">Explore my latest blog posts on industry trends, design tips, and personal insights. Stay updated with articles that offer valuable knowledge and spark creative ideas.</p>
        </div>

        <div className="bg-gradient-to-tr from-orange-400 to-orange-600 rounded-tl-full rounded-bl-full w-full h-max">
          <div className="p-2">
            <Image src={KunalChandraDasImage} priority quality={75} loading='eager' className="h-64 w-64 rounded-full object-cover border-4 border-white" alt="Kunal Chandra Das" />
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default BlogBanner