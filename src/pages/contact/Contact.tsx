import React from "react";
import ContactForm from "../../components/one-time-use/contact-form/ContactForm";
import { Helmet } from "react-helmet";

const Contact: React.FC = () => {
  return (
    <>
      {/* SEO: Add SEO Metadata using React Helmet */}
      <Helmet>
        <title>Contact - Kunal Chandra Das.</title>
        <meta
          name="description"
          content="Discover the best real-world projects by Kunal Chandra Das, a software engineer specializing in MERN-stack development, UX/UI design, and system architecture."
        />
        <meta
          name="keywords"
          content="Kunal Chandra Das, software engineer, web developer, MERN-stack, React, JavaScript, TypeScript, MongoDB, Node.js, Express.js, system design, UX/UI, full-stack development, Kolkata, India"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Kunal Chandra Das - Software Engineer"
        />
        <meta
          property="og:description"
          content="Explore Kunal Chandra Das's portfolio of real-world projects, showcasing full-stack development with the MERN stack, system design expertise, and more."
        />
        <meta
          property="og:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png"
        />
        <meta property="og:url" content="https://www.kunalchandradas.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Kunal Chandra Das" />
        <meta property="og:updated_time" content="2024-11-25T12:00:00Z" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kunal Chandra Das - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Visit the personal website of Kunal Chandra Das, a skilled software engineer and web developer with expertise in the MERN stack and system design."
        />
        <meta
          name="twitter:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png"
        />
      </Helmet>
      <main
        className=" mx-auto w-full md:max-w-full lg:max-w-5xl pt-12 pb-20
    xl:max-w-[79.5rem]
     2xl:max-w-12xl px-4 flex justify-center"
      >
        <section className="pt-10 rounded-md pb-10 md:w-3/4 lg:1/2 xl:1/2 max-w-1/2 w-full">
          <ContactForm />
        </section>
      </main>{" "}
    </>
  );
};

export default Contact;
