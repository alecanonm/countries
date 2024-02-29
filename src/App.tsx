import { Card } from './components/Card'
import { DropMenu } from './components/DropMenu'
import { SearchBar } from './components/SearchBar'
import { useCountryContext } from './context/CountryContext'

function App() {
  const { countriesCopy } = useCountryContext()
  return (
    <div className='grid grid-rows-2 gap-10'>
      <section className='row-span-2 flex flex-col md:items-center gap-10 md:flex-row justify-between px-8 sm:px-24'>
        <SearchBar />
        <DropMenu />
      </section>
      <section className='flex items-center gap-10 justify-center flex-wrap'>
        {countriesCopy?.map((item) => {
          const { svg: flag } = item.flags
          return (
            <Card
              key={item.name}
              name={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              url={flag}
            />
          )
        })}
      </section>
    </div>
  )
}

export default App
