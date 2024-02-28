export default function DropMenu() {
  return (
    <select className='flex items-center gap-3 mb-1 w-52 rounded-md p-4 bg-white outline-none shadow-3xl'>
      <option selected disabled hidden value='none'>
        Filter by Region
      </option>
      <option value='africa'>Africa</option>
      <option value='america'>America</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </select>
  )
}
