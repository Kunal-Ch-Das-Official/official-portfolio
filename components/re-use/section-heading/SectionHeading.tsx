import React from 'react';


interface SectionHeadingProps {
mainHeading: string,
subHeading: string | undefined
}


const SectionHeading:React.FC<SectionHeadingProps> = ({mainHeading, subHeading}) => {
  return (
    <main className='flex flex-col flex-wrap text-center my-8'>
      <h2 className='text-3xl font-bold'> {mainHeading} </h2>
      <p className='text-base font-thin mt-2'> {subHeading} </p>
    </main>
  )
}

export default SectionHeading;