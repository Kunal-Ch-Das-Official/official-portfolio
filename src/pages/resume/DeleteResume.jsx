import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdDeleteSweep } from "react-icons/md";
import envConfig from '../../../envConfig';
import LoadingSpiner from '../../utils/loading-spinner/LoadingSpiner';
import ConfirmAlert from '../../utils/confirm-alert/ConfirmAlert';

const DeleteResume = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [theResume, setTheResume] = useState(null);
    const [lodingState, setLoadingState] = useState(false);
    const [confirmAlert, setConfirmAlert] = useState(false);

    useEffect(() => {
        const getPrevResumeData = async () => {
          try {
            const res = await axios.get(`${envConfig.getResumeApiUrl}/${id}`);
            setTheResume(res.data.resume);
          } catch (error) {
            console.error('Error fetching previous resume:', error);
          }
        };
        getPrevResumeData();
      }, [id]);

  // Delete File Function
  const handleDelete = async () => {
    setLoadingState(true);
    try {
      await axios.delete(`${envConfig.deleteResumeApiUrl}/${id}`);
      setLoadingState(false);
      navigate('/dashboard/resume-manage');
    } catch (error) {
      console.error('Error deleting the file:', error);
    }
  };

  const confirmActionDelete = () => {
    setConfirmAlert(true);
  }
  const confirmActionNotDelete = () => {
    setConfirmAlert(false);
  }
  return (
        <div className="flex flex-col justify-center items-center my-40">
            {lodingState === true && <LoadingSpiner />}
            {confirmAlert === true && <ConfirmAlert deleteHandler={handleDelete} notDeleteHandler={confirmActionNotDelete}/>}
      {theResume ? 

      <div className="card card-side bg-base-100 grid grid-cols-1 mx-auto shadow-xl w-2/4 ml-[450px]">
        <div className='text-center font-bold text-4xl text-red-500 my-12'>Delete This Resume From Here</div><hr className='mb-4'/>
        <div className='mx-auto'>
          <img
            src={theResume}
            alt="resume"
            width={500}
            height={500}
          />
        </div>
        <hr className='mt-4 '/>
        <div className='flex justify-center my-12'>
        <button
             onClick={confirmActionDelete}
              className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-red-600 hover:bg-red-900 active:bg-red-600"
            >
              <span className="border-r border-white pr-3">Delete</span>
              <MdDeleteSweep className="text-white text-2xl ml-3" />
            </button>
        </div>
      </div>
      : <h1 className="text-center my-auto text-3xl font-bold pl-36 text-gray-500 ">No resume found please upload a resume first 404</h1>
}
    </div>
  )
}

export default DeleteResume;