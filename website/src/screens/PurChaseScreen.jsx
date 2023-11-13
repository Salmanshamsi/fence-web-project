import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'
import MaterialGatePrew from '../components/MaterialGatePrew/MaterialGatePrew'
import "./MaterialGateScreen.css"
import MaterialGateFence from '../components/MaterialGateF/MaterialGateFence'
import Purchase from '../components/purchase/Purchase'

const PurCHaseScreen = () => {

 
  

  return (
    <div className='flex flex-col' >     
        <div>
          <Navbar/>
        </div>
        <div className='mt-12'>
          <MaterialsMenu/>
        </div>
        <hr />

        <div>
        <Purchase/>     
        </div>

    </div>
  )
}

export default PurCHaseScreen
