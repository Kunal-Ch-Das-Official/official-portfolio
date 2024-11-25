import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet"; // Import React Helmet for SEO
import axios from "../../../axios/axios";
import envConfig from "../../../conf/envConfig";
import PageLoader from "../../utils/page-loader/PageLoader";

interface resumeResInterface {
  resumeUrl: string;
  updatedAt: Date;
}

const PreviewResume: React.FC = () => {
  const [resume, setResume] = useState<resumeResInterface[]>([]);
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    setPending(true);

    const fetchResume = async () => {
      try {
        const response = await axios.get(envConfig.resumeUrl);
        if (response) {
          setResume(response.data);
        }
      } catch (error: any) {
        console.log(error);
        throw new Error(
          `Something went wrong, unable to fetch resume due to: ${error.message}`
        );
      } finally {
        setPending(false);
      }
    };
    fetchResume();
  }, []);

  return (
    <main className="pt-40 mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4 pb-40">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Resume Preview - Kunal Chandra Das</title>
        <meta
          name="description"
          content="Preview the professional resume of Kunal Chandra Das, a software engineer with expertise in full-stack development, JavaScript, TypeScript, MERN-stack, and system design."
        />
        <meta
          name="keywords"
          content="Kunal Chandra Das, resume, software engineer, full-stack developer, MERN-stack, React, JavaScript, TypeScript, resume preview, Kolkata, India"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Kunal Chandra Das - Resume Preview"
        />
        <meta
          property="og:description"
          content="Explore the resume of Kunal Chandra Das, a full-stack developer specializing in MERN-stack and system design."
        />
        <meta
          property="og:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png" // You can change the URL to a relevant image for your website
        />
        <meta
          property="og:url"
          content="https://www.kunalchandradas.tech/preview-resume"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Kunal Chandra Das" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kunal Chandra Das - Resume Preview"
        />
        <meta
          name="twitter:description"
          content="Preview the resume of Kunal Chandra Das, showcasing skills in full-stack development, system design, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png" // You can change the URL to a relevant image for Twitter
        />
      </Helmet>

      {pending === true ? (
        <PageLoader />
      ) : (
        <>
          <section className="flex justify-center items-center">
            <img
              src={resume[0]?.resumeUrl}
              alt="Resume"
              className="w-full h-full rounded-xl"
            />
          </section>
          <div className="flex justify-end font-bold">
            Last update: {new Date(resume[0]?.updatedAt).toDateString()}
          </div>
        </>
      )}
    </main>
  );
};

export default PreviewResume;
