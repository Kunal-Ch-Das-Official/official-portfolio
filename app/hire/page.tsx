import ContactForm from '@/components/single-use/contact-me/ContactForm';
import React from 'react';




interface ProjectOverviewMetaData{
  title: string,
  description: string,
  keywords: string
}


export const metadata: ProjectOverviewMetaData = {
  title: "Contact To Me",
  description: "Kunal Chandra Das Official Portfolio",
  keywords: "Web-Developer, MERN-Stack Developer, System Designer, UX-UI Designer, "
};


const HireMe = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default HireMe;