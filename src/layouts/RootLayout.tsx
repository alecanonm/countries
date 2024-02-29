import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router'

export default function RootLyout() {
  return (
    <div className='h-screen flex flex-col gap-16 items-center'>
      <header className='w-full'>
        <Navbar />
      </header>
      <main className='grow w-full'>
        <Outlet />
      </main>
      <footer className='p-4 bg-lightModeBackground w-full flex justify-center items-center'>
        <a href='https://www.alecanonm.tech' target='blank'>
          AlejandroDev
        </a>
      </footer>
    </div>
  )
}
