import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFuelPumpFill } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { MdSpeed } from 'react-icons/md'
import LinesEllipsis from 'react-lines-ellipsis'
import { useGetCarsQuery } from '../../slices/carsApiSlice'

const AllCars = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const { data, isLoading, isError, error } = useGetCarsQuery(pageNumber)

  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prevPage) => prevPage - 1)
    }
  }

  const handleNextPage = () => {
    if (pageNumber < data?.totalPages) {
      setPageNumber((prevPage) => prevPage + 1)
    }
  }

  if (isLoading) {
    return (
      <div className='flex justify-center items-center h-96'>Loading...</div>
    )
  }

  if (isError) {
    return (
      <div className='flex justify-center items-center h-96'>
        Error: {error?.data?.message} || 'An error occurred'
      </div>
    )
  }

  return (
    <>
      <h1 className='text-center text-3xl font-bold mt-16 mb-10'>
        New and Used Cars For Sale
      </h1>
      <section className='mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
          {data.cars.map((car) => (
            <div key={car._id}>
              <Link
                to={`/cars/${car._id}`}
                className='block rounded-lg p-4 shadow-sm shadow-indigo-100'
              >
                <img
                  alt='Car'
                  src={`https://sellingcarsapi.onrender.com/${car.imagesUrl[0]}`}
                  className='h-56 w-full rounded-md object-cover'
                />
                <div className='mt-2'>
                  <dl>
                    <div>
                      <dt className='sr-only'>Price</dt>
                      <dd className='text-3xl text-black font-bold'>
                        R{car.price}
                      </dd>
                    </div>
                    <div>
                      <dt className='sr-only'>Name</dt>
                      <dd className='text-black font-medium'>
                        <LinesEllipsis
                          text={car.name}
                          maxLine='1'
                          ellipsis='...'
                          trimRight
                          basedOn='letters'
                        />
                      </dd>
                    </div>
                  </dl>
                  <div className='mt-6 flex items-center gap-8 text-xs'>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <BsFuelPumpFill size={20} />
                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Fuel Type</p>
                        <p className='font-medium'>{car.fuelType}</p>
                      </div>
                    </div>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <MdSpeed size={25} />
                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Mileage</p>
                        <p className='font-medium'>{car.mileage}</p>
                      </div>
                    </div>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <TbManualGearbox size={20} />
                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Transmission</p>
                        <p className='font-medium'>{car.transmission}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className='flex justify-center mt-4 gap-4'>
          <button
            onClick={handlePreviousPage}
            disabled={pageNumber === 1}
            className={`px-4 py-2 rounded ${
              pageNumber === 1
                ? 'bg-gray-300 text-gray-500'
                : 'bg-blue-500 text-white'
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNextPage}
            disabled={pageNumber >= data?.totalPages} // This check should use data.totalPages
            className={`px-4 py-2 ${
              pageNumber >= data?.totalPages
                ? 'bg-gray-300 text-gray-500'
                : 'bg-blue-500 text-white'
            } rounded`}
          >
            Next
          </button>
        </div>
      </section>
    </>
  )
}

export default AllCars
