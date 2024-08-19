import React from 'react'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <>
      <section>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16'>
            <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
              <img
                alt=''
                src='/images/dealership.jpg'
                className='absolute inset-0 h-full w-full object-cover'
              />
            </div>

            <div className='lg:py-24'>
              <h2 className='text-3xl font-bold sm:text-4xl'>Our Showroom</h2>

              <p className='mt-4 text-gray-600'>
                Take your time browsing our inventory, and feel free to ask our
                knowledgeable sales team any questions you may have. We
                encourage you to take a closer look at the vehicles that pique
                your interest, and we'll be happy to arrange test drives so you
                can experience the performance and features for yourself.
              </p>

              <Link
                to='/showroom'
                className='mt-8 inline-block rounded bg-[#354a5f] px-12 py-3 text-sm font-medium text-white'
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
