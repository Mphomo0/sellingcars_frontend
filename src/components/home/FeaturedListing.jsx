import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LinesEllipsis from 'react-lines-ellipsis'
import { BsFuelPumpFill } from 'react-icons/bs'
import { TbManualGearbox } from 'react-icons/tb'
import { MdSpeed } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { useGetFeaturedQuery } from '../../slices/carsApiSlice'

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <FaArrowAltCircleLeft
      className={className}
      style={{ ...style, display: 'block', color: 'black', fontSize: '30px' }}
      onClick={onClick}
    />
  )
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <FaArrowAltCircleRight
      className={className}
      style={{ ...style, display: 'block', color: 'black', fontSize: '30px' }}
      onClick={onClick}
    />
  )
}

const FeaturedListing = () => {
  const { data: cars, isLoading, isError } = useGetFeaturedQuery()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <CustomNextArrow />,
          prevArrow: <CustomPrevArrow />,
        },
      },
    ],
  }

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-32'>Loading...</div>
    )
  if (isError)
    return <div className='flex justify-center items-center h-32'>Error</div>

  return (
    <>
      <h1 className='text-4xl font-bold text-center mt-4 mb-8'>
        Our Featured Listing
      </h1>
      <div className='container mx-auto w-[95%] sm:w-[90%] mb-12'>
        <Slider {...settings}>
          {cars.map((car) => (
            <div key={car._id} className='p-2 w-full'>
              <Link
                to={`/cars/${car._id}`}
                className='block rounded-lg p-4 shadow-sm shadow-indigo-100'
              >
                <img
                  alt='Car'
                  src={`https://sellingcarsapi.onrender.com/${car.imagesUrl[0]}`}
                  className='h-56 w-full rounded-md object-cover'
                />
                <div className='mt-2'>
                  <dl>
                    <div>
                      <dt className='sr-only'>Price</dt>
                      <dd className='text-3xl text-black font-bold'>
                        R{car.price}
                      </dd>
                    </div>
                    <div>
                      <dt className='sr-only'>Name</dt>
                      <dd className='text-black font-medium'>
                        <LinesEllipsis
                          text={car.name}
                          maxLine='1'
                          ellipsis='...'
                          trimRight
                          basedOn='letters'
                        />
                      </dd>
                    </div>
                  </dl>
                  <div className='mt-6 flex items-center gap-8 text-xs'>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <BsFuelPumpFill size={20} />
                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Fuel Type</p>
                        <p className='font-medium'>{car.fuelType}</p>
                      </div>
                    </div>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <MdSpeed size={25} />
                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Mileage</p>
                        <p className='font-medium'>{car.mileage}</p>
                      </div>
                    </div>
                    <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
                      <TbManualGearbox size={20} />
                      <div className='mt-1.5 sm:mt-0'>
                        <p className='text-gray-500'>Transmission</p>
                        <p className='font-medium'>{car.transmission}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default FeaturedListing
