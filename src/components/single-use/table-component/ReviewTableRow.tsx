import React from "react";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";

interface TableRowProps {
  userName: string;
  organization: string;
  reviewContent: string;
  rating: [number];
  date: Date;
  removeLink: string;
}
const ReviewTableRow: React.FC<TableRowProps> = ({
  userName,
  organization,
  reviewContent,
  rating,
  date,
  removeLink,
}) => {
  return (
    <tbody>
      <tr>
        {/* Article title  */}
        <td className="p-4 border-b border-blue-gray-50 items-start">
          <div className="flex items-start gap-3">
            <div className="flex flex-col">
              <p
                className="block font-sans text-sm antialiased font-normal leading-normal
               text-blue-gray-900"
              >
                {userName}
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {organization}
              </p>
            </div>
          </div>
        </td>

        {/* Review content  */}
        <td className="p-4 border-b border-blue-gray-50 max-w-sm">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
            <span>{reviewContent}</span>
          </p>
        </td>
        {/* Created At Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            <span className="text-green-600">
              {new Date(date).toDateString()}
            </span>
          </p>
        </td>
        {/* Update At Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            {rating && rating.map((rating) => <span key={rating}>⭐</span>)}
          </p>
        </td>

        {/* Manage article  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="flex flex-row gap-4">
            {/* Remove  */}
            <Link
              title="Remove"
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

export default ReviewTableRow;
