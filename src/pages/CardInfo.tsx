import { useCountryContext } from '../context/CountryContext'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export default function CardInfo() {
  const { name } = useParams()
  const { countries } = useCountryContext()

  const country = countries.find(function findCountry(country) {
    return country.name === name
  })

  const {
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = country

  const countryLanguages = languages
    ?.map(function nameLanguage(language: { name: string }): string {
      return language.name
    })
    .join(', ')

  const countryCurrencies = currencies
    ?.map(function getCurrencies(currency: { name: string }): string {
      return currency.name
    })
    .join(', ')

  const borderCountries = countries
    ?.filter((country) => borders?.includes(country.alpha3Code))
    .map((country) => country.name)

  console.log(borderCountries)

  return (
    <article className='justify-start md:grid  lg:grid-cols-2 gap-20 place-items-center container mx-auto px-10'>
      <figure className='sm:w-[502px] sm:h-[362px] overflow-hidden'>
        <img src={flag} alt='name' className='w-full h-full' />
      </figure>
      <section className=' pt-10 flex flex-col gap-12'>
        <h1 className='text-3xl font-bold'>{name}</h1>
        <div className='flex flex-col sm:flex-row gap-10 sm:gap-40'>
          <ul>
            <li>
              <span className='font-bold'>Native Name: </span>
              {nativeName}
            </li>
            <li>
              <span className='font-bold'>Population: </span>
              {population}
            </li>
            <li>
              <span className='font-bold'>Region: </span>
              {region}
            </li>
            <li>
              <span className='font-bold'>Sub Region: </span>
              {subregion}
            </li>
            <li>
              <span className='font-bold'>Capital: </span>
              {capital}
            </li>
          </ul>
          <ul>
            <li>
              <span className='font-bold'>Top Level Domain: </span>
              {topLevelDomain}
            </li>
            <li>
              <span className='font-bold'>Currencies: </span>
              {countryCurrencies}
            </li>
            <li>
              <span className='font-bold'>Languages: </span>
              {countryLanguages}
            </li>
          </ul>
        </div>
        <section className='flex flex-col sm:flex-row gap-5 flex-wrap'>
          <h3 className='font-semibold'>Border countries:</h3>
          <div className='flex flex-wrap gap-6 sm:gap-4'>
            {borderCountries.map((border) => {
              return (
                <Link to={`/${border}`}>
                  <button
                    key={border}
                    className='shadow-3xl px-4 rounded-md p-[2px] '
                  >
                    {border}
                  </button>
                </Link>
              )
            })}
          </div>
        </section>
      </section>
    </article>
  )
}
