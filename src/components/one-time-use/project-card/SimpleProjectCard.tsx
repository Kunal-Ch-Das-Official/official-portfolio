import React from "react";
import { Link } from "react-router-dom";

interface SimpleProjectCardProps {
  projectTitle: string;
  projectFirstviewSrc: string;
  projectType: string;
  projectDescription: string;
  overViewUrl: string;
}
const SimpleProjectCard: React.FC<SimpleProjectCardProps> = ({
  projectTitle,
  projectFirstviewSrc,
  projectType,
  projectDescription,
  overViewUrl,
}) => {
  return (
    <div className="block rounded-lg min-w-[250px] max-w-[600px] max-h-[400px]">
      <div>
        <img
          alt={`${projectTitle} image`}
          src={projectFirstviewSrc}
          className="h-44 w-full rounded-md object-cover"
        />
      </div>
      <div className="flex justify-between w-full">
        <div>
          <dd className="font-medium">{projectTitle}</dd>
        </div>
        <div>
          <dd className="font-medium flex justify-end min-w-24 capitalize">
            {projectType}
          </dd>
        </div>
      </div>
      <div className="text-gray-500">{projectDescription.slice(0, 100)}...</div>
      <Link
        aria-label="See Project"
        to={overViewUrl}
        className="text-blue-500 hover:underline"
      >
        See more
      </Link>
    </div>
  );
};

export default SimpleProjectCard;
