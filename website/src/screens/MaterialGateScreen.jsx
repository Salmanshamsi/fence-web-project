import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'
import MaterialFence from '../components/MaterialFence/MaterialFence'
import MaterialFencePrew from '../components/MaterialFencePrew/MaterialFencePrew'
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
        <div className='w-full overflow-x-hidden p-5 fixed mt-20 bg flex justify-end' >
          <EstimatePriceModal/>
        </div>
        <div className='w-full h-screen flex column'>
            <div className='border w-4/12 h-full fullWidthofmaterialPrew'>
              <div className='w-full h-8 border text-green-600 flex items-center justify-start p-5 fullWidthofmaterialPrew' >
               <p>  Select a type and click continue ?</p>
              </div>
               <MaterialGatePrew/>
            </div>
            <div className='border w-8/12 h-full materialDesignmaincompdiv'>
            <MaterialGateFence/>
            </div>
        </div>

    </div>
  )
}

export default MaterialGateScreen
