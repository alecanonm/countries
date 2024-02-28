export default function SearchBar() {
  return (
    <div className='flex items-center shadow-3xl rounded-md hover:ring-1 ring-black'>
      <img src='search.png' className='ml-3' alt='lup' width={16} height={16} />
      <input
        type='text'
        className='outline-none rounded-md p-4 sm:w-[400px] font-bold'
        placeholder='Search for a country...'
      />
    </div>
  )
}
