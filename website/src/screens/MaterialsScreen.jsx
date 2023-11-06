import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'

const Materials = () => {
  return (
    <div className='flex flex-col' >        
        <div>
          <Navbar/>
        </div>
        <div className='mt-12'>
          <MaterialsMenu/>
        </div>
        <div className='w-full h-screen flex'>
            <div className='border w-4/12 h-full'>
              <div className='w-full h-8 border text-green-600 flex items-center justify-start p-5' >
                Select a type and click continue ?
              </div>
            </div>
            <div className='border w-8/12 h-full'>
                
            </div>
        </div>
    </div>
  )
}

export default Materials
