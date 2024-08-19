import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import Address from '../components/contact/Address'

const ContactUsPage = () => {
  return (
    <>
      <section className="relative">
        <div className="bg-[#354a5f] h-96 flex flex-col items-center justify-center text-center space-y-4 p-4">
          <h2 className="text-white text-5xl font-bold">Contact Us</h2>
          <p className="text-white">
            Have a question or just want to say hi? Don't hesitate, we'd love to
            hear from you.
          </p>
        </div>
      </section>
      <section>
        <div className="absolute top-72 left-1/2 transform -translate-x-1/2 w-full z-10">
          <ContactForm />
        </div>
      </section>
      <section className="h-96 bg-white w-full"></section>
      <section className="h-[700px] sm:h-[700px] md:h-[700px] bg-white ">
        <Address />
      </section>
    </>
  )
}

export default ContactUsPage
