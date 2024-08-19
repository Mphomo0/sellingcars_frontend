import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { HiChevronDoubleRight } from 'react-icons/hi2'
import { toast } from 'react-toastify'
import schema from '../../utils/carSchema'
import { useUpdateCarMutation, useGetCarQuery } from '../../slices/carsApiSlice'
import { useSelector } from 'react-redux'

const EditForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const [images, setImages] = useState([])
  const { id: carId } = useParams()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth) // Retrieve the token

  const { data: carData, isLoading, isError, error } = useGetCarQuery(carId)
  const [updateCar, { isLoading: isUpdating }] = useUpdateCarMutation()

  useEffect(() => {
    if (carData) {
      reset(carData)
    }
  }, [carData, reset])

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files))
  }

  const onSubmit = async (data) => {
    const formData = new FormData()
    for (const key in data) {
      formData.append(key, data[key])
    }
    for (const image of images) {
      formData.append('images', image)
    }

    try {
      await updateCar({ carId, formData, token: userInfo.token }).unwrap()
      toast.success('Car updated successfully!')
      navigate('/admin/car-list')
    } catch (error) {
      console.error('Error updating car:', error)
      toast.error('Failed to update car.')
    }
  }

  if (isLoading || isUpdating) {
    return <div className='text-center mt-10'>Loading...</div>
  }

  if (isError) {
    return (
      <div className='text-center mt-10 text-red-500'>
        {error?.data?.message || 'Failed to load car data'}
      </div>
    )
  }

  return (
    <div className='container mx-auto p-8 bg-white rounded-lg shadow w-full lg:w-3/4 mt-12 mb-12'>
      <div className='flex justify-end mb-8'>
        <Link
          to='/admin/car-list'
          className='flex items-center bg-[#ef6a31] text-white px-4 py-2 rounded'
        >
          <span className='mr-2'>Car List</span> <HiChevronDoubleRight />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Name*
          </label>
          <input
            type='text'
            placeholder='Name'
            {...register('name')}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          />
          {errors.name && (
            <span className='text-red-500 text-sm'>{errors?.name.message}</span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Make*
          </label>
          <input
            type='text'
            placeholder='Make'
            {...register('make')}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          />
          {errors.make && (
            <span className='text-red-500 text-sm'>{errors.make.message}</span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Model*
          </label>
          <input
            type='text'
            placeholder='Model'
            {...register('model')}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          />
          {errors.model && (
            <span className='text-red-500 text-sm'>{errors.model.message}</span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Year*
          </label>
          <input
            type='number'
            placeholder='Year'
            {...register('year', { valueAsNumber: true })}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          />
          {errors.year && (
            <span className='text-red-500 text-sm'>{errors.year.message}</span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Fuel Type*
          </label>
          <select
            {...register('fuelType')}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          >
            <option value='' disabled>
              Select Fuel Type
            </option>
            <option value='Petrol'>Petrol</option>
            <option value='Diesel'>Diesel</option>
            <option value='Electric'>Electric</option>
            <option value='Hybrid'>Hybrid</option>
          </select>
          {errors.fuelType && (
            <span className='text-red-500 text-sm'>
              {errors.fuelType.message}
            </span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Transmission*
          </label>
          <select
            {...register('transmission')}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          >
            <option value='' disabled>
              Select Transmission
            </option>
            <option value='Manual'>Manual</option>
            <option value='Automatic'>Automatic</option>
            <option value='Semi-Automatic'>Semi-Automatic</option>
            <option value='CVT'>CVT</option>
          </select>
          {errors.transmission && (
            <span className='text-red-500 text-sm'>
              {errors.transmission.message}
            </span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Mileage*
          </label>
          <input
            type='number'
            placeholder='Mileage'
            {...register('mileage', { valueAsNumber: true })}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          />
          {errors.mileage && (
            <span className='text-red-500 text-sm'>
              {errors.mileage.message}
            </span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Description*
          </label>
          <textarea
            placeholder='Description'
            {...register('description')}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          ></textarea>
          {errors.description && (
            <span className='text-red-500 text-sm'>
              {errors.description.message}
            </span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Price*
          </label>
          <input
            type='number'
            placeholder='Price'
            {...register('price', { valueAsNumber: true })}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          />
          {errors.price && (
            <span className='text-red-500 text-sm'>{errors.price.message}</span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Featured
          </label>
          <select
            {...register('tobeFeatured')}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          >
            <option value='' disabled>
              Select Yes/No
            </option>
            <option value='No'>No</option>
            <option value='Yes'>Yes</option>
          </select>
          {errors.tobeFeatured && (
            <span className='text-red-500 text-sm'>
              {errors.tobeFeatured.message}
            </span>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Images
          </label>
          <input
            type='file'
            multiple
            onChange={handleImageChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded'
          />
        </div>

        <button
          type='submit'
          className='w-full py-2 px-4 bg-[#354a5f] text-white font-medium rounded'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default EditForm
