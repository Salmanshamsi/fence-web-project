import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'
import MaterialsPrew from '../components/MaterialsPrew/MaterialsPrew'
import MaterialsDesigns from '../components/MaterialsDesigns/MaterialsDesigns'
import MaterialFence from '../components/MaterialFence/MaterialFence'
import MaterialFencePrew from '../components/MaterialFencePrew/MaterialFencePrew'
import "./MaterialScreen.css"
import EstimatePriceModal from '../components/EstimatePriceModal/EstimatePriceModal'

const Materials = () => {

  const currentURL = window.location.href;
  let comp;
  let prew;

  console.log(currentURL)

  if(currentURL === "http://localhost:5174/materials"){
     comp = 
     prew = <MaterialsPrew/>
  }else if(currentURL === "http://localhost:5174/materials/fence"){
    comp = <MaterialFence/>
    prew = <MaterialFencePrew/>  
  }

  return (
    <div className='flex flex-col ' >     
        <div>
          <Navbar/>
        </div>
        <div className='mt-12'>
          <MaterialsMenu/>
        </div>
        <div className='w-full overflow-x-hidden p-5 fixed mt-20 bg flex justify-end' >
          <EstimatePriceModal/>
        </div>
        <div className='h-screen flex columns addcompletewidth'>
            <div className='w-4/12 h-full '>
              <div className='h-8 text-green-600 flex items-center justify-start p-5 addfullw'>
              <p className='fullWidthofmaterialPrew'>  Select a type and click continue ?</p>
              </div>
              <MaterialsPrew/>
            </div>
            <div className='border w-8/12 h-full'>
            <MaterialsDesigns/>
            </div>
        </div>
    </div>
  )
}

export default Materials
