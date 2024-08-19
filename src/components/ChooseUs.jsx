import React from 'react'
import { FaRegCalendarAlt, FaAward } from 'react-icons/fa'
import { IoMdHappy, IoIosPricetag } from 'react-icons/io'
import { GrServices } from 'react-icons/gr'
import { RiCommunityLine } from 'react-icons/ri'

const ChooseUs = () => {
  return (
    <>
      <section className='bg-gray-900 text-white'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div className='mx-auto max-w-lg text-center'>
            <h2 className='text-3xl font-bold sm:text-4xl'>Why Choose Us?</h2>

            <p className='mt-4 text-gray-300'>
              At SellingCars, we are committed to providing our customers with
              the best car-buying experience possible. Here are just a few
              reasons why you should choose us:
            </p>
          </div>

          <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition'>
              <FaRegCalendarAlt size={30} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Years of Experience
              </h2>

              <p className='mt-1 text-sm text-gray-300'>
                With over 20 years in the industry, we have the knowledge and
                expertise to help you find the perfect car.
              </p>
            </div>

            <div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition'>
              <IoMdHappy size={30} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Customer Satisfaction
              </h2>

              <p className='mt-1 text-sm text-gray-300'>
                Our customers love us! We have a 4.8-star rating on Google
                Reviews and hundreds.
              </p>
            </div>

            <div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition'>
              <FaAward size={30} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Award-Winning Service
              </h2>

              <p className='mt-1 text-sm text-gray-300'>
                We have been recognized for our exceptional service with several
                industry awards, including the Dealer of the Year award.
              </p>
            </div>

            <div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition'>
              <GrServices size={30} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Unique Services
              </h2>

              <p className='mt-1 text-sm text-gray-300'>
                We offer exclusive services like free maintenance packages,
                extended warranties, and flexible financing options.
              </p>
            </div>

            <div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition'>
              <IoIosPricetag size={30} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Transparent Pricing
              </h2>

              <p className='mt-1 text-sm text-gray-300'>
                We believe in clear and upfront pricing. No hidden fees, no
                surprises.
              </p>
            </div>

            <div className='block rounded-xl border border-gray-800 p-8 shadow-xl transition'>
              <RiCommunityLine size={30} />

              <h2 className='mt-4 text-xl font-bold text-white'>
                Community Involvement
              </h2>

              <p className='mt-1 text-sm text-gray-300'>
                We are proud to support our local community through various
                events and charity initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ChooseUs
