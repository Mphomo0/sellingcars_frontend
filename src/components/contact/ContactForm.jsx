import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z
  .object({
    name: z.string().min(3, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    subject: z.string().min(10, { message: 'Subject is required' }),
    message: z.string().min(10, { message: 'Message is required' }),
  })
  .required()

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  })
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <div className='container mx-auto p-8 bg-white rounded-lg w-4/5 shadow'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
            <div className='flex-1'>
              <label>Name*</label>
              <input
                type='text'
                placeholder='Name'
                {...register('name')}
                className='w-full p-2 border border-gray-300 rounded'
              />
              {errors.name && (
                <span className='text-red-500'>{errors?.name.message}</span>
              )}
            </div>
            <div className='flex-1'>
              <label>Email*</label>
              <input
                type='email'
                placeholder='Email'
                {...register('email')}
                className='w-full p-2 border border-gray-300 rounded'
              />
              {errors.email && (
                <span className='text-red-500'>{errors?.email.message}</span>
              )}
            </div>
          </div>
          <div>
            <label>Subject*</label>
            <input
              type='text'
              placeholder='Subject'
              {...register('subject')}
              className='w-full p-2 border border-gray-300 rounded'
            />
            {errors.subject && (
              <span className='text-red-500'>{errors?.subject.message}</span>
            )}
          </div>
          <div>
            <label>Message*</label>
            <textarea
              placeholder='Message'
              {...register('message')}
              className='w-full p-2 border border-gray-300 rounded'
            />
            {errors.message && (
              <span className='text-red-500'>{errors?.message.message}</span>
            )}
          </div>
          <button
            type='submit'
            className='w-full p-2 bg-[#354a5f] text-white font-bold rounded'
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
