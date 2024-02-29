type CardProps = {
  name: string
  population: string
  region: string
  capital: string
  url: string
}

export default function Card({
  name,
  population,
  region,
  capital,
  url,
}: CardProps) {
  return (
    <article className='shadow-3xl hover:cursor-pointer rounded-md overflow-hidden'>
      <figure className='w-64 h-64 overflow-hidden'>
        <img src={url} alt={name} className='object-cover w-full h-full' />
      </figure>
      <section className='flex p-5 pb-6 gap-3 w-64 flex-col justify-center items-start'>
        <h2 className='font-black text-lg line-clamp-1'>{name}</h2>
        <ul className='flex flex-col gap-1'>
          <li>
            <span className='font-bold'>Population: </span>
            {population}
          </li>
          <li>
            <span className='font-bold'>Region:</span> {region}
          </li>
          <li>
            <span className='font-bold'>Capital: </span>
            {capital}
          </li>
        </ul>
      </section>
    </article>
  )
}
