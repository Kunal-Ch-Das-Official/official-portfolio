import React from 'react';


interface SectionHeadingProps {
mainHeading: string,
subHeading: string | undefined
}


const SectionHeading:React.FC<SectionHeadingProps> = ({mainHeading, subHeading}) => {
  return (
    <main className='flex flex-col flex-wrap text-center my-8'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold'> {mainHeading} </h2>
      <p className='mt-4 md:w-10/12 w-full text-xs sm:text-sm md:text-md lg:text-lg text-gray-300 mx-auto '> {subHeading} </p>
    </main>
  )
}

export default SectionHeading;