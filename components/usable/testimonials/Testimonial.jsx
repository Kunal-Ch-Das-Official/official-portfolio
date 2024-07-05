import getReviews from '@/apis/review-fetching/getReviews';
import SwiperSlider from '@/components/reusable/swiper-slider/SwiperSlider';
import React from 'react';
import SendReview from '../send-review/SendReview';


const Testimonial = async () => {
    const allReview = await getReviews();
  return (
    <main className='mt-36 mb-28'>
        <div className='flex flex-row justify-center'>
            <h4 className='text-2xl font-bold'>    
            <span className="text-orange-700 mb-2">What </span>
              <span className="text-orange-500 mb-2"> Is My</span>
              <span className="text-orange-400 mb-2"> Client </span>
              <span className="text-orange-300 mb-2"> Say's </span>  
            </h4>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
          <SwiperSlider content={allReview}/>
          <SendReview />
        </div>

        
    </main>
  )
}

export default Testimonial;