import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsMenu from '../components/MaterialsMenu/MaterialsMenu'
import MaterialsPrew from '../components/MaterialsPrew/MaterialsPrew'
import MaterialsDesigns from '../components/MaterialsDesigns/MaterialsDesigns'
import "./MaterialScreen.css"
import EstimatePriceModal from '../components/EstimatePriceModal/EstimatePriceModal'
import {useNavigate} from 'react-router-dom'


const Materials = () => {

  return (
    <div className='flex flex-col ' >     
        <div>
          <Navbar/>
        </div>
        <div className='mt-14'>
          <MaterialsMenu/>
        </div>
        <div className='w-auto overflow-x-hidden  fixed right-5 mt-20 bg flex justify-end' >
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
