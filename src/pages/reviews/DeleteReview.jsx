import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import envConfig from '../../../envConfig';
import LoadingSpiner from '../../utils/loading-spinner/LoadingSpiner';
import ConfirmAlert from '../../utils/confirm-alert/ConfirmAlert';
import DeleteReviewSkeleton from '../../utils/skeleton/DeleteReviewSkeleton';
const DeleteReview = () => {

  const [apiResponse, setApiResponse] = useState({});
  const [ratings, setApiRatings] = useState([]);
  const { id } = useParams();
  const [loadingState, setLoadingState] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState(false);
  const navigate = useNavigate();
  const [displaySkeleton, setDisplaySkeleton] = useState(false);

  useEffect(() => {
    const getSingleReview = async () => {
      setDisplaySkeleton(true);
      try {
        await axios.get(`${envConfig.getReviewsApiUrl}/${id}`).then((res) => {
          setApiResponse(res.data);
          setApiRatings(res.data.rating);
          setDisplaySkeleton(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getSingleReview();
  }, [id]);


  const deleteReview = async () => {
    setLoadingState(true);
  try {
    await axios.delete(`${envConfig.deleteReviewApiUrl}/${id}`)
    .then(() => {
      setLoadingState(false);
      navigate('/dashboard/review-manage');
    })
  } catch (error) {
    console.error('Faild to deleting the data:', error);
  }
  }

  const confirmActionDelete = () => {
    setConfirmAlert(true);
  }
  const confirmActionNotDelete = () => {
    setConfirmAlert(false);
  }

  return (
    <div className="w-5/6 float-right">
      {loadingState === true && <LoadingSpiner />}
      {confirmAlert === true && <ConfirmAlert deleteHandler={deleteReview} notDeleteHandler={confirmActionNotDelete}/>}
    
    <div className="w-4/5 mx-auto mt-14">
    {displaySkeleton === true ? <DeleteReviewSkeleton /> : 
      <>
     
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
               
               {ratings.map((star, index) => <FaStar key={index}  className="text-xl text-yellow-600" />)}
            
          </div>
        </div>
      </div>
      <div className='text-center mt-5'>
        <button 
        onClick={confirmActionDelete}
        className='bg-red-600 hover:bg-red-900 text-white tracking-wide font-semibold text-sm py-3 px-6 rounded-xl mt-8'>Delete</button>
      </div>
      </>
}
    </div>

  </div>
  )
}

export default DeleteReview;