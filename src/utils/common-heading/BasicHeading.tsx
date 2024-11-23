import React from "react";
interface SectionHeadingProps {
  mainHeading: string;
  subHeading: string | undefined;
}
const BasicHeading: React.FC<SectionHeadingProps> = ({
  mainHeading,
  subHeading,
}) => {
  return (
    <section className="pt-14 pb-6">
      <h1 className="text-center text-xl font-semibold mb-2">{mainHeading}</h1>
      <p className="text-center px-0  md:text-base text-sm md:px-20">
        {subHeading}
      </p>
    </section>
  );
};

export default BasicHeading;
