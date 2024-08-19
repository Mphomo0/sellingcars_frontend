import React from 'react'
import StockCount from '../components/inventory/StockCount'
import AllCars from '../components/inventory/AllCars'
import SearchHome from '../components/home/SearchHome'

const ShowroomPage = () => {
  return (
    <>
      <StockCount />
      <div className='bg-[#354a5f] w-full pt-0 mt-[-16px] h-36'>
        <div className='cotainer mx-auto w-2/3'>
          <SearchHome />
        </div>
      </div>
      <AllCars />
    </>
  )
}

export default ShowroomPage
