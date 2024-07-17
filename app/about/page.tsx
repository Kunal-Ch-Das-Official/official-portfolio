import AboutBanner from '@/components/single-use/about-banner/AboutBanner';
import { AboutMeInfo } from '@/components/single-use/about-me-info/AboutMeInfo';
import Resume from '@/components/single-use/resume/Resume';
import SkillsMarquee from '@/components/single-use/skills-marquee/SkillsMarquee';
import React from 'react';


interface ProjectOverviewMetaData{
  title: string,
  description: string,
  keywords: string
}


export const metadata: ProjectOverviewMetaData = {
  title: "About Me",
  description: "Kunal Chandra Das Official Portfolio",
  keywords: "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, "
};


const About = () => {
  return (
    <main>
      <AboutBanner />
      <SkillsMarquee />
      <AboutMeInfo />
      <Resume />      
    </main>
  )
}

export default About;