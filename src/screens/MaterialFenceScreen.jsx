import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialFence from '../components/Material_Fence_Table/Material_Fence_Table'
import MaterialCard from '../components/MaterialRenderingCards/MaterialRenderingCards'
import json_data from "../assets/fenceData/fenceData.json"

const MaterialFenceScreen = () => {


  return (
    <div className='flex flex-col' >     
        <div>
          <Navbar/>
        </div>
        <div className='w-full flex lg:mt-28 mt-40 lg:flex-row  flex-col'>
            <div className='lg:w-6/12 w-full h-full px-2 pt-10 flex flex-col justify-center'>
              <div className='h-8 text-green-600 flex w-full items-center justify-start ' >
                <p>  Select a type and click continue ?</p>
              </div>
              <div className='lg:h-96 h-full overflow-scroll' >
                <MaterialCard Data={json_data} _Route={"fence"} />
              </div>
            </div>
            <div className='w-full h-full  border lg:mt-0 mt-10 lg:p-10'>
              <MaterialFence _route={"fence"} />
            </div>
        </div>

    </div>
  )
}

export default MaterialFenceScreen
