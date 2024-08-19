import React, { useState, useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import brandsImages from '../../utils/brandsImages'
import { useGetMakesQuery } from '../../slices/carsApiSlice'

const BrandsSection = () => {
  const [availableMakes, setAvailableMakes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const { refetch } = useGetMakesQuery({
    skip: true, // Skip the query by default
    onSuccess: (data) => {
      setAvailableMakes(data)
      setIsLoading(false)
    },
    onError: () => {
      setIsError(true)
      setIsLoading(false)
    },
  })

  useEffect(() => {
    refetch() // fetch data when component mounts
  }, [refetch])

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-32'>Loading...</div>
    )
  if (isError)
    return <div className='flex justify-center items-center h-32'>Error</div>

  const renderBrands = () => {
    return availableMakes.map((make) => {
      const image = brandsImages(make.toLowerCase())
      return (
        image && (
          <div
            key={make}
            className='border border-gray-300 shadow-md p-2 flex items-center h-28 mx-2 gap-4'
          >
            <img src={image} alt={make} className='h-24' />
          </div>
        )
      )
    })
  }
  return (
    <>
      <div>
        <h2 className='text-5xl text-center font-bold'>Our Brands</h2>
      </div>
      <div className='w-full my-12'>
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction='left'
        >
          {renderBrands()}
        </Marquee>
      </div>
    </>
  )
}

export default BrandsSection
