import React, { useEffect, useRef } from 'react'
import KeenSlider from 'keen-slider'

const Testimonials = () => {
  const sliderRef = useRef(null)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const prevDesktopRef = useRef(null)
  const nextDesktopRef = useRef(null)

  useEffect(() => {
    if (!sliderRef.current) return

    const slider = new KeenSlider(sliderRef.current, {
      loop: true,
      slides: {
        origin: 'center',
        perView: 1.25,
        spacing: 16,
      },
      breakpoints: {
        '(min-width: 1024px)': {
          slides: {
            origin: 'auto',
            perView: 1.5,
            spacing: 32,
          },
        },
      },
    })

    const handlePrev = () => slider.prev()
    const handleNext = () => slider.next()

    if (prevRef.current) prevRef.current.addEventListener('click', handlePrev)
    if (nextRef.current) nextRef.current.addEventListener('click', handleNext)
    if (prevDesktopRef.current)
      prevDesktopRef.current.addEventListener('click', handlePrev)
    if (nextDesktopRef.current)
      nextDesktopRef.current.addEventListener('click', handleNext)

    return () => {
      if (prevRef.current)
        prevRef.current.removeEventListener('click', handlePrev)
      if (nextRef.current)
        nextRef.current.removeEventListener('click', handleNext)
      if (prevDesktopRef.current)
        prevDesktopRef.current.removeEventListener('click', handlePrev)
      if (nextDesktopRef.current)
        nextDesktopRef.current.removeEventListener('click', handleNext)
      slider.destroy()
    }
  }, [])

  return (
    <>
      <section className='bg-gray-50'>
        <div className='mx-auto max-w-full px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16'>
            <div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Don't just take our word for it...
              </h2>

              <p className='mt-4 text-gray-700'>
                Our clients' words speak volumes about the impact we've had on
                their journeys. Discover the stories of growth, success, and
                satisfaction that make us a trusted partner in their endeavors.
              </p>

              <div className='hidden lg:mt-8 lg:flex lg:gap-4'>
                <button
                  aria-label='Previous slide'
                  ref={prevDesktopRef}
                  className='rounded-full border border-[#354a5f] p-3 text-[#354a5f] transition hover:bg-[#354a5f] hover:text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 rtl:rotate-180'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 19.5L8.25 12l7.5-7.5'
                    />
                  </svg>
                </button>

                <button
                  aria-label='Next slide'
                  ref={nextDesktopRef}
                  className='rounded-full border border-[#354a5f] p-3 text-[#354a5f] transition hover:bg-[#354a5f] hover:text-white'
                >
                  <svg
                    className='size-5 rtl:rotate-180'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 5l7 7-7 7'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className='-mx-6 lg:col-span-2 lg:mx-0'>
              <div id='keen-slider' className='keen-slider' ref={sliderRef}>
                <div className='keen-slider__slide'>
                  <blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12'>
                    <div>
                      <div className='mt-4'>
                        <p className='text-2xl font-bold text-[#354a5f] sm:text-3xl'>
                          Stayin' Alive
                        </p>

                        <p className='mt-4 leading-relaxed text-gray-700'>
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className='mt-4 text-sm font-medium text-gray-700 sm:mt-6'>
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
                <div className='keen-slider__slide'>
                  <blockquote className='flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12'>
                    <div>
                      <div className='mt-4'>
                        <p className='text-2xl font-bold text-[#354a5f] sm:text-3xl'>
                          Staying Alive
                        </p>

                        <p className='mt-4 leading-relaxed text-gray-700'>
                          No, Rose, they are not breathing. And they have no
                          arms or legs … Where are they? You know what? If we
                          come across somebody with no arms or legs, do we
                          bother resuscitating them? I mean, what quality of
                          life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className='mt-4 text-sm font-medium text-gray-700 sm:mt-6'>
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>

                {/* Repeat similar block for other slides */}
              </div>

              <div className='mt-8 flex justify-center gap-4 lg:hidden'>
                <button
                  aria-label='Previous slide'
                  ref={prevRef}
                  className='rounded-full border border-[#354a5f] p-3 text-[#354a5f] transition hover:bg-[#354a5f] hover:text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-5 rtl:rotate-180'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15.75 19.5L8.25 12l7.5-7.5'
                    />
                  </svg>
                </button>

                <button
                  aria-label='Next slide'
                  ref={nextRef}
                  className='rounded-full border border-[#354a5f] p-3 text-[#354a5f] transition hover:bg-[#354a5f] hover:text-white'
                >
                  <svg
                    className='size-5 rtl:rotate-180'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M9 5l7 7-7 7'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
