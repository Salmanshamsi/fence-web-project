import React from 'react'
import bg from "../assets/images/bg-picture.jpg"
import "../App.css"
import Homeside from '../components/home-side/Home-side'

const Home = () => {
  return (
    <div className='h-screen w-full bg-center bg-cover flex justify-center items-center flex-row text-white'
    style={{
        backgroundImage: `url(${bg})`,
      }}
    >
        <div className='w-full h-screen bg-black bg-opacity-80 overflow-y-scroll scrollbar-hidden'>
            <Homeside/>
        </div>
        <div className='w-full h-screen lg:flex hidden ' >

        </div>

    </div>
  )
}

export default Home






