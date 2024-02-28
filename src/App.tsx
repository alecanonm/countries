import { DropMenu } from './components/DropMenu'
import { SearchBar } from './components/SearchBar'

function App() {
  return (
    <div className='App'>
      <section className='pt-12 flex flex-col gap-10 sm:flex-row justify-between px-8 sm:px-24 w-screen'>
        <SearchBar />
        <DropMenu />
      </section>
    </div>
  )
}

export default App
