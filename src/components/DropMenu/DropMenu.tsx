export default function DropMenu() {
  return (
    <div className='flex items-center gap-3 mb-1 w-52 rounded-md p-4  outline-none shadow-3xl'>
      <select className='bg-white'>
        <option defaultValue='Filter by Region' hidden>
          Filter by Region
        </option>
        <option value='africa'>Africa</option>
        <option value='america'>America</option>
        <option value='asia'>Asia</option>
        <option value='europe'>Europe</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div>
  )
}
