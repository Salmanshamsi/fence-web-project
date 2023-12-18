import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialsDesigns from '../components/MaterialsDesigns/MaterialsDesigns'
import MaterialCard from '../components/MaterialRenderingCards/MaterialRenderingCards'
import json_data from "../assets/materialsData/materialsData.json"


const Materials = () => {


  return (
    <div className='flex flex-col'>     
        <div>
          <Navbar/>
        </div>
        <div className='flex lg:flex-row flex-col lg:mt-36 mt-48 '>
            <div className='lg:w-6/12 w-full h-full '>
              <div className='h-8 text-green-600 flex items-center justify-start p-5'>
                <p className=''>  Select a type and click continue ?</p>
              </div>
              <div className='lg:h-96 h-full overflow-scroll' >
                <MaterialCard Data={json_data} _Route={"type"} />
              </div>
            </div>
            <div className='border p-8 w-full h-full'>
              <MaterialsDesigns/>
            </div>
        </div>
    </div>
    
  )
}

export default Materials
