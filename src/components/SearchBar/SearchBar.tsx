import { useCountryContext } from '../../context/CountryContext'
import { ChangeEvent, useState } from 'react'

export default function SearchBar() {
  const [text, setText] = useState<string>('')
  const { countries, setCountriesCopy } = useCountryContext()

  const onchangeHanlder = function onchangeHanlder(
    e: ChangeEvent<HTMLInputElement>,
  ) {
    const value = e.target.value
    setText(value)

    const filteredCountry = countries.filter((country) =>
      country.name.toLowerCase().startsWith(value.toLowerCase()),
    )
    setCountriesCopy(filteredCountry)
  }

  return (
    <div className='flex dark:bg-darkBlueM items-center w-full sm:w-auto shadow-3xl rounded-md hover:ring-1 ring-black'>
      <img src='search.png' className='ml-3' alt='lup' width={16} height={16} />
      <input
        onChange={onchangeHanlder}
        value={text}
        type='text'
        className='outline-none dark:bg-darkBlueM text-lightModeBackground rounded-md p-4 sm:w-[400px] font-bold'
        placeholder='Search for a country...'
      />
    </div>
  )
}
