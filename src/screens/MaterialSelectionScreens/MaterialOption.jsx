import React from 'react'
import Navbar from '../../components/Navbar'
import MaterialsCard from '../../components/MaterialsCards'
import MaterialsTable from '../../components/MaterialsTable'
import jsonData from "../../assets/optionsData/optionsData.json"

const MaterialOption = () => {
  return (
    <div>
        <div className='flex flex-col' >     
            <div>
            <Navbar/>
            </div>
            <div className='w-full flex lg:mt-28 mt-40 lg:flex-row flex-col-reverse '>
                <div className='lg:w-6/12 w-full h-full px-2 mt-10'>
                <div className='h-8 text-green-600 flex w-full items-center justify-start ' >
                <p className=''>  Select a type and click continue ?</p>
                </div>
                <div className='lg:h-auto h-full overflow-scroll' >
                        <MaterialsCard Data={jsonData} _Route={"option"} />
                </div>  
                </div>
                <div className='w-full h-full  border lg:mt-0 mt-10 lg:p-10'>
                <MaterialsTable _route={"option"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MaterialOption
