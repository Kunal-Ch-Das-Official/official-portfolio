import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { LuClipboardEdit, LuExternalLink } from "react-icons/lu";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

interface TableRowProps {
  imageUrl: string;
  title: string;
  authorName: string;
  gitHubAccess: string;
  extarnalProjectUrl: string;
  addedIn: string;
  editedIn: string;
  previewLink: string;
  updateLink: string;
  removeLink: string;
}
const ProjectTableRow: React.FC<TableRowProps> = ({
  imageUrl,
  title,
  authorName,
  gitHubAccess,
  extarnalProjectUrl,
  addedIn,
  editedIn,
  previewLink,
  updateLink,
  removeLink,
}) => {
  return (
    <tbody>
      <tr>
        {/* Project name and owner  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex items-center gap-3">
            <img
              src={imageUrl}
              alt={`${imageUrl} Logo`}
              className="relative inline-block h-9 w-9 !rounded-full
           object-cover object-center"
            />
            <div className="flex flex-col">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {title}
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                <span className="text-graan-600 font-bold mr-1">Owner:</span>
                <span>{authorName}</span>
              </p>
            </div>
          </div>
        </td>
        {/* Access url  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-row gap-4">
            <a
              href={`https://${gitHubAccess}`}
              target="_blank"
              className="block font-sans text-sm antialiased font-normal
 leading-normal text-gray-600 transform translate-1 hover:scale-110"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href={`https://${extarnalProjectUrl}`}
              target="_blank"
              className="block font-sans text-sm antialiased font-normal
 leading-normal text-gray-600 transform translate-1 hover:scale-110"
            >
              <LuExternalLink className="text-xl" />
            </a>
          </div>
        </td>

        {/* Created At Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            <span className="text-green-600">
              {new Date(addedIn).toDateString()}
            </span>
          </p>
        </td>
        {/* Update At Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {addedIn === editedIn ? (
              <span className="text-green-600">Not yet</span>
            ) : (
              <span className="text-green-600">
                {new Date(editedIn).toDateString()}
              </span>
            )}
          </p>
        </td>

        {/* Manage Project  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-row gap-4">
            {/* Delete  */}
            <Link
              to={previewLink}
              className="text-xl text-yellow-700 hover:text-yellow-800 transform translate-1 hover:scale-110"
            >
              <VscPreview />
            </Link>
            {/* Update  */}
            <Link
              to={updateLink}
              className="text-xl text-primary-button-background
  hover:text-primary-button-background-hover
   transform translate-1 hover:scale-110"
            >
              {" "}
              <LuClipboardEdit />
            </Link>
            {/* Remove  */}
            <Link
              to={removeLink}
              className="text-lg text-red-500
  hover:text-red-700
   transform translate-1 hover:scale-110"
            >
              <ImBin />
            </Link>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ProjectTableRow;
