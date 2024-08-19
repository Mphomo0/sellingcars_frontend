import CarListComponent from '../../components/admin/CarListComponent'

const CarList = () => {
  return (
    <>
      <section className='relative'>
        <div className='bg-[#354a5f] h-52 flex flex-col items-center justify-center text-center mb-4 p-4'>
          <h2 className='text-white text-5xl font-bold'>Car List</h2>
        </div>
      </section>

      <section className='container mx-auto'>
        <CarListComponent />
      </section>
    </>
  )
}

export default CarList
