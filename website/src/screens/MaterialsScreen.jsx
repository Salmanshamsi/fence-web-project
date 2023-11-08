import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'
import Gates from '../components/Gates/Gates'
import Options from '../components/options/options'

const Materials = () => {
  return (
    <div className='flex flex-col h-screen' >        
        <div>
          <Navbar/>
        </div>
        <div className='mt-12'>
          <MaterialsMenu/>
        </div>
        <div className='h-full w-full' >
          {/* <Gates/> */}
          <Options/>
        </div>
    </div>
  )
}

export default Materials
