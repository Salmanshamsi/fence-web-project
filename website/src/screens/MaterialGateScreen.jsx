import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'
import MaterialGatePrew from '../components/MaterialGatePrew/MaterialGatePrew'
import "./MaterialGateScreen.css"
import MaterialGateFence from '../components/MaterialGateF/MaterialGateFence'
import EstimatePriceModal from '../components/EstimatePriceModal/EstimatePriceModal'

const MaterialGateScreen = () => {

 

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
        <div className='w-full md:flex-row flex-col flex h-screen'>
            <div className=' w-full h-full'>
               <MaterialGatePrew/>
            </div>
            <div className='borde w-full h-full'>
            <MaterialGateFence/>
            </div>
        </div>

    </div>
  )
}

export default MaterialGateScreen
