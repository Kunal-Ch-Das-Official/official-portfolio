import React from "react";

const SkillSet: React.FC = () => {
  const skillSet = [
    "html",
    "ejs",
    "css",
    "javascript",
    "bootstrap",
    "tailwind",
    "react.js",
    "redux",
    "next.js",
    "node.js",
    "express.js",
    "mongo.db",
    "postgress",
    "mysql",
    "git",
    "github",
    "cloudinary",
    "multer",
    "vps",
    "nginx",
  ];
  return (
    <section id="skills" data-aos="flip-left">
      <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-white">
        <span className="text-orange-700 mb-2">These </span>
        <span className="text-orange-500 mb-2"> Are All </span>
        <span className="text-orange-400 mb-2"> the Skills </span>I Have.
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-2 gap-x-2">
        {skillSet.map((skill, index) => (
          <span
            key={index}
            className="border  text-xs border-orange-500 px-2 text-center py-2 rounded-full blurBackground"
          >
            #{skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;
