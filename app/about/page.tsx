import AboutBanner from '@/components/single-use/about-banner/AboutBanner';
import { AboutMeInfo } from '@/components/single-use/about-me-info/AboutMeInfo';
import Resume from '@/components/single-use/resume/Resume';
import React from 'react';

const About = () => {
  return (
    <main>
      <AboutBanner />
      <AboutMeInfo />
      <Resume />      
    </main>
  )
}

export default About;