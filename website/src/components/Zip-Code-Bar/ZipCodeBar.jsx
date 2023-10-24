import React from 'react'

const ZipCodeBar = () => {
  return (
    <div className='w-full h-auto p-3 flex items-center gap-2 py-2 px-4 border' >
            <h1 className='lg:text-md text-sm' >Please enter the zip code to find a store:</h1>
            <input type="text" className='border text-sm h-full rounded-full px-4 shadow-sm' placeholder="Enter Zip-Code"  />
    </div>
  )
}

export default ZipCodeBar