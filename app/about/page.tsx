import AboutBanner from '@/components/single-use/about-banner/AboutBanner';
import { AboutMeInfo } from '@/components/single-use/about-me-info/AboutMeInfo';
import Resume from '@/components/single-use/resume/Resume';
import React from 'react';


interface AboutMetaData{
  title: string,
  description: string,
  keywords: string
}


export const metadata: AboutMetaData = {
  title: "About Me",
  description: "Kunal Chandra Das Magicmind Technology Backoffice employee Linkdin, Facebook, Instagram Twitter, Github",
  keywords: "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,",

};


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