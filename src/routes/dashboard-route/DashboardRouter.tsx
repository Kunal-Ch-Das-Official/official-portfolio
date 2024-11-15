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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getDashboardData = async () => {
      setLoading(true);
      try {
        const authToken = localStorage.getItem("auth-token");
        const visitorToken = sessionStorage.getItem("visitor-token");
        const token = authToken || visitorToken;

        const response = await axios.get(envConfig.dashboardUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTotalData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Something went wrong, please try again later.");
      } finally {
        setLoading(false);
      }
    };
    getDashboardData();
  }, []);

  const renderLastUpdate = (index: number) => {
    const lastUpdateData = totalData?.[index]?.response;
    const lastUpdate = lastUpdateData
      ? new Date(
          lastUpdateData[lastUpdateData.length - 1]?.updatedAt
        ).toLocaleDateString()
      : "N/A";
    return <span className="text-red-600 font-bold">{lastUpdate}</span>;
  };

  return (
    <main className="text-center min-h-screen mx-auto w-full px-0 md:w-[80%] bg-white lg:pt-6 z-[-10000]">
      {loading && <LoadingSpinner />}
      {error && <p className="text-red-600">{error}</p>}

      <section id="all_content_box">
        <div className="px-6 pt-[6.8rem] sm:px-16 md:px-8 lg:px-2 2xl:px-20">
          <div
            className={`${cardStyle.cards} grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3`}
          >
            {totalData.map((item, index) => (
              <div
                className={`${cardStyle.card} border border-gray-50 shadow-xl`}
                key={index}
              >
                <div className="flex justify-between items-center p-2">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-gray-500">
                      {
                        [
                          "Total User",
                          "Total Article",
                          "Contact Applications",
                          "Total Projects",
                          "Resume Status",
                          "Total Feedbacks",
                        ][index]
                      }
                    </p>
                    {index === 4 && (
                      <p className="font-semibold text-accent-color">
                        {totalData?.[4]?.response.length === 1
                          ? "Available"
                          : "N/A"}
                      </p>
                    )}
                    <div className="mt-4 text-sm inline-flex items-center text-start">
                      <span className="text-green-700 font-bold text-center mr-2">
                        {index === 2 || index === 5
                          ? "Recent Entry"
                          : "Last Update"}
                      </span>
                      {renderLastUpdate(index)}
                    </div>

                    <div className="flex-row mt-2">
                      <Link
                        to={`/${
                          [
                            "all-registerd-users",
                            "manage-articles",
                            "manage-all-emails",
                            "manage-projects",
                            "manage-resume",
                            "manage-feedbacks",
                          ][index]
                        }`}
                        className="border border-yellow-300 shadow-lg mt-2 font-semibold text-black rounded-md bg-yellow-300 cursor-pointer hover:bg-yellow-500 w-[80px] px-3 mr-4 py-auto text-sm"
                      >
                        Manage
                      </Link>
                      {(index === 1 || index === 3 || index === 4) && (
                        <Link
                          to={`/${
                            ["post-article", "upload-project", "upload-resume"][
                              index - 1
                            ]
                          }`}
                          className="border border-green-300 bg-green-300 shadow-lg mt-2 font-semibold text-black rounded-md cursor-pointer hover:bg-green-500 px-3 w-[80px] item-center text-sm"
                        >
                          {index === 1 ? "Post" : "Upload"}
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="bg-primary-color p-2 md:p-1 xl:p-4 rounded-md">
                    <p className="flex justify-center mb-2">
                      {
                        [
                          <FaUsersBetweenLines />,
                          <RiArticleFill />,
                          <MdContactMail />,
                          <FaFileCode />,
                          <SiReaddotcv />,
                          <MdReviews />,
                        ][index]
                      }
                    </p>
                    <h3 className="mt-1 text-2xl text-gray-700 font-bold flex item-center">
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
            <thead className="bg-gray-50">
              <tr>
                {[
                  "Requested user",
                  "Status",
                  "Contact number",
                  "Received date",
                  "Message",
                  "Actions",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50"
                  >
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      {header}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {totalData?.[2]?.response.length === 0 ? (
                <tr>
                  <td
                    className="p-6 font-semibold text-base text-accent-color"
                    colSpan={6}
                  >
                    Inbox is empty.
                  </td>
                </tr>
              ) : (
                totalData?.[2]?.response.map((enquiry, index) => (
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default memo(DashboardRouter);
