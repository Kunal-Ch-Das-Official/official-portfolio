import React from "react";
import { MdPersonRemoveAlt1 } from "react-icons/md";
import { Link } from "react-router-dom";

interface TableRowProps {
  adminUserName: string;
  adminUserEmail: string;
  createdAt: Date;
  updatedAt: Date;
  deactivateLink: string;
}
const UserAccountTableRow: React.FC<TableRowProps> = ({
  adminUserName,
  adminUserEmail,
  createdAt,
  updatedAt,
  deactivateLink,
}) => {
  return (
    <tbody>
      <tr>
        {/* Article title  */}
        <td className="p-4 border-b border-blue-gray-50 items-start align-baseline">
          <div className="flex items-start gap-3">
            <div className="flex flex-col">
              <p
                className="block font-sans text-sm antialiased font-normal leading-normal
               text-blue-gray-900"
              >
                {adminUserEmail}
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {adminUserName}
              </p>
            </div>
          </div>
        </td>

        {/* Phone number Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
            <span className="text-green-800">
              {" "}
              {new Date(createdAt).toDateString()}
            </span>
          </p>
        </td>
        {/* Created At Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            <span className="text-green-600">
              {createdAt === updatedAt ? (
                "Not yet"
              ) : (
                <p>{new Date(createdAt).toDateString()}</p>
              )}
            </span>
          </p>
        </td>

        {/* Manage article  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="inline-flex items-center justify-center">
            {/* Remove  */}
            <Link
              title="Deactivate"
              to={deactivateLink}
              className="text-xs  px-3 py-1 rounded-lg bg-red-500 shadow-lg mx-auto
  hover:bg-red-600 text-white
   transform translate-1 hover:scale-110 inline-flex items-center gap-2"
            >
              Deactivate
              <MdPersonRemoveAlt1 />
            </Link>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default UserAccountTableRow;
