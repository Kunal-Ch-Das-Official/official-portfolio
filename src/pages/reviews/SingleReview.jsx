import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import envConfig from "../../../envConfig";
import { FaStar } from "react-icons/fa";
const SingleReview = () => {
  const [apiResponse, setApiResponse] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getSingleReview = async () => {
      try {
        await axios.get(`${envConfig.getReviewsApiUrl}/${id}`).then((res) => {
          setApiResponse(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSingleReview();
  }, []);





  return (
    <div className="w-5/6 float-right">
      <div className="w-4/5 mx-auto mt-14">
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
                 <FaStar  className="text-xl text-yellow-600" />
                 <FaStar  className="text-xl text-yellow-600" />
                 <FaStar  className="text-xl text-yellow-600" />
                 <FaStar  className="text-xl text-yellow-600" />
                 <FaStar  className="text-xl text-yellow-600" />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
