import React, { useState } from "react";
import bannerstyle from "./spinnerStyle.module.css";
import ownerImage from "../../../assets/images/Banner-Image.jpg";
import { FaBootstrap, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import TypeWritter from "../typewriter/Typewriter";
import Popup from "../../../utils/popup-shower/Popup";

interface IAboutMountUnmountObj {
  about: boolean;
  mongodb: boolean;
  reactjs: boolean;
  expressjs: boolean;
  tailwindcss: boolean;
  typescript: boolean;
  nodejs: boolean;
  javascript: boolean;
  bootstrap: boolean;
  github: boolean;
  nextjs: boolean;
}
const BannerSpinner: React.FC = () => {
  const [aboutMountUnmountObj, setAboutMountUnmountObj] =
    useState<IAboutMountUnmountObj>({
      about: false,
      mongodb: false,
      reactjs: false,
      expressjs: false,
      tailwindcss: false,
      typescript: false,
      nodejs: false,
      javascript: false,
      bootstrap: false,
      github: false,
      nextjs: false,
    });
  const texts: string[] = [
    "Welcome To My Portfolio",
    "I'm Kunal Chandra Das",
    "I'm a Mern Stack Developer",
    "I'm a Web Designer",
    "I'm A Tech Enthusiast",
    "Enjoy Your Stay",
  ];

  // Example function to toggle the value of a specific key in the state
  const mountUnmountHandler = (tech: keyof IAboutMountUnmountObj) => {
    setAboutMountUnmountObj((prevState) => ({
      ...prevState,
      [tech]: !prevState[tech],
    }));
  };

  const popupData = [
    {
      key: "about",
      title: "Kunal Chandra Das.",
      description:
        "I assist business owners and busy web developers in designing and developing creative websites that align with their vision and engage visitors effectively. My expertise ensures that each website not only meets aesthetic and functional requirements but also drives long-term user engagement and satisfaction. As a freelance web developer, I offer personalized solutions and dedicated support to bring your digital presence to life, tailored to your unique needs and goals.",
      logo: null,
      isVisible: aboutMountUnmountObj.about,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "mongodb",
      title: "Mongo DB.",
      description:
        "I am proficient in integrating and managing MongoDB databases with Node.js, leveraging Mongoose to handle database schemas and queries efficiently. My experience includes setting up database connections, defining and enforcing schema structures, and implementing CRUD operations within Node.js applications. I am skilled in utilizing Mongoose's features, such as middleware, validation, and population, to build secure, scalable, and maintainable data layers. My knowledge allows me to streamline database interactions, optimize data retrieval, and manage complex data relationships within Node.js environments. This expertise has strengthened my ability to develop robust backend solutions effectively.",
      logo: (
        <div className="bg-white p-1 rounded-full mr-1">
          <BiLogoMongodb className="text-3xl text-green-500" />
        </div>
      ),
      isVisible: aboutMountUnmountObj.mongodb,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "reactjs",
      title: "React.Js Library.",
      description:
        "I am skilled in using React.js to develop dynamic, interactive, and responsive user interfaces. My experience with React includes building single-page applications, managing component-based architecture, and efficiently handling state using both the Context API and third-party libraries. I am comfortable working with React hooks to manage component lifecycle events and optimize performance, ensuring seamless user experiences. My understanding of React's declarative nature allows me to write clean, maintainable code, and I am proficient in integrating RESTful APIs to manage data flow within applications. This expertise has empowered me to create scalable and user-friendly web applications.",
      logo: (
        <div className="bg-white p-1 rounded-full mr-1">
          <FaReact className="text-3xl text-blue-600" />
        </div>
      ),
      isVisible: aboutMountUnmountObj.reactjs,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "expressjs",
      title: "Express.Js Framework.",
      description:
        "I am proficient in using Express.js to build fast, scalable, and maintainable server-side applications. With a strong foundation in Express, I can create robust RESTful APIs, manage routing, and handle middleware to process HTTP requests efficiently. My experience includes implementing authentication, integrating middleware for enhanced security and error handling, and configuring custom middleware for caching, logging, and performance optimization. I am skilled in structuring Express applications for modularity and reusability, making it easier to maintain and scale projects. This knowledge allows me to deliver secure and responsive backend solutions that integrate smoothly with frontend applications.",
      logo: (
        <div className="bg-white p-1 rounded-full mr-1">
          <SiExpress className="text-3xl text-black" />
        </div>
      ),
      isVisible: aboutMountUnmountObj.expressjs,
      handleCloseEvent: mountUnmountHandler,
    },

    {
      key: "tailwindcss",
      title: "Tailwind Css Framework",
      description:
        "I am skilled in using Tailwind CSS to build responsive, modern, and highly customizable user interfaces. With Tailwind, I can efficiently design layouts and apply utility-first styling directly in HTML or JSX, allowing for rapid development and easy iteration. My experience includes configuring custom themes, leveraging Tailwind's responsive grid system, and using its extensive set of utilities to achieve pixel-perfect designs across devices. I am proficient in optimizing CSS by applying only the necessary styles, resulting in faster load times and better performance. This expertise enables me to build visually appealing, consistent, and scalable front-end designs that align with current UI/UX trends",
      logo: (
        <div className="bg-white p-1 rounded-full mr-1">
          <RiTailwindCssFill className="text-3xl text-blue-500" />
        </div>
      ),
      isVisible: aboutMountUnmountObj.tailwindcss,
      handleCloseEvent: mountUnmountHandler,
    },

    {
      key: "typescript",
      title: "TypeScript Language.",
      description:
        "I am proficient in using TypeScript to create reliable, scalable, and maintainable applications. With TypeScript, I can leverage static typing to catch errors early in development, which improves code quality and reduces runtime issues. My experience includes defining custom types, interfaces, and generics to create flexible yet strongly-typed structures, enhancing the readability and reliability of the codebase. I am skilled in integrating TypeScript into both front-end and back-end projects, allowing me to build type-safe applications that scale effectively. My knowledge of TypeScript’s advanced features, such as decorators and type inference, enables me to write efficient, modular, and reusable code.",
      logo: <BiLogoTypescript className="text-4xl text-blue-600" />,
      isVisible: aboutMountUnmountObj.typescript,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "nodejs",
      title: "Node js runtime.",
      description:
        "I am proficient in using Node.js to develop efficient, scalable, and high-performance server-side applications. With expertise in Node.js, I can handle asynchronous programming and manage non-blocking I/O operations to ensure optimized processing and responsiveness. My experience includes building RESTful APIs, managing data flow between servers and clients, and integrating various libraries and tools to extend functionality. I am well-versed in using Node’s module ecosystem to create reusable and modular code, and I have experience in connecting Node.js with databases and implementing secure authentication. This knowledge allows me to deliver robust backend solutions for web applications that scale with user demand.",
      logo: (
        <div className="bg-black p-1 rounded-full mr-1">
          <FaNodeJs className="text-3xl text-green-500" />
        </div>
      ),
      isVisible: aboutMountUnmountObj.nodejs,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "javascript",
      title: "Javascript language.",
      description:
        "I am proficient in JavaScript, with experience in creating dynamic, responsive, and interactive web applications. I am skilled in both ES6+ syntax and core JavaScript concepts, such as closures, promises, and asynchronous programming, which allow me to write clean, efficient, and maintainable code. My knowledge extends to DOM manipulation, event handling, and JSON data integration for seamless interactions within web applications. Additionally, I am familiar with object-oriented and functional programming paradigms, enabling me to structure applications in a modular and scalable way. This expertise helps me build engaging and user-friendly applications that meet modern web standards.",
      logo: <RiJavascriptFill className="text-4xl text-yellow-500" />,
      isVisible: aboutMountUnmountObj.javascript,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "bootstrap",
      title: "Bootstrap Css Framework.",
      description:
        "I am skilled in using Bootstrap to create responsive, mobile-first web interfaces with a clean and modern design. My experience includes working with Bootstrap’s grid system to build flexible layouts, utilizing its extensive library of components for rapid UI development, and customizing themes to align with brand requirements. I am proficient in using Bootstrap utilities to achieve consistent styling and spacing, ensuring that applications look polished across all screen sizes. Additionally, I understand how to override and extend Bootstrap’s default styles to create unique, visually appealing designs. This expertise enables me to build efficient, user-friendly, and visually cohesive web interfaces.",
      logo: <FaBootstrap className="text-4xl text-purple-600" />,
      isVisible: aboutMountUnmountObj.bootstrap,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "nextjs",
      title: "Next.JS Framework.",
      description:
        "I am skilled in using Next.js for building fast, scalable, and SEO-friendly client-side applications. My experience includes utilizing Next.js's file-based routing, optimizing static generation, and applying dynamic imports to enhance performance. I am proficient in creating React-based, component-driven architectures within Next.js, managing client-side state effectively, and leveraging Next.js's built-in CSS and image optimization features. Although I primarily work on the client-side of Next.js, this knowledge allows me to deliver responsive, interactive, and high-performing applications that take full advantage of Next.js's capabilities for front-end development.",
      logo: (
        <div className="bg-white p-1 rounded-full mr-1">
          <RiNextjsFill className="text-3xl text-black" />
        </div>
      ),
      isVisible: aboutMountUnmountObj.nextjs,
      handleCloseEvent: mountUnmountHandler,
    },
    {
      key: "github",
      title: "Github.",
      description:
        "I am proficient in using Git for version control and GitHub for collaborative development and repository management. With Git, I am skilled in managing project histories, branching strategies, and merging workflows to ensure organized and efficient code management. I use GitHub to host repositories, manage pull requests, and collaborate seamlessly with team members, enabling code reviews and issue tracking for streamlined development. My experience includes creating and managing branches, resolving merge conflicts, and leveraging GitHub’s features like Actions for continuous integration and deployment. This expertise allows me to maintain a clean codebase, track progress effectively, and work collaboratively on both personal and team projects.",
      logo: (
        <div className="bg-white p-1 rounded-full mr-1">
          <FaGithub className="text-3xl text-black" />
        </div>
      ),
      isVisible: aboutMountUnmountObj.github,
      handleCloseEvent: mountUnmountHandler,
    },
  ];

  return (
    <>
      {popupData.map((data, index) => (
        <Popup
          key={index}
          popupKey={data.key}
          handleCloseEvent={data.handleCloseEvent}
          isVisible={data.isVisible}
          title={data.title}
          description={data.description}
          logo={data.logo}
        />
      ))}

      <div className="relative h-full w-full flex items-center justify-center">
        <div
          className={`${bannerstyle.spinner} relative p-10
      rounded-full border-spacing-4 `}
        >
          {/* Mongo db  */}
          <button
            onClick={() => mountUnmountHandler("mongodb")}
            className={` ${bannerstyle.reverse_spinner}  profile_item 
            left-[60px] -top-[4px] absolute rounded-full bg-cover
         cursor-pointer p-[2px] active:scale-95 hover:scale-95
         transition-all duration-500 ${bannerstyle.tooltip_top}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
              w-[70px] bg-green-600
               text-white left-[120%] text-xs 
            
            `}
            >
              Mongodb
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all
           duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <BiLogoMongodb className="text-2xl text-green-600" />
            </span>
          </button>

          {/* React js  */}
          <button
            onClick={() => mountUnmountHandler("reactjs")}
            className={` ${bannerstyle.reverse_spinner} profile_item 
            right-[20px] -top-[-28px] 
            absolute 
            rounded-full bg-cover cursor-pointer
            ${bannerstyle.tooltip_top} p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-blue-600
               text-white left-[120%] text-xs
            
            `}
            >
              React js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all 
          duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaReact className="text-2xl text-blue-500" />
            </span>
          </button>

          {/* Express js  */}
          <button
            onClick={() => mountUnmountHandler("expressjs")}
            className={` ${bannerstyle.reverse_spinner} profile_item 
            -left-2 top-[62px] 
            absolute
         rounded-full bg-cover cursor-pointer p-[2px] active:scale-95
          hover:scale-95 transition-all duration-500 ${bannerstyle.tooltip_top}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-white
               text-gray-900 left-[120%] text-xs
            `}
            >
              Express js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all
           duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <SiExpress className="text-2xl text-white" />
            </span>
          </button>

          {/* Typescript  */}
          <button
            onClick={() => mountUnmountHandler("typescript")}
            className={`profile_item -right-4 top-24 absolute rounded-full bg-cover cursor-pointer 
        ${bannerstyle.tooltip_top} p-[2px] active:scale-95 hover:scale-95 transition-all duration-500
        ${bannerstyle.reverse_spinner}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-blue-600
               text-white left-[120%] text-xs
            
            `}
            >
              Typescript
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <BiLogoTypescript className="text-2xl text-blue-600" />
            </span>
          </button>

          {/* Github */}
          <button
            onClick={() => mountUnmountHandler("github")}
            className={` ${bannerstyle.reverse_spinner} profile_item ${bannerstyle.tooltip_top}
            -left-[16px] top-[9.5rem]
            absolute
         rounded-full bg-cover cursor-pointer p-[2px] active:scale-95
          hover:scale-95 transition-all duration-500`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-white
               text-gray-900 left-[120%] text-xs
               `}
            >
              Github
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all
           duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaGithub className="text-2xl text-white" />
            </span>
          </button>

          {/* Node js */}
          <button
            onClick={() => mountUnmountHandler("nodejs")}
            className={`profile_item -right-2 top-44 absolute rounded-full bg-cover cursor-pointer 
         p-[2px] active:scale-95 hover:scale-95 transition-all duration-500
        ${bannerstyle.reverse_spinner} ${bannerstyle.tooltip_top}`}
          >
            {" "}
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-green-600
               text-white left-[120%] text-xs`}
            >
              Node js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaNodeJs className="text-2xl text-green-600" />
            </span>
          </button>

          {/* Javascript  */}
          <button
            onClick={() => mountUnmountHandler("javascript")}
            className={`${bannerstyle.reverse_spinner}
                     profile_item bottom-4 -left-[-30px] ${bannerstyle.tooltip_top}
            absolute rounded-full bg-cover cursor-pointer
         p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} 
            w-[70px] bg-yellow-600
               text-white left-[120%] text-xs
            `}
            >
              Javascript
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all 
          duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <RiJavascriptFill className="text-2xl text-yellow-500" />
            </span>
          </button>
          {/* Tailwind css  */}
          <button
            onClick={() => mountUnmountHandler("tailwindcss")}
            className={`${bannerstyle.reverse_spinner} profile_item
             bottom-1 -right-[-48px] absolute rounded-full
         bg-cover cursor-pointer p-[2px] active:scale-95 hover:scale-95 
         transition-all duration-500 ${bannerstyle.tooltip_top}`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} 
             w-[70px] bg-blue-600 
               text-white left-[120%] text-xs
            
            `}
            >
              Tailwind
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px] transition-all 
          duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <RiTailwindCssFill className="text-2xl text-blue-500" />
            </span>
          </button>

          {/* Next js  */}
          <button
            onClick={() => mountUnmountHandler("nextjs")}
            className={`profile_item right-[48%] -bottom-4 absolute rounded-full bg-cover 
            ${bannerstyle.reverse_spinner} 
        cursor-pointer p-[2px] active:scale-95 hover:scale-95 transition-all 
        duration-500 ${bannerstyle.tooltip_top}`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} 
            w-[70px] bg-white
               text-black left-[120%] text-xs`}
            >
              Next js
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <RiNextjsFill className="text-2xl text-white" />
            </span>
          </button>
          {/* Bootstrap */}
          <button
            onClick={() => mountUnmountHandler("bootstrap")}
            className={`profile_item right-[34%] -top-4 absolute rounded-full bg-cover 
            ${bannerstyle.reverse_spinner}  
        cursor-pointer p-[2px] active:scale-95 hover:scale-95 transition-all 
        duration-500 ${bannerstyle.tooltip_top}`}
          >
            <span
              className={`${bannerstyle.tooltiptext_top} w-[70px] bg-purple-700
               text-white left-[120%] text-xs`}
            >
              Bootstrap
            </span>
            <span
              className="flex justify-center items-center w-[37px] h-[37px]
           transition-all duration-500 rounded-full z-[2] bg-gray-800 p-1"
            >
              <FaBootstrap className="text-2xl text-purple-500" />
            </span>
          </button>

          {/* Fake section  */}
          <button className="profile_item w-[200px] h-[200px]"></button>
        </div>

        {/* Main profile picture  */}
        <button
          onClick={() => mountUnmountHandler("about")}
          className={`${bannerstyle.tooltip_top} profile_picture w-[200px] h-[200px] p-1 rounded-full
          cursor-pointer transition-all duration-500 absolute`}
        >
          <span
            className={`${bannerstyle.tooltiptext_top} w-[120px] left-[50%] bg-[#9d1112]
               text-white font-normal text-sm`}
          >
            About Me
          </span>
          <div
            className="w-full h-full flex items-center justify-center p-2 rounded-full
           active:scale-95 hover:scale-95 object-cover transition-all duration-500"
          >
            <img
              src={ownerImage}
              alt="kunal chandra das image"
              className={`${bannerstyle.imageStyle} rounded-full z-0`}
            />
          </div>
        </button>

        {/* Typewriter text  */}
        <h1
          className="text-lg md:text-xl pt-6 text-center absolute top-80
        justify-center lg:text-2xl mb-4 text-white "
        >
          <p className="text-center">Hello,</p>
          <p className="text-orange-600 ml-2 text-center">
            <TypeWritter texts={texts} />
          </p>
        </h1>
      </div>
    </>
  );
};

export default BannerSpinner;
