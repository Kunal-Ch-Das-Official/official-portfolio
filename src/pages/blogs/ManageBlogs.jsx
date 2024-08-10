import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
import getBlogs from "../../../apis/GET/getBlogs";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";

const ManageBlogs = () => {
  const [apiResponse, setApiResponse] = useState([]);
  const [componentMount, setComponentMount] = useState(false);

  useEffect(() => {
    (async () => {
      setComponentMount(true);
      const res = await getBlogs();
      setApiResponse(res.data);
      setComponentMount(res && false);
    })();
  }, []);

  return (
    <main>
      {componentMount === true ? (
        <ComponentSpinner />
      ) : (
        <div className="w-5/6 float-right">
          <div className="w-4/5 mx-auto mt-14">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">
                Blog Article Management Dashboard
              </h2>
              <p className="text-md font-semibold text-gray-500 mb-12">
                Manage and oversee all article efficiently, and edit or delete,
                all current article
              </p>
            </div>
            {apiResponse.length === 0 ? (
              <h1 className="text-gray-600 text-center font-bold text-3xl mt-40">
                Articles Are Not Available!!
              </h1>
            ) : (
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
                                  <span className="text-md font-bold">
                                    Title
                                  </span>
                                </div>
                              </th>

                              <th
                                scope="col"
                                className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              ></th>

                              <th
                                scope="col"
                                className="relative py-3.5 pr-8 text-gray-800"
                              ></th>

                              <th
                                scope="col"
                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                              ></th>

                              <th
                                scope="col"
                                className="relative py-3.5 pr-32 text-gray-800"
                              >
                                Publisher
                              </th>

                              <th
                                scope="col"
                                className="relative py-3.5 pr-8 text-gray-800"
                              >
                                Actions
                              </th>
                            </tr>
                          </thead>
                          {apiResponse.map((blog) => (
                            <tbody
                              className="bg-white divide-y divide-gray-200"
                              key={blog._id}
                            >
                              <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                  <div className="inline-flex items-center gap-x-3 pl-6">
                                    <div className="flex items-center gap-x-2">
                                      <div>
                                        <h2 className="font-normal text-gray-800  ">
                                          {blog.blogTitle}
                                        </h2>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-12 py-4 text-md font-semibold"></td>
                                <td className="px-4 py-4 text-sm "></td>
                                <td className="px-4 py-4 text-sm "></td>
                                <td className="px-4 py-4 text-sm ">
                                  {blog.authorName}
                                </td>
                                <td className="px-4 py-4 inline-flex">
                                  <Link
                                    title="Edit"
                                    to={`/dashboard/blog-edit/${blog._id}`}
                                    className="px-2 mx-2 py-1 transition-colors duration-200 rounded-lg  hover:bg-black"
                                  >
                                    <FaUserEdit className="text-2xl text-green-600" />
                                  </Link>

                                  <Link
                                    title="Delete"
                                    to={`/dashboard/blog-delete/${blog._id}`}
                                    className="px-2 mx-4 py-1 rounded-lg hover:bg-black transition-colors duration-200"
                                  >
                                    <MdDeleteSweep className="text-2xl text-red-600" />
                                  </Link>

                                  <Link
                                    title="View"
                                    to={`/dashboard/blog-overview/${blog._id}`}
                                    className="px-2 py-1 transition-colors duration-200 rounded-lg 
                              hover:bg-black"
                                  >
                                    <MdVisibility className="text-2xl text-blue-600" />
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
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ManageBlogs;
