import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import envConfig from '../../../envConfig';
import LoadingSpiner from '../../utils/loading-spinner/LoadingSpiner';


const EditReview = () => {
  const { id } = useParams();
  const [newUserName, setNewUserName] = useState('');
  const [newReviewContent, setNewReviewContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing data for the review
    const fetchReviewData = async () => {
      try {
        const response = await axios.get(`${envConfig.getReviewApiUrl}/${id}`);
        const review = response.data;
        setNewUserName(review.userName);
        setNewReviewContent(review.reviewContent);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviewData();
  }, [id]);

  const handleOnSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const updatedData = {
      userName: newUserName,
      reviewContent: newReviewContent,
    };

    try {
      const response = await axios.patch(`${envConfig.editReviewApiUrl}/${id}`, updatedData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
     
      setLoading(false);
      navigate('/dashboard/review-manage');
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="w-5/6 float-right">
      {loading && <LoadingSpiner />}
      <div className="w-4/5 mx-auto mt-14">
        <form onSubmit={handleOnSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Change User Review</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Change User Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(event) => setNewUserName(event.target.value)}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Change User Name"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="review-content"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Change Review
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="review-content"
                      id="review-content"
                      onChange={(event) => setNewReviewContent(event.target.value)}
                      rows="3"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Change Review"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
