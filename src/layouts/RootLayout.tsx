import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router'

export default function RootLyout() {
  return (
    <div className='h-screen flex flex-col gap-16 items-center font-nanitoFont w-full'>
      <header className='w-full'>
        <Navbar />
      </header>
      <main className='grow w-full'>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}
