import React from 'react'

const BannerImage = () => {
  return (
    <div className='h-[3rem] md:h-[5rem] lg:h-52 relative z-0 mb-4'>
      <div className='absolute left-1/2 transform -translate-x-1/2  mt-[-120px] md:mt-[-230px] lg:mt-[-280px] z-50 w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12'>
        <figure className='flex justify-center'>
          <img
            src='images/banner5-1.png'
            alt='Banner Image'
            className='max-w-full h-auto'
          />
        </figure>
      </div>
    </div>
  )
}

export default BannerImage
