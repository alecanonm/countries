export default function Navbar() {
  return (
    <nav className='flex justify-between p-6 items-center bg-lightModeBackground shadow-sm sm:px-20'>
      <h1 className='sm:text-2xl font-extrabold'>Where in the world?</h1>
      <button className='flex gap-2'>
        <img src='moon.png' alt='light moon' width={20} height={18} />
        <span className='font-bold'>Dark Mode</span>
      </button>
    </nav>
  )
}
