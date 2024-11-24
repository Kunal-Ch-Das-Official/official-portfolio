import React from "react";

interface BlogBannerProps {
  bannerBackgroundImg: string;
  headingFirst: string;
  UniqueHeading: string;
  headingLast: string;
  subHeading: string;
}

const BlogBanner: React.FC<BlogBannerProps> = ({
  bannerBackgroundImg,
  headingFirst,
  UniqueHeading,
  headingLast,
  subHeading,
}) => {
  return (
    <section className="relative isolate">
      <img
        src={bannerBackgroundImg}
        width={500}
        height={500}
        loading="eager"
        alt={`${UniqueHeading} Background image`}
        className="absolute min-h-full inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="extraBlurBackground relative overflow-hidden py-24 sm:py-32 lg:py-40">
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10
           sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr 
          from-[#ffc65c] to-[#ff8e0e] opacity-20"
          ></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex justify-center item-center ">
          <div className="mx-auto max-w-full lg:mx-0 ">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold 
            tracking-tight text-gray-300 sm:text-3xl "
            >
              {" "}
              {headingFirst}
              <span className="text-orange-500 mx-2">{UniqueHeading}</span>
              {headingLast}
            </h1>
            <p className="mt-6 text-sm md:text-base lg:text-base leading-2 text-gray-200 dark:text-gray-400">
              {subHeading}
            </p>
          </div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl
           sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694]
           to-[#776fff] opacity-20"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default BlogBanner;
