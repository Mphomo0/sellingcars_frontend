import React from 'react'
import Hero from '../components/home/Hero'
import BannerImage from '../components/home/BannerImage'
import Testimonials from '../components/Testimonials'
import BrandsSection from '../components/home/BrandsSection'
import FeaturedListing from '../components/home/FeaturedListing'
import CallToAction from '../components/CallToAction'
import ChooseUs from '../components/ChooseUs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <BannerImage />
      <BrandsSection />
      <FeaturedListing />
      <ChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  )
}

export default HomePage
