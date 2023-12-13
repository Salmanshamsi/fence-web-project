import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'
import MaterialFence from '../components/MaterialFence/MaterialFence'
import MaterialFencePrew from '../components/MaterialFencePrew/MaterialFencePrew'
import "./MaterialFenceScreen.css"
import EstimatePriceModal from '../components/EstimatePriceModal/EstimatePriceModal'

const MaterialFenceScreen = () => {


  return (
    <div className='flex flex-col' >     
        <div>
          <Navbar/>
        </div>
        <div className='mt-12'>
          <MaterialsMenu/>
        </div>
        <div className='w-auto overflow-x-hidden  fixed right-5 mt-20 bg flex justify-end' >
          <EstimatePriceModal/>
        </div>
        <div className='w-full h-screen flex column cW'>
            <div className='w-4/12 h-full '>
              <div className='h-8 text-green-600 flex items-center justify-start p-5 addcompW' >
               <p className='selectType'>  Select a type and click continue ?</p>
              </div>
              <MaterialFencePrew/>  
            </div>
            <div className='border w-8/12 h-full materialDesignmaincompdiv'>
            <MaterialFence/>
            </div>
        </div>

    </div>
  )
}

export default MaterialFenceScreen
