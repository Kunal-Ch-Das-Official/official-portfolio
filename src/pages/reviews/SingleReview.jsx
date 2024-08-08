import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import envConfig from "../../../envConfig";
import { FaStar } from "react-icons/fa";
import SingleReviewSkeleton from "../../utils/skeleton/SingleReviewSkeleton";
import { FaArrowCircleLeft } from "react-icons/fa";
import getReviews from "../../../apis/GET/getReviews";

const SingleReview = () => {
  const [apiResponse, setApiResponse] = useState({});
  const [ratings, setRatings] = useState([]);
  const { id } = useParams();
  const [displaySkeleton, setDisplaySkeleton] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getReviews(id);
      setApiResponse(res.data);
      setRatings(res.data.rating);
      setDisplaySkeleton(res ? false : true);
    })();
  }, []);

  return (
    <div className="w-5/6 float-right">
      <div className="w-4/5 mx-auto mt-14">
        <Link to={"/dashboard/review-manage"}>
          <FaArrowCircleLeft className="text-3xl mb-4 cursor-pointer" />
        </Link>
        <div className=" max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
          {displaySkeleton === true ? (
            <SingleReviewSkeleton />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
