'use client';
import React, { useEffect } from 'react';
import './ProjectBanner.css';
import Image from 'next/image';
import BannerImage from '@/public/images/project-banner-img.webp';
const ProjectBanner: React.FC = () => {
  
  useEffect(() => {
    const bannerBody: Element | null | any = document.querySelector('.projectBanner');
    const spark = (event: MouseEvent) => {
    
      const effects = document.createElement('effects');
      // Set the position of the element based on the mouse event
      effects.style.left = event.pageX + 'px';
      effects.style.top = event.pageY + 'px';

      // Randomly scale the element
      effects.style.transform = `scale(${Math.random() * 2 + 1})`;

      // Set random transition values
      effects.style.setProperty('--x', getRandomTransitionValue());
      effects.style.setProperty('--y', getRandomTransitionValue());

      if (bannerBody) {
        bannerBody.appendChild(effects);
        // Remove the element after 2 seconds
        setTimeout(() => {
          bannerBody.removeChild(effects);
        }, 2000);
      }
    };

    const getRandomTransitionValue = () => {
      // Generate a random value between -200 and 200 pixels
      return `${Math.random() * 400 - 200}px`;
    };

    // Add event listener to track mouse movements and create spark effect
    bannerBody.addEventListener('mousemove', spark);

    // Cleanup the event listener on component unmount
    return () => {
      bannerBody.removeEventListener('mousemove', spark);
    };
  }, []);

  return (
    <main className="projectBanner bannerBackground">
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-32 gap-3 mx-20 h-[150vh] lg:h-[100vh]'>
    <div className=" text-center lg:text-left mt-20">
    <h1 className=" sm:text-4xl text-3xl mb-4 font-bold text-white">
            <span className="text-orange-700 mb-2">Before </span>
            <span className="text-orange-500 mb-2"> they </span>
            <span className="text-orange-400 mb-2"> sold </span>
            <span className="text-orange-300 mb-2"> out </span>  
            <br className="hidden lg:inline-block" />
            readymade gluten
          </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aperiam voluptatem non maxime id. Laudantium provident officiis sequi distinctio similique placeat ex, libero aut qui doloribus velit doloremque mollitia tempora.</p>
    </div>
 
    <div className="heroAnimation mx-auto lg:ml-24 flex flex-col justify-center flex-wrap">
      <div>
        <Image src={BannerImage} alt="Banner Image" width={500} height={200}/>
      </div>
    </div>
    </div>
    </main>
  );
};

export default ProjectBanner;
