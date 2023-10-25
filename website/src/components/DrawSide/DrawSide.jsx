import React from 'react'
import PlaceSearchBar from '../PlaceSearchBar/PlaceSearchBar'

const DrawSide = () => {
  return (
    <div className='w-full h-auto py-10 px-5 flex flex-col gap-9 items-center justify-center' >
            <div className='' >
                <h1 className='border-b-2 border-green-700 w-auto mb-10'>Select design method ?</h1>
                <div className='flex gap-4 p-2' >
                    <button className='hover:border-green-600 shadow-md hover:shadow-sm h-36 w-28 border rounded-xl flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-3xl' ><i className="fa-solid fa-earth-europe fa-2xl"></i></h1>
                        <p className='text-sm' >Measure with Google Map</p>
                    </button>
                    <button className='hover:border-green-600 shadow-md hover:shadow-sm h-36 w-28 border rounded-xl flex flex-col justify-center items-center gap-4'>
                        <h1 className='text-3xl' ><i className="fa-solid fa-compass-drafting fa-2xl"></i></h1>
                        <p className='text-sm' >Measure manually</p>
                    </button>
                </div>
            </div>
            <PlaceSearchBar/>
            <div className='w-full p-5 flex flex-col gap-4' >
                    <h1 className='text-xl font-bold' >Create your fence design</h1>
                    <ul className=' text-sm flex flex-col list-disc' >
                        <li>Click or tap and drag along the grid to draw your fence, letting go when the side is finished.</li>
                        <li>For connected sides, start a new segment by dragging from the endpoint of an existing side.</li>
                    </ul>
            </div>
    </div>
  )
}

export default DrawSide