import React from 'react';
import blurBg from '../custom-alert/CustomAlert.module.css';

const ConfirmAlert = ({deleteHandler, notDeleteHandler}) => {
  return (
    <div>

<div
            className={`${blurBg.overlay} fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]`}>
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
                <div className="my-8 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-14 fill-red-500 inline" viewBox="0 0 24 24">
                        <path
                            d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                            data-original="#000000" />
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                            data-original="#000000" />
                    </svg>
                    <h4 className="text-gray-800 text-lg font-semibold mt-4">Are you sure you want to delete it?</h4>
                    <p className="text-sm text-gray-600 mt-4">If you click on delete button it will be removed from your database permanently</p>
                </div>

                <div className="flex flex-col space-y-2">
                    <button type="button" onClick={deleteHandler}
                        className="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500">Delete</button>
                    <button type="button" onClick={notDeleteHandler}
                        className="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConfirmAlert;