import React from "react";

interface CommonHeadingProps {
  headingOne: string | null;
  headingTwo: string | null;
  headingThree: string | null;
  paragraph: string | null;
}
const CommonHeading: React.FC<CommonHeadingProps> = ({
  headingOne,
  headingTwo,
  headingThree,
  paragraph,
}) => {
  return (
    <section className="text-center my-8">
      <h2 className="text-xl font-semibold inline-flex items-center gap-2">
        <span id="less_dark" className="text-orange-500">
          {headingOne}
        </span>
        <span id="medium_dark" className="text-orange-400">
          {headingTwo}
        </span>
        <span id="full_dark" className="text-orange-200">
          {headingThree}
        </span>
      </h2>
      <div className="flex justify-center mt-1">
        <p className="text-gray-100 text-sm text-center w-[70%]">{paragraph}</p>
      </div>
    </section>
  );
};

export default CommonHeading;
