import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import DrawSelection from '../components/drawSelection/DrawSelection'

const SelectionScreen = () => {
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

export default SelectionScreen