import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import DrawSelection from '../components/DrawMenu/DrawSelection'

const DrawSelectionScreen = () => {
  return (
    <div className='flex flex-col' >
        <div>
          <Navbar/>
        </div>
        <div className='mt-14' >
          <DrawSelection/>
        </div>
    </div>
  )
}

export default DrawSelectionScreen