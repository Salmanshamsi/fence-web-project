import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import ZipCodeBar from '../components/Zip-Code-Bar/ZipCodeBar';


const StoreScreen = () => {
  
    return (
    <div className='flex flex-col' >        
        <div>
          <Navbar/>
        </div>
        <div className='mt-14'>
          <ZipCodeBar/>
        </div>
    </div>
  )
}

export default StoreScreen