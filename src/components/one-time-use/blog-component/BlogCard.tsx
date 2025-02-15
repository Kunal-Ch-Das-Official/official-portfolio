import React from "react";
import RouterLink from "../../../utils/buttons/RouterLink";

interface BlogCardProps {
  imageUrl: string;
  posedIn: Date;
  title: string;
  writerName: string;
  briefDescription: string;
  readArticleLink: string;
}
const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  posedIn,
  title,
  writerName,
  briefDescription,
  readArticleLink,
}) => {
  return (
    <div className="flex flex-col justify-centerw-full my-8">
      <div
        className=" shadow-lg p-3 flex flex-col md:flex-row w-full
        border border-white bg-white"
      >
        <div className="flex justify-center items-center">
          <img
            src={imageUrl}
            alt={`${title} image`}
            className="rounded-xl  md:w-[200px] flex items-center w-full h-[200px]"
          />
        </div>
        <div className="w-full bg-white flex flex-col p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium block text-center">
              <span className="text-orange-700">Posted In:</span>{" "}
              <span>{new Date(posedIn).toLocaleDateString()}</span>
            </p>
          </div>
          <h3 className="text-gray-700 md:text-xl text-xl font-semibold">
            {title.length > 100 ? `${title.slice(0, 100)}...` : title}
          </h3>
          <p className="md:text-lg text-gray-800 text-base">{writerName}</p>
          <p className="md:text-lg text-gray-500 text-base pb-2">
            {briefDescription.length > 300
              ? `${briefDescription.slice(0, 250)}...`
              : briefDescription}
            ....
          </p>
          <p className="text-xl font-black">
            <RouterLink linkText="Read Article" linkTo={readArticleLink} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
