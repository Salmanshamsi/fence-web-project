import React from 'react'

const PlaceSearchBar = () => {
  return (
        <div className='flex flex-col gap-3 items-center justify-start w-full' >
                <input type="text" placeholder='Enter your address to begin'  className='h-8 w-full px-2 border border-green-500 rounded-full  text-sm' />
        </div>
  )
}

export default PlaceSearchBar