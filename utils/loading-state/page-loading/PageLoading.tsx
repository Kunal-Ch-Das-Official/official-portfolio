import React from 'react'
import loaderStyle from "../form-submission-state/ReviewFormLoadingState.module.css";
const PageLoadingState = () => {
  return (
    <div className={`fixed top-0 blurBackground flex flex-col justify-center items-center w-full ${loaderStyle.Body}`}>
    <span className={`${loaderStyle.loaderWrapper} rounded-full ring-2 ing-offset-8 ring-inset ring-pink-300`}>
        <div className={loaderStyle.loader}></div>
    </span>
</div>
  )
}

export default PageLoadingState;


