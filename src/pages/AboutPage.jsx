import React from 'react'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import ChooseUs from '../components/ChooseUs'
import AboutSection from '../components/AboutSection'

const AboutPage = () => {
  return (
    <>
      <div className='relative'>
        <div className='bg-[#354a5f] h-52 flex flex-col items-center justify-center text-center space-y-4 p-4'>
          <h2 className='text-white text-5xl font-bold'>About Us</h2>
        </div>
      </div>
      <div>
        <div className='bg-white w-full'>
          <div className='p-8 md:p-12 lg:px-16 lg:py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <h2 className='text-[#354a5f] text-3xl md:text-2xl lg:text-5xl font-bold float-left'>
                We Value Our Clients
                <br /> And Want Them To Have
                <br /> A Nice Experience
              </h2>
              <div className='space-y-4 text-base md:text-lg lg:text-xl'>
                <p>
                  At SellingCars, we have a diverse selection of new and
                  pre-owned vehicles from top manufacturers. Our experienced
                  sales team is dedicated to helping you find the perfect car,
                  truck, or SUV that fits your lifestyle and budget. We take
                  pride in our extensive knowledge of the automotive industry
                  and are always happy to answer any questions you may have.
                </p>
                <p>
                  But it's not just about the vehicles - it's about the people
                  behind the dealership. Our knowledgeable and friendly staff
                  are passionate about what they do, and they work tirelessly to
                  ensure your satisfaction from start to finish. Whether you're
                  in the market for a new ride or need maintenance and repair
                  services, you can count on us to provide the quality and care
                  you deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ChooseUs />
        <AboutSection />
        <Testimonials />
        <CallToAction />
      </div>
    </>
  )
}

export default AboutPage
