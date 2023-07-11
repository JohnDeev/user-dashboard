import React from 'react'

export const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$5.323</p>
          <p className='to-gray-600'>Daile Revenue</p>
        </div>
        <div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+18</span>
          </p>
        </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$1.437.876</p>
          <p className='to-gray-600'>YTD Revenue</p>
        </div>
        <div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+10</span>
          </p>
        </div>
      </div>
      <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
        <div className='flex flex-col w-full pb-4'>
          <p className='text-2xl font-bold'>$11.876</p>
          <p className='to-gray-600'>Costumers</p>
        </div>
        <div>
          <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
            <span className='text-green-700 text-lg'>+15</span>
          </p>
        </div>
      </div>
    </div>
  )
}
