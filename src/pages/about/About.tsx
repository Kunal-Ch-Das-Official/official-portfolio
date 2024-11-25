import React, { lazy, Suspense } from "react";
import AboutBanner from "../../components/one-time-use/about-landing-banner/AboutBanner";
import { Helmet } from "react-helmet";

const AboutInfoSection = lazy(
  () =>
    import("../../components/one-time-use/about-info-section/AboutInfoSection")
);

const About: React.FC = () => {
  const pageTitle = "About Me - Kunal Chandra Das | Web Developer & Educator";
  const pageDescription =
    "Learn about Kunal Chandra Das, an experienced Back Office Operations Coordinator at Magicmind Technology. Discover his education, certifications, and skills in web development, economics, and IT.";
  const keywords =
    "Kunal Chandra Das, web developer, back office operations coordinator, Magicmind Technology, economics, React, Node.js, SQL, PostgreSQL, web development, full-stack development, Udemy, web development bootcamp";

  // Work Experience and Education Data
  const workExperiences = [
    {
      title: "Back Office Operations Coordinator",
      company: "Magicmind Technology",
      date: "03/2023 - Present",
      location: "Kolkata, West Bengal, India",
      responsibilities: [
        "Delivered comprehensive training to new employees on operational processes and best practices.",
        "Conducted detailed audits of submitted work, ensuring accuracy and adherence to quality standards.",
        "Maintained and updated attendance records for accurate payroll processing.",
        "Resolved process-related issues and employee concerns promptly, fostering a harmonious work environment.",
        "Identified areas for improvement within the team and proposed actionable solutions.",
      ],
    },
  ];

  const educationHistory = [
    {
      degree: "Economics Honour's",
      institution: "Indira Gandhi National Open University",
      date: "01/2024 - Present",
      location: "Kolkata, West Bengal, India",
      courses: [
        "Environmental Studies",
        "Introductory Microeconomics",
        "Mathematical Methods for Economics I",
        "Introductory Macroeconomics",
        "Media and Communication Skills",
      ],
    },
    {
      degree: "Bachelor's Of Arts (Dropped Out)",
      institution: "Kabi Sukanta Mahavidyalaya",
      date: "Not completed",
      location: "Bhadreswar, Hooghly, West Bengal",
      courses: ["Bengali", "English", "Geography", "Political Science"],
    },
  ];

  const certifications = [
    {
      title: "Certificate in Information Technology Application (CITA)",
      institution: "Chinsurah Sadar Youth Computer Academy",
      date: "01/2022 - 06/2022",
      location: "Chinsurah, Hooghly, West Bengal",
      skills: [
        "Microsoft Word",
        "Microsoft Excel",
        "Microsoft PowerPoint",
        "Internet Browsing",
        "Microsoft Access",
      ],
    },
    {
      title: "The Complete Web Development Bootcamp",
      institution: "Dr. Angela Yu - Udemy",
      date: "01/2022 - 06/2022",
      location: "London App Brewery",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript ES6",
        "ReactJS",
        "Node.js with Express",
        "SQL",
        "PostgreSQL",
        "Web3",
        "DApps",
      ],
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kunal Chandra Das",
    jobTitle: "Web Developer & Educator",
    worksFor: {
      "@type": "Organization",
      name: "Magicmind Technology",
    },
    education: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Economics Honour's",
        educationalCredentialAwarded: "Bachelor's Degree",
        educationalOrganization: "Indira Gandhi National Open University",
        startDate: "2024",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor's of Arts (Dropped Out)",
        educationalOrganization: "Kabi Sukanta Mahavidyalaya",
        startDate: "Not completed",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/kunalchandradas",
      "https://github.com/kunalchandradas",
    ],
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (OG) Tags for Social Media Sharing */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://www.kunalchandradas.tech/public/android-chrome-512x512.png"
        />
        <meta
          property="og:url"
          content="https://www.kunalchandradas.tech/about"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Kunal Chandra Das" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(workExperiences) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(certifications) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(educationHistory) }}
        />
      </Helmet>

      <div className="mx-auto w-full md:max-w-full lg:max-w-5xl xl:max-w-[78rem] 2xl:max-w-12xl px-4 lg:px-0 pt-32 pb-32">
        <AboutBanner />
        <Suspense fallback={"Loading..."}>
          <AboutInfoSection />
        </Suspense>
      </div>
    </>
  );
};

export default About;
