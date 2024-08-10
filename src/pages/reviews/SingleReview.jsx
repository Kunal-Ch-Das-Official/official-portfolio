import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import getReviews from "../../../apis/GET/getReviews";
import ComponentSpinner from "../../utils/component-loading/ComponentSpinner";

const SingleReview = () => {
  const [apiResponse, setApiResponse] = useState({});
  const [ratings, setRatings] = useState([]);
  const { id } = useParams();
  const [componentMount, setComponentMount] = useState(false);

  useEffect(() => {
    (async () => {
      setComponentMount(true);
      const res = await getReviews(id);
      setComponentMount(res && false);
      setApiResponse(res.data);
      setRatings(res.data.rating);
    })();
  }, []);

  return (
    <main>
      {componentMount === true ? (
        <ComponentSpinner />
      ) : (
        <div className="w-5/6 float-right">
          <div className="text-center mt-12 ">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">
              You Got A New Review From{" "}
              <span className="text-red-300">{apiResponse.userName}</span>
            </h2>
          </div>
          <div className="w-4/5 mx-auto ">
            <Link to={"/dashboard/review-manage"}>
              <FaArrowCircleLeft className="text-3xl mb-4 cursor-pointer" />
            </Link>
            <div className=" max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
              <div className="mt-6 text-center">
                <div>
                  <h4 className="text-lg font-extrabold text-gray-800">
                    {apiResponse.userName}
                  </h4>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {apiResponse.reviewContent}
                  </p>
                </div>

                <div className="flex justify-center space-x-1 mt-4">
                  {ratings.map((star, index) => (
                    <FaStar key={index} className="text-xl text-yellow-600" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default SingleReview;
