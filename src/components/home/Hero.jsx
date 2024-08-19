import React from 'react'
import SearchHome from './SearchHome'

const Hero = () => {
  return (
    <>
      <div className='relative w-full bg-blue-100 min-h-[700px] md:min-h-[500px] lg:min-h-[500px] flex items-center justify-center pt-[-100px]'>
        <div className='w-full max-w-6xl px-4 mx-auto text-center mt-[-222px]'>
          <span className='block text-black text-base leading-7 mb-7'>
            Find Used and New Cars for Sale
          </span>
          <h2 className='text-4xl md:text-4xl lg:text-6xl text-black font-bold mb-4 md:mb-8'>
            Find Your Perfect Car
          </h2>
          <div>
            <SearchHome />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
