import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
const SendReview = () => {
  return (
    <main>
      <form>
        <div className="max-w-md mx-auto">
      
          <div>
            <label className="mb-2 text-sm text-black block">Your Name</label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="focus:bg-gray-800 pr-4 pl-14 py-3 text-base placeholder-orange-600 text-orange-600 rounded bg-black border border-orange-600 w-full "
              />

              <div className="absolute left-4">
             <FaUserCircle className="text-orange-600 text-2xl" />
              </div>
            </div>
          </div>

          <label className="mb-2 text-sm text-black block">Your Organization</label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Enter Your Organization Name"
                className="focus:bg-gray-800 pr-4 pl-14 py-3 text-base placeholder-orange-600 text-orange-600 rounded bg-black border border-orange-600 w-full "
              />

              <div className="absolute left-4">
             <CgOrganisation className="text-orange-600 text-2xl" />
              </div>
            </div>
          </div>
      

        <div className="max-w-md mx-auto w-full font-[sans-serif]">
          <label className="text-black text-sm block mb-2">Message</label>
          <div className="w-full">
            <textarea
              placeholder="Write A Review"
              className="focus:bg-gray-800 pl-4 py-3 text-base placeholder-orange-600 text-orange-600 rounded bg-black border border-orange-600 w-full"
              rows="4"
            ></textarea>
                      <button type="submit" className="relative 2xl:flex xl:flex lg:flex h-[30px] w-40 mt-4 items-center justify-center overflow-hidden bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white font-semibold textColor hover:shadow-orange-600 hover:before:border-[25px] rounded-lg hover:text-orange-600">
              <span className="relative z-10">Get Started</span>
              </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default SendReview;
