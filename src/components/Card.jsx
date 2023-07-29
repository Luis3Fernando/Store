import React from 'react'

function Card(data) {
  return (
    <div className='bg-white cursor-pointer w-60 h-65 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-1'>book</span>
          <img className='w-full h-full object-cover rounded-lg' src={data.data.picture.url} alt="hradphone" />
          <div className='absolute top-2 right-2 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1'>+</div>
      </figure>
      <p className='flex justify-between'>
          <span className='text-sm font-light'>{data.data.title}</span>
          <span className='text-lg font-medium'>$300</span>
      </p>
    </div>
  )
}

export default Card
