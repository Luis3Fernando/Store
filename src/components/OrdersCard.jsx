import React from 'react'

function OrdersCard(data) {
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <p className='flex flex-col'>
          <span className='font-light'>01-31-2023</span>
          <span className='font-light'>{data.data.totalProducts}</span>
      </p>
    </div>
  )
}

export default OrdersCard
