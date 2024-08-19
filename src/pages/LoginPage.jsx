import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'

const LoginPage = () => {
  // Initialize state variables for email and password
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Get Redux dispatch function and navigation function
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Use the 'useLoginMutation' hook to handle user login
  const [login, { isLoading }] = useLoginMutation()

  // Get user info from Redux store
  const { userInfo } = useSelector((state) => state.auth)

  // Extract the 'redirect' query parameter from the URL
  const { search } = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/admin/car-list'

  // Redirect the user if they are already logged in
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({ ...res }))
      navigate(redirect)
    } catch (err) {
      console.error('Login failed:', err) // Log the error
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <>
      <div className='mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Log In!</h1>
        </div>

        <form
          onSubmit={submitHandler}
          className='mx-auto mb-0 mt-8 max-w-md space-y-4'
        >
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>

            <div className='relative'>
              <input
                type='email'
                value={email}
                className='w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>

            <div className='relative'>
              <input
                type='password'
                value={password}
                className='w-full rounded-lg border-gray-400 p-4 pe-12 text-sm shadow-sm'
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='w-full inline-block rounded-lg bg-[#354a5f] px-5 py-3 text-sm font-medium text-white'
              disabled={isLoading}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default LoginPage
