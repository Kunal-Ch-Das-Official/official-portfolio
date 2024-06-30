import axios from "axios";
import React, { useEffect, useState } from "react";
import envConfig from "../../../envConfig";
import { Link } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";


const ManageEmails = () => {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    const getAllEmails = async () => {
      try {
        await axios.get(envConfig.getAllEmailsApiUrl).then((res) => {
          setApiResponse(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getAllEmails();
  }, []);




  return (
    <div className="w-5/6 float-right">
      <div className="w-4/5 mx-auto mt-14">
        <section className="container px-4 mx-auto">
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 ">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-left rtl:text-right"
                        >
                          <div className="flex items-center gap-x-3 pl-6">
                            <span className="text-md font-bold">User Name</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        ></th>

                        <th
                          scope="col"
                          className="relative py-3.5 pr-8 text-gray-800"
                        >
                          Recived At
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                        ></th>

                        <th
                          scope="col"
                          className="relative py-3.5 pr-8 text-gray-800"
                        >
                          Email From
                        </th>

                        <th
                          scope="col"
                          className="relative py-3.5 pr-8 text-gray-800"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    {apiResponse.map((email) => (
                      <tbody
                        className="bg-white divide-y divide-gray-200"
                        key={email._id}
                      >
                        <tr>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3 pl-6">
                              <div className="flex items-center gap-x-2">
                                <div>
                                  <h2 className="font-normal text-gray-800  ">
                                    {email.userName}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-12 py-4 text-md font-semibold"></td>
                          <td className="px-4 py-4 text-sm ">
                            {email.createdAt}
                          </td>
                          <td className="px-4 py-4 text-sm "></td>
                          <td className="px-4 py-4 text-sm ">
                            {email.contactEmail}
                          </td>
                          <td className="px-4 py-4 inline-flex">
                            
                            <Link
                              to={`/dashboard/email/${email._id}`}
                              className="px-2 mx-4 py-1 rounded-lg hover:bg-black transition-colors duration-200"
                            >
                              <TbMailOpenedFilled className="text-2xl text-green-600" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManageEmails;
