import { Card } from './components/Card'
import { DropMenu } from './components/DropMenu'
import { SearchBar } from './components/SearchBar'

function App() {
  return (
    <div className='grid grid-rows-2 gap-10'>
      <section className='row-span-2  flex flex-col items-center gap-10 sm:flex-row justify-between px-8 sm:px-24'>
        <SearchBar />
        <DropMenu />
      </section>
      <section className=' flex items-center justify-center px-8'>
        <Card />
      </section>
    </div>
  )
}

export default App
