import React from 'react'
import Summary from '../components/Summary/Summary'
import Navbar from '../components/Navbar/Navbar'

const SummaryScreen = () => {
  return (
    <div className='h-screen flex-col flex w-full' >
      <div>
          <Navbar/>
        </div>
        <div className='h-full w-full mt-12' >
          <Summary/>
        </div>
    </div>
  )
}

export default SummaryScreen
