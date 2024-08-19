import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import schema from '../utils/profileSchema'
import { toast } from 'react-toastify'
import { useUpdateUserMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.auth)

  const [updateUser, { isLoading }] = useUpdateUserMutation()

  useEffect(() => {
    if (userInfo) {
      reset({
        name: userInfo.name,
        email: userInfo.email,
      })
    }
  }, [userInfo, reset])

  const onSubmit = async (data) => {
    try {
      const res = await updateUser(data).unwrap()
      dispatch(setCredentials({ ...res }))
      toast.success('Profile updated successfully!')
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <>
      <div className='relative'>
        <div className='bg-[#354a5f] h-52 flex flex-col items-center justify-center text-center space-y-4 p-4'>
          <h2 className='text-white text-5xl font-bold'>Profile</h2>
        </div>
        <div className='container mx-auto p-8 bg-white rounded-lg shadow w-full lg:w-3/4 mt-12 mb-12'>
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
                <span className='text-red-500 text-sm'>
                  {errors?.name.message}
                </span>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Email*
              </label>
              <input
                type='email'
                placeholder='Your Email'
                {...register('email')}
                className='mt-1 block w-full p-2 border border-gray-300 rounded'
              />
              {errors.email && (
                <span className='text-red-500 text-sm'>
                  {errors?.email.message}
                </span>
              )}
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Password*
              </label>
              <input
                type='password'
                placeholder='Your Password'
                {...register('password')}
                className='mt-1 block w-full p-2 border border-gray-300 rounded'
              />
              {errors.password && (
                <span className='text-red-500 text-sm'>
                  {errors?.password.message}
                </span>
              )}
            </div>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-[#354a5f] text-white font-medium rounded'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ProfilePage
