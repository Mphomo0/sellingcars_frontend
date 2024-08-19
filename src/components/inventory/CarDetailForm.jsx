import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import schema from '../../utils/carFormSchema'

const CarDetailForm = ({ car }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      comment: '',
    },
  })

  useEffect(() => {
    if (car) {
      setValue(
        'comment',
        `I would like to check the availability of the ${car.name}`
      )
    }
  }, [car, setValue])

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <section className='border border-gray-300 shadow-md rounded p-4 w-full lg:mt-[-115px] md:mt-[70px] sm:mt-96'>
        <h2 className='font-bold text-2xl'>Enquire Now</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 mt-4'>
          <div>
            <label>Name*</label>
            <input
              type='text'
              placeholder='Name & Surname'
              {...register('name')}
              className='w-full p-2 border border-gray-300 rounded'
            />
            {errors.name && (
              <span className='text-red-500'>{errors?.name.message}</span>
            )}
          </div>
          <div>
            <label>Email*</label>
            <input
              type='email'
              placeholder='Email Address'
              {...register('email')}
              className='w-full p-2 border border-gray-300 rounded'
            />
            {errors.email && (
              <span className='text-red-500'>{errors?.email.message}</span>
            )}
          </div>
          <div>
            <label>Mobile Number*</label>
            <input
              type='text'
              placeholder='Your Mobile Number'
              {...register('phone')}
              className='w-full p-2 border border-gray-300 rounded'
            />
            {errors.phone && (
              <span className='text-red-500'>{errors?.phone.message}</span>
            )}
          </div>
          <div>
            <label>Message*</label>
            <textarea
              placeholder='Your Message'
              {...register('comment')}
              className='w-full p-2 border border-gray-300 rounded'
              rows='4'
            ></textarea>
            {errors.comment && (
              <span className='text-red-500'>{errors?.comment.message}</span>
            )}
          </div>

          <button
            type='submit'
            className='bg-[#354a5f] text-white font-bold py-2 px-4 rounded w-full'
          >
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default CarDetailForm
