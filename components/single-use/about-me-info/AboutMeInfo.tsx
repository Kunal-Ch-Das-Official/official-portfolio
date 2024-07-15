"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { AboutInfoUi } from "../../user-interface/about-info-ui/AboutInfoUi";

export function AboutMeInfo() {
  return (
    <div className="min-h-screen mt-12" id="about">
      <div className="text-center mb-10">
        <h2
          className="mb-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl
  "
        >
          <span className="text-orange-700">Work </span>
          <span className="text-orange-500">Experience </span>
          <span className="text-orange-400">And </span>
          <span className="text-orange-300">Education </span>
        </h2>
      </div>
      <AboutInfoUi className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {myInformation.map((item) => (
            <div key={`content-${item.id}`} className="mb-10">
              <h1 className="bg-black text-orange-500 rounded-full text-xl w-full px-8 flex justify-center items-center py-1 mb-2">
                {item.badgeFor}
              </h1>
              <h2 className="bg-black text-white rounded-full text-lg w-1/2 flex justify-center items-center py-1 mb-2">
                {item.badge}
              </h2>
              <p className={twMerge("text-white", "text-lg mb-2 px-4")}>
                {item.title}
              </p>
              <p className={twMerge("text-white", "text-sm mb-2 px-4")}>
                {item.date}
              </p>
              <p className={twMerge("text-white", "text-sm mb-4 px-4")}>
                {item.location}
              </p>
              <div className="text-sm  prose prose-sm dark:prose-invert px-4">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </AboutInfoUi>
    </div>
  );
}

const myInformation = [
  {
    id: 1,
    title: "Subject matter expert",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>
          Investigated issues and defects to determine problem root cause and
          formulate corrective actions and recommendations.
        </li>
        <li>
          Developing responsive and user-friendly web applications using React,
          CSS, and HTML.
        </li>
        <li>
          Provided operational assistance and developed software workarounds or
          resolutions.
        </li>
        <li>
          Designing and implementing RESTful APIs with a focus on efficient data
          handling and scalability.
        </li>
        <li>
          Coordinated with multiple teams for prompt issue resolution via
          channels like SLACK and JIRA.
        </li>
        <li>
          Possessed knowledge of checking which API is not responding properly
          and how to debug it.
        </li>
        <li>
          Collaborating with the design team to ensure the implementation of
          consistent UI/UX design.
        </li>
        <li>Writing clean and maintainable code using Git and Github.</li>
      </ul>
    ),
    badgeFor: "Work Experiences",
    badge: "Magicmind Technology",
    date: "03/2023 - Present",
    location: " Kolkata, West Bengal, India",
  },
  {
    id: 2,
    title: "Economics Honour's",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>Environmental Studies</li>
        <li>Introductory Microeconomics</li>
        <li>Mathematical Methods for Economics I</li>
        <li>Introductory Macroeconomics</li>
        <li>Mathematical Methods for Economics II.</li>
        <li>Media and Communication Skills</li>
        <li>Governance: Issues and Challenges</li>
        <li>English Communication Skills</li>
      </ul>
    ),
    badgeFor: "Second College",
    badge: "Indira Gandhi National Open University",
    date: "01/2024 - Present",
    location: " Kolkata, West Bengal, India",
  },
  {
    id: 3,
    title: "Bachelor's Of Art's",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>Bengali</li>
        <li>English</li>
        <li>Geography</li>
        <li>Political Science</li>
        <li>Educations</li>
        <li>History</li>
      </ul>
    ),
    badgeFor: "First College",
    badge: "Kabi Sukanta Mahavidyalaya",
    date: "Dropuout",
    location: "Bhadreswar, Hooghly, West Bengal",
  },
  {
    id: 4,
    title: "Higher Secondery Education",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>Bengali</li>
        <li>English</li>
        <li>Mathematics</li>
        <li>Physical science</li>
        <li>Life Science</li>
        <li>Chemistry</li>
        <li>History</li>
        <li>Geography</li>
        <li>Computer Application</li>
      </ul>
    ),
    badgeFor: "School",
    badge: "Garbati High School",
    date: "01/2013 - 12/2020",
    location: "Chinsurah, Hooghly, West Bengal",
  },
  {
    id: 5,
    title: "Certificate in Information Technology Application (CITA)",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>Fundamentals Of Computer</li>
        <li>DOS and Windows</li>
        <li>Microsoft Word</li>
        <li>Microsoft Excel</li>
        <li>Microsoft Power-Point</li>
        <li>Internet Browsing</li>
        <li>Visual FoxPro 6.0</li>
        <li>Introduction to Programming Language</li>
        <li>Program Flowchart and Algorithms</li>
        <li>Microsoft Access</li>
      </ul>
    ),
    badgeFor: "Certificate Course - 1",
    badge: "Chinsurah Sadar Youth Computer Academy",
    date: "01/2022 - 06/2022",
    location: "Chinsurah, Hooghly, West Bengal",
  },
  {
    id: 6,
    title: "The Complete Web Development Bootcamp",
    description: (
      <ul className="list-disc list-inside text-white">
        <li>Html:5</li>
        <li>Css:3</li>
        <li>Javascript:ES-6</li>
        <li>React Js</li>
        <li>Node Js with Express</li>
        <li>SQL</li>
        <li>PostgreSQL</li>
        <li>Authentication And Security</li>
        <li>Web3</li>
        <li>DApps</li>
      </ul>
    ),
    badgeFor: "Certificate Course - 2",
    badge: "Dr. Angela Yu - Udemy",
    date: "01/2022 - 06/2022",
    location: "London App Brewery",
  },
];
