import React from "react";

import { ImBin } from "react-icons/im";
import { LuClipboardEdit } from "react-icons/lu";
import { VscPreview } from "react-icons/vsc";
import { Link } from "react-router-dom";

interface TableRowProps {
  title: string;
  authorName: string;
  addedIn: string;
  editedIn: string;
  previewLink: string;
  updateLink: string;
  removeLink: string;
  isSuperAdmin: boolean;
}
const BlogTableRow: React.FC<TableRowProps> = ({
  title,
  authorName,
  addedIn,
  editedIn,
  previewLink,
  updateLink,
  removeLink,
  isSuperAdmin,
}) => {
  return (
    <tbody>
      <tr>
        {/* Article title  */}
        <td className="p-4 border-b border-blue-gray-50 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {title}
              </p>
            </div>
          </div>
        </td>

        {/* Created At Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
            <span>{authorName}</span>
          </p>
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

        {/* Manage article  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-row gap-4">
            {/* Preview  */}
            <Link
              title="Preview"
              to={previewLink}
              className="text-xl text-yellow-700 hover:text-yellow-800 
              transform translate-1 hover:scale-110"
            >
              <VscPreview />
            </Link>
            {/* Update  */}
            <Link
              title="Update"
              to={updateLink}
              className="text-xl text-primary-button-background
  hover:text-primary-button-background-hover
   transform translate-1 hover:scale-110"
            >
              {" "}
              <LuClipboardEdit />
            </Link>
            {/* Remove  */}

            <div className="relative group">
              <p className="text-slate-800 font-mono font-bold cursor-pointer">
                <Link
                  title="Remove"
                  to={removeLink}
                  className={`text-lg text-red-500
  hover:text-red-700
   transform translate-1 hover:scale-110
   ${isSuperAdmin !== true && "pointer-events-none"} 
   `}
                >
                  <ImBin />
                </Link>
              </p>

              {isSuperAdmin !== true && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition duration-100 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-slate-800 w-max max-w-xs text-white rounded-lg px-4 py-4">
                    <p className="font-bold text-md mb-1">Hello there! 👋</p>
                    <p className="text-sm">Only Admin Can Remove This</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default BlogTableRow;
