import React, { useState } from 'react'
import logo from '/images/logo.png'
import { HiBars3BottomRight, HiMiniXMark } from 'react-icons/hi2'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../slices/authSlice'
import { useLogoutMutation } from '../slices/usersApiSlice'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)

  //Initialize the navigation hook and dispatch function
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [logoutApiCall] = useLogoutMutation()

  // Function to handle user logout
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap()
      // Call the logout API and dispatch actions
      dispatch(logout())
      navigate('/login')
    } catch (err) {
      console.error(err)
    }
  }

  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleMenuToggle = () => {
    setOpen(!open)
  }

  return (
    <header className='shadow-md w-full left-0 bg-white'>
      <div className='container mx-auto md:px-10 py-4 px-7 flex justify-between items-center'>
        <Link to='/'>
          <img src={logo} alt='logo' width={250} />
        </Link>

        {/* Hamburger Menu Button for Mobile */}
        <button
          onClick={handleMenuToggle}
          className='md:hidden absolute right-8 top-6 cursor-pointer'
          aria-label='Toggle Menu'
        >
          {open ? <HiMiniXMark size={30} /> : <HiBars3BottomRight size={30} />}
        </button>

        {/* Navigation Menu */}
        <nav>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-10 left-0 w-full md:w-auto transition-all duration-500 ease-in ${
              open ? 'top-20' : 'top-[-490px]'
            } md:pl-0 pl-9`}
          >
            <Link to='/'>
              <li className='font-bold my-7 md:my-0 md:ml-8'>Home</li>
            </Link>
            <Link to='/about'>
              <li className='font-bold my-7 md:my-0 md:ml-8'>About</li>
            </Link>
            <Link to='/showroom'>
              <li className='font-bold my-7 md:my-0 md:ml-8'>Showroom</li>
            </Link>
            <Link to='/contact'>
              <li className='font-bold my-7 md:my-0 md:ml-8'>Contact</li>
            </Link>
            {/* Admin Links - Display only for admin users */}
            {userInfo && userInfo.isAdmin && (
              <li
                className='relative font-bold my-7 md:my-0 md:ml-8 cursor-pointer'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {userInfo.name}
                <svg
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  className={`w-4 h-4 ml-2 inline-block transform transition-transform duration-300 ${
                    dropdownOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M19 9l-7 7-7-7'
                  ></path>
                </svg>
                {dropdownOpen && (
                  <ul className='absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg z-20'>
                    <Link to='/profile'>
                      <li className='px-4 py-2 hover:bg-gray-100'>
                        My Profile
                      </li>
                    </Link>
                    <Link to='/admin/car-list'>
                      <li className='px-4 py-2 hover:bg-gray-100'>Cars List</li>
                    </Link>

                    <li
                      className='px-4 py-2 hover:bg-gray-100'
                      onClick={logoutHandler}
                    >
                      Logout
                    </li>
                  </ul>
                )}
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
