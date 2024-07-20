import ContactForm from '@/components/single-use/contact-me/ContactForm';
import React from 'react';




interface ContactMetaData{
  title: string,
  description: string,
  keywords: string
}


export const metadata: ContactMetaData = {
  title: "Contact To Me",
  description: "Kunal Chandra Das Magicmind Technology Backoffice employee Linkdin, Facebook, Instagram Twitter, Github",
  keywords: "Expert Web-Developer, Senior MERN-Stack Developer, System Designer, UX-UI Designer, Back office employee, Ignou javascript, react, node js, html, css, bootstrap, tailwind, next js, mongo db mysql kolkata, westbengal, india,"
};


const HireMe = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default HireMe;