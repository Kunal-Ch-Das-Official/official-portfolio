import { memo, useEffect, useState } from "react";
import axios from "../../../axios/axios";
import envConfig from "../../../config/envConfig";
import LoadingSpinner from "../../utils/non-functional/loading-spinner/LoadingSpinner";
import cardStyle from "./CardStyle.module.css";
import CustomKnob from "./CustomKnob";
import { Link } from "react-router-dom";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { MdContactMail, MdReviews } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { FaFileCode } from "react-icons/fa";
import ContactEmailsTable from "../../components/single-use/table-component/ContactEmailsTable";

interface IRes {
  responseStatus: string;
  userName: string;
  contactEmail: string;
  contactNumber: string;
  createdAt: Date;
  message: string;
  _id: string;
  updatedAt: Date;
  date: Date;
}
interface ItotalData {
  response: IRes[];
}
const DashboardRouter = () => {
  const [totalData, setTotalData] = useState<ItotalData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        setLoading(true);
        const authToken = localStorage.getItem("auth-token");
        const visitorToken = sessionStorage.getItem("visitor-token");
        const token = authToken || visitorToken;

        const response = await axios.get(envConfig.dashboardUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response) {
          setTotalData(response.data);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.log(error);
        throw new Error("Something went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getDashboardData();
  }, []);

  const adminUserLastUpdate =
    totalData?.[0]?.response?.[totalData[0].response.length - 1];
  const articleLastUpdate =
    totalData?.[1]?.response?.[totalData[1].response.length - 1];
  const contactData =
    totalData?.[2]?.response?.[totalData[2].response.length - 1];
  const projectData =
    totalData?.[3]?.response?.[totalData[3].response.length - 1];
  const resumeData =
    totalData?.[4]?.response?.[totalData[4].response.length - 1];
  const reviewData =
    totalData?.[5]?.response?.[totalData[5].response.length - 1];
  if (!Array.isArray(totalData)) {
    Array.isArray(totalData);
  }
  return (
    <main
      className="text-center min-h-screen mx-auto w-full px-0 md:w-[80%]
    bg-white lg:pt-6 z-[-10000] "
    >
      {loading === true && <LoadingSpinner />}

      <section id="all_content_box">
        <div className="px-6  pt-[6.8rem] sm:px-16 md:px-8 lg:px-2 2xl:px-20">
          <div
            className={`${cardStyle.cards} grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3`}
          >
            {totalData &&
              totalData.map((item, index) => (
                <div
                  className={`${cardStyle.card} border border-gray-50 shadow-xl`}
                  key={index}
                >
                  <div className="flex justify-between items-center p-2">
                    <div className="flex flex-col">
                      <p className="text-lg font-bold text-gray-500">
                        {index === 0 && "Total User"}
                        {index === 1 && "Total Article"}
                        {index === 2 && "Contact Applications"}
                        {index === 3 && "Total Projects"}
                        {index === 4 && "Resume Status"}
                        {index === 5 && "Total Feedbacks"}
                      </p>

                      {index === 4 ? (
                        <>
                          {totalData?.[4].response.length === 1 ? (
                            <p className="font-semibold text-accent-color">
                              Available
                            </p>
                          ) : (
                            <p className="font-semibold text-red-600">N/A</p>
                          )}
                        </>
                      ) : (
                        <></>
                      )}
                      <div className="mt-4 text-sm inline-flex items-center text-start">
                        <span className="text-green-700 font-bold text-center mr-2">
                          {index === 2 || index === 5
                            ? "Recent Entry"
                            : "Last Update"}
                        </span>

                        <span className="text-red-600 font-bold">
                          {index === 0 && (
                            <>
                              {adminUserLastUpdate
                                ? new Date(
                                    adminUserLastUpdate?.updatedAt
                                  ).toLocaleDateString()
                                : "N/A"}
                            </>
                          )}
                          {index === 1 && (
                            <>
                              {articleLastUpdate
                                ? new Date(
                                    articleLastUpdate?.updatedAt
                                  ).toLocaleDateString()
                                : "N/A"}
                            </>
                          )}
                          {index === 2 && (
                            <>
                              {contactData
                                ? new Date(
                                    contactData?.updatedAt
                                  ).toLocaleDateString()
                                : "N/A"}
                            </>
                          )}
                          {index === 3 && (
                            <>
                              {projectData
                                ? new Date(
                                    projectData?.updatedAt
                                  ).toLocaleDateString()
                                : "N/A"}
                            </>
                          )}

                          {index === 4 && (
                            <>
                              {resumeData
                                ? new Date(
                                    resumeData?.updatedAt
                                  ).toLocaleDateString()
                                : "N/A"}
                            </>
                          )}

                          {index === 5 && (
                            <>
                              {reviewData
                                ? new Date(
                                    reviewData?.date
                                  ).toLocaleDateString()
                                : "N/A"}
                            </>
                          )}
                        </span>
                      </div>

                      <div className="flex-row mt-2">
                        <Link
                          to={`${
                            (index === 0 &&
                              "/admin-console/all-registerd-users") ||
                            (index === 1 && "/admin-console/manage-articles") ||
                            (index === 2 &&
                              "/admin-console/manage-all-emails") ||
                            (index === 3 && "/admin-console/manage-projects") ||
                            (index === 4 && "/admin-console/manage-resume") ||
                            (index === 5 && "/admin-console/manage-feedbacks")
                          }
                            `}
                          className={`border border-yellow-300 shadow-lg mt-2 font-semibold text-black rounded-md bg-yellow-300 cursor-pointer hover:bg-yellow-500 w-[80px] px-3 mr-4 py-auto text-sm`}
                        >
                          Manage
                        </Link>
                        <Link
                          to={`${
                            (index === 1 && "/admin-console/post-article") ||
                            (index === 3 && "/admin-console/upload-project") ||
                            (index === 4 && "/admin-console/upload-resume")
                          }
                            `}
                          className={`${
                            (index === 0 && "hidden") ||
                            (index === 2 && "hidden") ||
                            (index === 5 && "hidden")
                          } border border-green-300 bg-green-300 shadow-lg mt-2 font-semibold text-black rounded-md  cursor-pointer hover:bg-green-500 px-3 w-[80px] item-center text-sm`}
                        >
                          {index === 1 ? "Post" : "Upload"}
                        </Link>
                      </div>
                    </div>
                    <div
                      className={`bg-primary-color p-2 md:p-1 xl:p-4  rounded-md`}
                    >
                      <p className="flex justify-center mb-2 ">
                        {index === 0 && (
                          <FaUsersBetweenLines className="text-gray-700 text-4xl" />
                        )}
                        {index === 1 && (
                          <RiArticleFill className="text-gray-700 text-4xl" />
                        )}
                        {index === 2 && (
                          <MdContactMail className="text-gray-700 text-4xl" />
                        )}
                        {index === 3 && (
                          <FaFileCode className="text-gray-700 text-4xl" />
                        )}
                        {index === 4 && (
                          <SiReaddotcv className="text-gray-700 text-4xl" />
                        )}
                        {index === 5 && (
                          <MdReviews className="text-gray-700 text-4xl" />
                        )}
                      </p>
                      <h3
                        className={`mt-1 text-2xl text-gray-700 font-bold flex item-center`}
                      >
                        <CustomKnob
                          itemLength={item.response.length}
                          maxItems={index === 4 ? 1 : 50}
                          size={60}
                        />
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section id="contact_emails_box">
        <div className="p-6 px-0 overflow-scroll">
          <table className="w-full mt-4 text-left table-auto min-w-max">
            {/* Table heading  */}
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Requested user
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Status
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Contact number
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Recived date
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Message
                  </p>
                </th>
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Actions
                  </p>
                </th>
              </tr>
            </thead>
            {totalData?.[2]?.response.length === 0 ? (
              <tbody id="Error_message_contact_info_in_dashboard">
                <tr>
                  <td className="p-6 font-semibold text-base text-accent-color">
                    Inbox are empty.
                  </td>
                </tr>
              </tbody>
            ) : (
              <>
                {totalData?.[2]?.response.map((enquiry, index) => (
                  <ContactEmailsTable
                    key={index}
                    status={enquiry.responseStatus}
                    userName={enquiry.userName}
                    contactEmail={enquiry.contactEmail}
                    contactNumber={enquiry.contactNumber}
                    createdAt={enquiry.createdAt}
                    message={enquiry.message}
                    sendResponseLink={`/admin-console/compose-mail/${enquiry._id}`}
                    removeLink={`/admin-console/delete-mail/${enquiry._id}`}
                  />
                ))}
              </>
            )}
          </table>
        </div>
      </section>
    </main>
  );
};
export default memo(DashboardRouter);
