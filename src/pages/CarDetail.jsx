import React from 'react'
import { useParams } from 'react-router-dom'
import { useKeenSlider } from 'keen-slider/react'
import { BsFuelPumpFill } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { MdSpeed } from 'react-icons/md'
import { CiCalendar } from 'react-icons/ci'
import CarDetailForm from '../components/inventory/CarDetailForm'
import { useGetCarQuery } from '../slices/carsApiSlice'

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active')
      })
    }
    function addActive(idx) {
      if (slider.slides[idx]) {
        slider.slides[idx].classList.add('active')
      }
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on('created', () => {
      if (!mainRef.current || !slider.track?.details) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on('animationStarted', (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}

const CarDetailSlider = ({ car }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })

  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 6,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} className='keen-slider mb-4'>
        {car.imagesUrl?.map((image, index) => (
          <div key={index} className='keen-slider__slide'>
            <img
              src={`/${image}`}
              alt={`Car image ${index + 1}`}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className='keen-slider thumbnail'>
        {car?.imagesUrl?.map((image, index) => (
          <div key={index} className='keen-slider__slide thumbnail-slide'>
            <img
              src={`/${image}`}
              alt={`Thumbnail ${index + 1}`}
              className='w-full h-auto'
            />
          </div>
        ))}
      </div>
    </>
  )
}

const CarDetail = () => {
  const { carId } = useParams()

  const { data: car, isLoading, IsError } = useGetCarQuery(carId)

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-96'>Loading...</div>
    )
  if (IsError)
    return <div className='flex justify-center items-center h-96'>Error</div>

  return (
    <section className='container mx-auto px-4 py-8 w-full lg:w-3/4 mt-2 mb-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 md:mt-38'>
        <div>
          <h1 className='text-3xl md:text-4xl font-bold'>{car?.name}</h1>
        </div>
        <div className='text-[#354a5f] text-3xl md:text-4xl font-bold text-right'>
          R{car.price}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-8 lg:mt-8 md:mt-[-2rem]'>
        <div>
          <div>{<CarDetailSlider car={car} />}</div>
          <div className='mt-6'>
            <ul className='flex gap-2 sm:text:sm w-full'>
              <li className='flex gap-1'>
                <CiCalendar size={20} />
                {car.year}
              </li>
              <li className='flex gap-1'>
                <MdSpeed size={20} />
                {car.mileage}
              </li>
              <li className='flex gap-1'>
                <TbManualGearbox size={20} />
                {car.transmission}
              </li>
              <li className='flex gap-1'>
                <BsFuelPumpFill size={20} /> {car.fuelType}
              </li>
            </ul>
          </div>
          <p className='mt-6 font-bold text-2xl'>Seller's Comments</p>
          <p>{car.description}</p>
        </div>
        <div>
          <CarDetailForm car={car} />
        </div>
      </div>
    </section>
  )
}

export default CarDetail
