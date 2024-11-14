import React from "react";
import { BiMailSend } from "react-icons/bi";
import { GrSend } from "react-icons/gr";
import { ImBin } from "react-icons/im";
import { MdDone, MdOutgoingMail } from "react-icons/md";
import { Link } from "react-router-dom";

interface TableRowProps {
  userName: string;
  contactEmail: string;
  contactNumber: string;
  createdAt: Date;
  message: string;
  sendResponseLink: string;
  removeLink: string;
  status: string;
}
const ContactEmailsTable: React.FC<TableRowProps> = ({
  userName,
  contactEmail,
  contactNumber,
  createdAt,
  message,
  sendResponseLink,
  removeLink,
  status,
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
                {userName}
              </p>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                {contactEmail}
              </p>
            </div>
          </div>
        </td>

        {/* Status  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="block font-sans text-sm antialiased font-normal leading-normal opacity-70">
            <p
              className={` ${
                status == "respond"
                  ? "border-green-800 bg-green-100 text-green-900"
                  : "border-yellow-800 bg-yellow-100 text-yellow-900"
              }
                border rounded-full flex flex-row items-center h-5 gap-[0.15rem]
                 w-[5.5rem] justify-center text-sm font-semibold `}
            >
              <span>{status}</span>
              {status == "respond" ? (
                <GrSend className="mt-[0.20rem]" />
              ) : (
                <BiMailSend className="mt-[0.20rem]" />
              )}
            </p>
          </div>
        </td>

        {/* Phone number Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
            <span>{contactNumber}</span>
          </p>
        </td>
        {/* Created At Column  */}
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            <span className="text-green-600">
              {new Date(createdAt).toDateString()}
            </span>
          </p>
        </td>

        <td className="p-4 border-b border-blue-gray-50 max-w-sm ">
          <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
            <span>{message}</span>
          </p>
        </td>

        {/* Manage article  */}
        <td className="p-4 border-b border-blue-gray-50">
          <div className="inline-flex items-center gap-4">
            {/* Send response to email  */}
            {status == "respond" ? (
              <MdDone className="text-xl" />
            ) : (
              <Link
                title="Send Response"
                to={sendResponseLink}
                className="text-lg text-green-500
  hover:text-yellow-500
   transform translate-1 hover:scale-110"
              >
                <MdOutgoingMail className="text-2xl" />
              </Link>
            )}
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

export default ContactEmailsTable;
