import { useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { BsFuelPumpFill } from 'react-icons/bs'
import { MdSpeed } from 'react-icons/md'
import { TbManualGearbox } from 'react-icons/tb'
import LinesEllipsis from 'react-lines-ellipsis'

const Results = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { state } = location

  //Redirect to home page if there is no state
  useEffect(() => {
    if (!state || !state.cars) {
      navigate('/')
    }
  }, [navigate, state])

  if (!state || !state.cars) return null
  return (
    <>
      <div className='relative'>
        <div className='bg-[#354a5f] h-52 flex flex-col items-center justify-center text-center space-y-4 p-4'>
          <h2 className='text-white text-5xl font-bold'>Search Results</h2>
        </div>
      </div>
      <section className='mb-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
          {state.cars.map((car) => (
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

        {/* <div className='flex justify-center mt-4 gap-4'>
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
        </div> */}
      </section>
    </>
  )
}

export default Results
