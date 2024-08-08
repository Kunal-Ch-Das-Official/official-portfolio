import React from 'react'
import loaderStyle from './ReviewFormLoadingState.module.css';
const ReviewFormLoadingState = () => {
  return (
    <div className={`fixed top-0 blurBackground flex flex-col justify-center items-center w-full ${loaderStyle.Body}`}>
    <span className={`${loaderStyle.loaderWrapper} rounded-full ring-2 ing-offset-8 ring-inset ring-pink-300`}>
        <div className={loaderStyle.loader}>
        </div>
    </span>
    <div className='text-orange-500 text-center font-bold text-md mt-8'>
      Please do not leave it will take few seconds....
    </div>
</div>
  )
}

export default ReviewFormLoadingState;


