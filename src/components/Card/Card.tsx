export default function Card() {
  return (
    <article className='shadow-3xl rounded-md overflow-hidden'>
      <picture>
        <img
          src='https://flagcdn.com/w320/us.png'
          alt=''
          width={260}
          height={260}
        />
      </picture>
      <section className='flex p-5 pb-6 gap-3 flex-col justify-center items-start'>
        <h2 className='font-black text-lg'>United States of America</h2>
        <ul className='flex flex-col gap-1'>
          <li>
            <span className='font-bold'>Population: </span>329484123
          </li>
          <li>
            <span className='font-bold'>Region:</span> Americas
          </li>
          <li>
            <span className='font-bold'>Capital: </span>Washington, D.C.
          </li>
        </ul>
      </section>
    </article>
  )
}
