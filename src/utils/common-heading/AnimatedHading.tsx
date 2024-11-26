import React from "react";
import headingStyle from "./headingStyle.module.css";
interface CommonHeadingProps {
  headingText: string | null;
  paragraph: string | null;
}
const AnimatedHading: React.FC<CommonHeadingProps> = ({
  headingText,
  paragraph,
}) => {
  return (
    /* From Uiverse.io by neerajbaniwal */

    <section className="text-center inline-flex items-center w-full">
      <h2
        className={`text-xl md:text-xl lg:text-2xl font-semibold flex flex-row  ${headingStyle.btn_shine}`}
      >
        {headingText}
      </h2>
      <div className="flex justify-center mt-1">
        <p className="text-gray-100 text-sm text-center w-[70%]">{paragraph}</p>
      </div>
    </section>
  );
};

export default AnimatedHading;
