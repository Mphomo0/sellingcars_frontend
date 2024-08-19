import React from 'react'
import AddForm from '../../components/admin/AddForm'

const AddCar = () => {
  return (
    <>
      <section className='relative'>
        <div className='bg-[#354a5f] h-52 flex flex-col items-center justify-center text-center mb-4 p-4'>
          <h2 className='text-white text-5xl font-bold'>Add A Listing</h2>
        </div>
      </section>
      <section>
        <AddForm />
      </section>
    </>
  )
}

export default AddCar
