import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router'

export default function RootLyout() {
  return (
    <div className='h-screen flex flex-col items-center justify-center font-nanitoFont'>
      <header className='w-full'>
        <Navbar />
      </header>
      <main className='grow'>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  )
}
