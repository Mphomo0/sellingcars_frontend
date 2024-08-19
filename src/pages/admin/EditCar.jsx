import React from 'react'
import EditForm from '../../components/admin/EditForm'

const EditCar = () => {
  return (
    <>
      <section className='relative'>
        <div className='bg-[#354a5f] h-52 flex flex-col items-center justify-center text-center mb-4 p-4'>
          <h2 className='text-white text-5xl font-bold'>Edit A Listing</h2>
        </div>
      </section>
      <section>
        <EditForm />
      </section>
    </>
  )
}

export default EditCar
