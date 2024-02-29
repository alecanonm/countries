import { useCountryContext } from '../../context/CountryContext'
import { Link } from 'react-router-dom'

export default function Navbar({ setTheme }: any) {
  const { countries, setCountriesCopy } = useCountryContext()

  const onClickHandler = function onClickHandler() {
    setCountriesCopy(countries)
  }

  return (
    <nav className='flex justify-between dark:bg-darkBlueM dark:text-lightModeBackground p-6 items-center bg-lightModeBackground shadow-sm sm:px-20'>
      <Link to='/'>
        <h1 onClick={onClickHandler} className='sm:text-2xl font-extrabold'>
          Where in the world?
        </h1>
      </Link>
      <button
        onClick={() => setTheme((prev: any) => (prev === '' ? 'dark' : ''))}
        className='flex gap-2'
      >
        <img src='moon.png' alt='light moon' width={20} height={18} />
        <span className='font-bold'>Dark Mode</span>
      </button>
    </nav>
  )
}
