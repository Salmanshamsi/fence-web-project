import React from 'react'
import bg from "../assets/images/bg-picture.jpg"
import Homeside from '../components/HomeSideMenu/Home-side'

const Home = () => {
  return (
      <div className='w-full h-screen fixed top-0'>
          <div className='w-full bg-cover bg-center h-full flex text-white'
          style={{backgroundImage:`url(${bg})`}}
          >
                 <div className='bg-black bg-opacity-80 overflow-y-scroll scrollbar-hidden'>
                 <Homeside/>
                 </div>
                 <div className='w-full h-screen lg:flex hidden '> 
                 </div>
          </div>
      </div>
  )
}

export default Home






