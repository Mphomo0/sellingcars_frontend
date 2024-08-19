import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDoubleRight, HiPencilSquare, HiTrash } from 'react-icons/hi2'
import { toast } from 'react-toastify'
import {
  useDeleteCarMutation,
  useGetCarsQuery,
} from '../../slices/carsApiSlice'

const CarListComponent = () => {
  const [pageNumber, setPageNumber] = useState(1)

  const { data, isLoading, isError, error, refetch } =
    useGetCarsQuery(pageNumber)

  const [deleteCar, { isLoading: isDeletingCar }] = useDeleteCarMutation()

  const deleteHandler = async (carId) => {
    console.log('Deleting car with ID:', carId) // Check if carId is correct
    if (window.confirm('Are you sure you want to delete this car?')) {
      try {
        await deleteCar(carId)
        refetch()
        toast.success('Car deleted successfully!')
      } catch (error) {
        console.error('Error:', error)
        toast.error(
          error?.data?.message ||
            error.message ||
            'An unexpected error occurred'
        )
      }
    }
  }

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

  return (
    <div className='container mx-auto px-4 mb-10'>
      <div className='flex justify-end mb-8'>
        <Link
          to='/admin/add-car'
          className='flex items-center bg-[#ef6a31] text-white px-4 py-2 rounded'
        >
          <span className='mr-2'>Add Car</span> <HiChevronDoubleRight />
        </Link>
      </div>
      {isError && (
        <div className='text-red-500 mb-4 text-center'>
          Error: {error?.data?.message || error?.message || 'Unknown Error'}.
        </div>
      )}
      {isLoading || isDeletingCar ? (
        <div className='text-center'>Loading...</div>
      ) : data?.length === 0 ? (
        <div className='text-center'>No cars available.</div>
      ) : (
        <table className='w-full border-collapse'>
          <thead className='hidden md:table-header-group'>
            <tr>
              <th className='border border-gray-300 px-4 py-2'>Car ID</th>
              <th className='border border-gray-300 px-4 py-2'>Name</th>
              <th className='border border-gray-300 px-4 py-2'>Make</th>
              <th className='border border-gray-300 px-4 py-2'>Model</th>
              <th className='border border-gray-300 px-4 py-2'>Year</th>
              <th className='border border-gray-300 px-4 py-2'>Price</th>
              <th className='border border-gray-300 px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.cars.map((car) => (
              <tr
                key={car._id}
                className='border-b border-gray-300 flex flex-col md:table-row'
              >
                <td className="px-4 py-2 before:content-['Car ID'] before:block before:font-bold md:before:hidden">
                  {car._id}
                </td>
                <td className="px-4 py-2 before:content-['Name'] before:block before:font-bold md:before:hidden">
                  {car.name}
                </td>
                <td className="px-4 py-2 before:content-['Make'] before:block before:font-bold md:before:hidden">
                  {car.make}
                </td>
                <td className="px-4 py-2 before:content-['Model'] before:block before:font-bold md:before:hidden">
                  {car.model}
                </td>
                <td className="px-4 py-2 before:content-['Year'] before:block before:font-bold md:before:hidden">
                  {car.year}
                </td>
                <td className="px-4 py-2 before:content-['Price'] before:block before:font-bold md:before:hidden">
                  {car.price}
                </td>
                <td className="flex items-center space-x-2 px-4 py-2 before:content-['Actions'] before:block before:font-bold md:before:hidden">
                  <Link to={`/admin/edit-car/${car._id}`}>
                    <HiPencilSquare
                      className='text-blue-500 hover:text-blue-700'
                      size={20}
                    />
                  </Link>
                  <button onClick={() => deleteHandler(car._id)}>
                    <HiTrash
                      className='text-red-500 hover:text-red-700'
                      size={20}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

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
    </div>
  )
}

export default CarListComponent
