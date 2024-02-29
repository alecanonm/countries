import { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router'

export default function RootLyout() {
  const [theme, setTheme] = useState<string>('')

  return (
    <div className={theme}>
      <div className='dark:bg-darkModeBackground flex flex-col gap-16 items-center'>
        <header className='w-full'>
          <Navbar setTheme={setTheme} />
        </header>
        <main className='grow w-full '>
          <Outlet />
        </main>
        <footer className='p-4 bg-lightModeBackground dark:bg-darkBlueM dark:text-lightModeBackground w-full flex justify-center items-center'>
          <a
            className='font-bold'
            href='https://www.alecanonm.tech'
            target='blank'
          >
            &copy; AlejandroDev
          </a>
        </footer>
      </div>
    </div>
  )
}
