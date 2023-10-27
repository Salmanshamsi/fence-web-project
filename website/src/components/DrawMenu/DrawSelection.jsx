import React from 'react'
import { Link } from 'react-router-dom'

const DrawSelection = () => {

  return (
    <div className='h-full lg:p-24 lg:gap-8 gap-16 w-full text-gray-700 flex flex-col justify-center items-center '>
        <div className='text-4xl m-4' >
            How would you like to estimate your fence?
        </div>
        <div className='flex w-full lg:flex-row flex-col  lg:gap-0  gap-5 text-green-800' >
            <div className='w-full flex-col gap-20 lg:border-r  flex items-center justify-center' >
                <h1>Find fence dimensions with Google Maps</h1>
                <div className='text-7xl'>
                    <i className="fa-solid fa-map-location-dot fa-2xl"></i>
                </div>
                <Link
                to={'/map'}
                className='text-center text-white flex items-center justify-center w-28 transition duration-100 hover:-translate-y-1 lg:w-44 lg:p-4 p-2 lg:text-lg text-md h-12 bg-green-800 rounded-full ' >Google Map</Link>
            </div>
            <div className='w-full flex-col gap-20 flex items-center justify-center' >
                <h1>Manually enter my fence dimensions</h1>
                <div className='text-7xl'>
                <i className="fa-solid fa-compass-drafting fa-2xl"></i>
                </div>
                <Link className='text-center text-white flex items-center justify-center w-28 transition duration-100 hover:-translate-y-1 lg:w-44 lg:p-4 p-2 lg:text-lg text-md h-12 bg-green-800 rounded-full ' 
                 to={'/canvas'}
                >Draw Canvas</Link>
            </div>
        </div>
    </div>
  )
}

export default DrawSelection