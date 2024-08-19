import React, { useState, useEffect } from 'react'
import { HiOutlineMagnifyingGlass, HiOutlineChevronDown } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import {
  useSearchCarsQuery,
  useGetMakesQuery,
  useGetModelsQuery,
  useGetYearsQuery,
  useGetPricesQuery,
} from '../../slices/carsApiSlice'

const SearchHome = () => {
  const navigate = useNavigate()

  //local state for selections
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')

  // State for dropdowns visibility
  const [makeOpen, setMakeOpen] = useState(false)
  const [modelOpen, setModelOpen] = useState(false)
  const [yearOpen, setYearOpen] = useState(false)
  const [priceOpen, setPriceOpen] = useState(false)

  //fetch makes
  const { data: makes, isLoading: makesIsLoading } = useGetMakesQuery()

  //fetch models based on selected make
  const { data: models, isLoading: modelsIsLoading } = useGetModelsQuery(
    selectedMake,
    { skip: !selectedMake } // Skip the query if no make is selected
  )

  //fetch years based on selected make and model
  const { data: years, isLoading: yearsIsLoading } = useGetYearsQuery(
    {
      make: selectedMake,
      model: selectedModel,
    },
    { skip: !selectedMake || !selectedModel } // Skip the query if no make or model is selected
  )

  //fetch prices based on selected make, model, and year
  const { data: prices, isLoading: pricesIsLoading } = useGetPricesQuery(
    {
      make: selectedMake,
      model: selectedModel,
      year: selectedYear,
    },
    { skip: !selectedMake || !selectedModel || !selectedYear } // Skip the query if no make, model, or year is selected
  )

  //Handle search action
  const { data: searchResults } = useSearchCarsQuery(
    {
      make: selectedMake,
      model: selectedModel,
      year: selectedYear,
      price: selectedPrice,
    },
    { skip: !selectedMake || !selectedModel || !selectedYear || !selectedPrice } // Skip the query if no make, model, year, or price is selected
  )

  // const toggleDropdown = (setter, value) => () => setter(!value)

  const handleMakeChange = (make) => {
    setSelectedMake(make)
    setSelectedModel('')
    setSelectedYear('')
    setSelectedPrice('')
    setMakeOpen(false)
  }

  const handleModelChange = (model) => {
    setSelectedModel(model)
    setSelectedYear('')
    setSelectedPrice('')
    setModelOpen(false)
  }

  const handleYearChange = (year) => {
    setSelectedYear(year)
    setSelectedPrice('')
    setYearOpen(false)
  }

  const handlePriceChange = (price) => {
    setSelectedPrice(price)
    setPriceOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    navigate('/results', { state: { cars: searchResults } })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-wrap justify-between p-2 md:p-4 mx-auto bg-white lg:rounded-full md:rounded-full rounded'>
          {/* Make Dropdown */}
          <Dropdown
            label={selectedMake || 'Make'}
            open={makeOpen}
            toggle={() => setMakeOpen(!makeOpen)}
            options={makes}
            onSelect={handleMakeChange}
            loading={makesIsLoading}
          />

          {/* Model Dropdown */}
          <Dropdown
            label={selectedModel || 'Model'}
            open={modelOpen}
            toggle={() => setModelOpen(!modelOpen)}
            options={models}
            onSelect={handleModelChange}
            loading={modelsIsLoading}
          />

          {/* Year Dropdown */}
          <Dropdown
            label={selectedYear || 'Year'}
            open={yearOpen}
            toggle={() => setYearOpen(!yearOpen)}
            options={years}
            onSelect={handleYearChange}
            loading={yearsIsLoading}
          />

          {/* Price Dropdown */}
          <Dropdown
            label={selectedPrice || 'Price'}
            open={priceOpen}
            toggle={() => setPriceOpen(!priceOpen)}
            options={prices}
            onSelect={handlePriceChange}
            loading={pricesIsLoading}
          />

          <div className='mt-2 md:mt-0 flex justify-center w-full md:w-auto'>
            <button
              type='submit'
              className='bg-blue-500 text-white rounded-full p-2 md:p-4 hover:bg-blue-600 flex items-center justify-center'
            >
              <HiOutlineMagnifyingGlass />
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

const Dropdown = ({ label, open, toggle, options, onSelect }) => (
  <div className='relative w-full md:w-40'>
    <div
      className='cursor-pointer flex items-center justify-between bg-white border border-gray-300 rounded-lg p-2
    lg:border lg:border-r-gray-300 lg:border-t-0 lg:border-b-0 lg:border-l-0 lg:rounded-none'
      onClick={toggle}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && toggle()}
    >
      <span className='mr-6'>{label}</span>
      <HiOutlineChevronDown />
    </div>
    {open && (
      <ul
        className='absolute left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-50'
        role='listbox'
      >
        {options?.map((option) => (
          <li
            key={option}
            className='p-2 hover:bg-gray-200 cursor-pointer'
            onClick={() => onSelect(option)}
            role='option'
          >
            {option}
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default SearchHome
