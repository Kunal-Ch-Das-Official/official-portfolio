import Image from 'next/image';
import React from 'react';
import errorIcon from '@/public/icons/error-page-icon.png';
const CustomErrorPage = () => {
  return (
    <div>


<div className="grid h-screen place-content-center px-4">
  <div className="text-center flex flex-col justify-center items-center">
    <Image src={errorIcon} alt='Technical Error' width={250} height={250} />

    <h1 className="mt-6 text-2xl font-bold tracking-tight text-red-500 sm:text-4xl">500 - Uh-oh!</h1>
     
    <p className="mt-4 text-red-500">Internal Server Error.</p>
  </div>
</div>
    </div>
  )
}

export default CustomErrorPage;