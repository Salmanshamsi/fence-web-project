import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import DrawSelection from '../components/DrawMenu/DrawSelection'

const DrawSelectionScreen = () => {
  return (
    <div className='flex flex-col' >
        <div>
          <Navbar/>
        </div>
        <div className='lg:h-screen lg:fixed h-full w-full lg:pt-0 pt-14 mt-10' >
          <div className=''>
            <DrawSelection/>
          </div>
        </div>
    </div>
  )
}

export default DrawSelectionScreen