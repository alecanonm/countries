import { useCountryContext } from '../../context/CountryContext'
import { ChangeEvent } from 'react'

export default function DropMenu() {
  const { countries, setCountriesCopy } = useCountryContext()

  const onchangeHanlder = function onchangeHanlder(
    e: ChangeEvent<HTMLSelectElement>,
  ) {
    const filterCountries = countries.filter(
      (country) =>
        country.region.toLowerCase() === e.target.value.toLowerCase(),
    )

    setCountriesCopy(filterCountries)

    console.log(e.target.value)
  }

  return (
    <div className='flex items-center gap-3 mb-1 w-52 rounded-md p-4  outline-none shadow-3xl'>
      <select
        onChange={onchangeHanlder}
        className='bg-white ring-none outline-none'
      >
        <option defaultValue='Filter by Region' hidden>
          Filter by Region
        </option>
        <option value='africa'>Africa</option>
        <option value='americas'>Americas</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  )
}
