import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import envConfig from '../../../envConfig';
import LoadingSpiner from '../../utils/loading-spinner/LoadingSpiner';


const EditResume = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef();
  const [newResume, setNewResume] = useState(null);
  const [getPrevResume, setPrevResume] = useState(null);
  const [fileName, setFileName] = useState("No chosen file");
  const [lodingState, setLoadingState] = useState(false);


  // Get Previous Data
  useEffect(() => {
    const getPrevResumeData = async () => {
      try {
        const res = await axios.get(`${envConfig.getResumeApiUrl}/${id}`);
        setPrevResume(res.data.resume);
      } catch (error) {
        console.error('Error fetching previous resume:', error);
      }
    };
    getPrevResumeData();
  }, [id]);

//   File Change Handle 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setNewResume(file);
    setFileName(file ? file.name : "No chosen file");
  };

//   Handle Update 
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoadingState(true);


    if (!newResume) {
      console.error("No file selected for upload.");
      return;
    }

    const formData = new FormData();
    formData.append('resume', newResume);

    try {
      const res = await axios.put(`${envConfig.editResumeApiUrl}/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoadingState(false);
      navigate('/dashboard/resume-manage');
    } catch (error) {
      console.error('Error uploading the file:', error);

    }
    formRef.current.reset();
  };



  return (
    <div className='w-5/6 float-right'>
         {lodingState === true && <LoadingSpiner />}

      <div className="w-full bg-blue-100">
        <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 text-white min-h-[300px] flex items-center justify-center text-center">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Update Resume From Here
          </h4>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto relative bg-gray-50 border-2 border-gray-300 border-dashed rounded-md bottom-28"
        >
          <div className="p-4 flex flex-col items-center justify-center text-center cursor-pointer">
            <FaCloudUploadAlt className="text-7xl my-4 fill-gray-600 inline-block" />
            <p className="mt-4 text-semibold text-gray-500">
              Only image format files can be supported
            </p>
            <div className="flex flex-col justify-center">
              <label
                htmlFor="FileInput"
                className="text-blue-600 text-lg flex flex-col py-2 px-12 my-4 font-bold shadow-md rounded-lg"
              >
                Choose File
                <input
                  type="file"
                  onChange={handleFileChange}
                  id="FileInput"
                  className="hidden"
                />
              </label>
              <p className="text-green-600 font-semibold"> {fileName} </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 mb-8">
            <button
              type="submit"
              className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              <FaEdit className="mr-2 text-xl text-white" />
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditResume;
