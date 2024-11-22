import React, { memo } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../../utils/aceternity-interfaces/tracing-beam-setup/TracingBeam";

const AboutMeInfo: React.FC = () => {
  return (
    <div className="min-h-screen py-12 rounded-lg bg-gray-50/50" id="about">
      <div className="text-center mb-10"></div>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {myInformation.map((item) => (
            <div key={`content-${item.id}`} className="mb-10">
              <h1
                className="bg-white shadow text-orange-500 rounded-lg text-xl w-full
              px-4 flex justify-start items-center py-1 mb-2 font-semibold"
              >
                {item.badgeFor}
              </h1>
              <h2
                className="bg-white shadow text-gray-950 rounded-lg text-lg 
              w-full lg:w-2/3 flex justify-start px-4 items-center py-1 mb-2"
              >
                {item.badge}
              </h2>
              <p className={twMerge("text-gray-950", "text-lg mb-2 px-4")}>
                {item.title}
              </p>
              <p className={twMerge("text-gray-950", "text-sm mb-2 px-4")}>
                {item.date}
              </p>
              <p className={twMerge("text-gray-950", "text-sm mb-4 px-4")}>
                {item.location}
              </p>
              <div className="text-sm  prose prose-sm dark:prose-invert px-4">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

const myInformation = [
  {
    id: 1,
    title: "Back Office Operations Coordinator",
    description: (
      <ul className="list-disc list-inside text-gray-800">
        <li className="mb-2">
          Delivered comprehensive training to new employees on operational
          processes and best practices to ensure a smooth onboarding experience.
        </li>
        <li className="mb-2">
          Conducted detailed audits of submitted work, ensuring accuracy and
          adherence to quality standards before submitting it to management.
        </li>
        <li className="mb-2">
          Maintained and updated attendance records, tracking employee presence
          and absences to ensure accurate payroll processing.
        </li>
        <li className="mb-2">
          Addressed and resolved process-related issues and employee concerns
          promptly, fostering a productive and harmonious work environment.
        </li>
        <li className="mb-2">
          Provided essential advice and communicated off-day information to team
          members, ensuring clarity and effective coordination.
        </li>
        <li className="mb-2">
          Identified areas for improvement within the team and proposed
          actionable solutions to enhance efficiency and productivity.
        </li>
        <li className="mb-2">
          Kept the team informed about any changes in processes or procedures,
          ensuring seamless adaptation and compliance.
        </li>
        <li className="mb-2">
          Explaining policy implementation to fellow team members.
        </li>
        <li className="mb-2">
          Handling interpersonal conflicts by mediating conflicts between
          employees in a way that promotes collaboration and respect.
        </li>
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
      <ul className="list-disc list-inside text-gray-800">
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
      <ul className="list-disc list-inside text-gray-800">
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
      <ul className="list-disc list-inside text-gray-800">
        <li>Bengali</li>
        <li>English</li>
        <li>Mathematics</li>
        <li>Physical science</li>
        <li>Life Science</li>
        <li>Chemistry</li>
        <li>History</li>
        <li>Geography</li>
        <li>Computer Application / 9th to 12th standerd</li>
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
      <ul className="list-disc list-inside text-gray-800">
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
      <ul className="list-disc list-inside text-gray-800">
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

export default memo(AboutMeInfo);
