import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Purchase from '../components/purchase/Purchase'

const PurCHaseScreen = () => {

  return (
    <div className='flex flex-col' >     
        <div>
          <Navbar/>
        </div>
        <hr />
        <div className='mt-20'>
          <Purchase/>     
        </div>

    </div>
  )
}

export default PurCHaseScreen
