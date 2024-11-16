import React from "react";

interface SectionHeadingProps {
  darkTitle: string;
  semiDarkTitle: string;
  lightTitle: string;
  subHeading: string | undefined;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  darkTitle,
  semiDarkTitle,
  lightTitle,
  subHeading,
}) => {
  return (
    <main className="flex flex-col flex-wrap text-center my-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        <span className="text-orange-700 mb-2">{darkTitle} </span>
        <span className="text-orange-500 mb-2"> {semiDarkTitle} </span>
        <span className="text-orange-300 mb-2"> {lightTitle} </span>
      </h2>
      <p className="mt-4 md:w-10/12 w-full text-xs sm:text-sm md:text-md lg:text-lg text-gray-300 mx-auto ">
        {" "}
        {subHeading}{" "}
      </p>
    </main>
  );
};

export default SectionHeading;
