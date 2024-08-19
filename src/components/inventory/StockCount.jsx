import React from 'react'
import { useGetCarsQuery } from '../../slices/carsApiSlice'

const StockCount = () => {
  // Use the generated hook to fetch cars data
  const { data, error, isLoading } = useGetCarsQuery(1) // Passing page number 1 as an example

  if (isLoading) return <p className='text-center h-36'>Loading...</p>
  if (error)
    return (
      <p className='text-center h-36'>Error fetching cars: {error.message}</p>
    )

  const cars = data?.cars || []
  const count = data?.count || 0

  return (
    <section className='relative'>
      <div className='bg-[#354a5f] h-52 flex flex-col items-center justify-center text-center mt-0 mb-4 p-4'>
        <h2 className='text-white text-5xl font-bold'>Our Showroom</h2>
        <p className='text-white'>We have {count} cars in our inventory.</p>
      </div>
    </section>
  )
}

export default StockCount
