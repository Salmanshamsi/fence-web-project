import React, { useState } from 'react'

const Navbar = () => {

  const [Openmenu,setOpenMenu] = useState("hidden");


  return (
    <>
    <div className='hidden h-12 lg:flex  bg-green-700 text-white fixed w-full z-50' >

            <div className='flex  w-4/12 h-full items-center pl-10' >
                <div className='border-r border-white pr-2 ' >
                    <h1 className='text-sm' >Design and Buy<sup>TM</sup> Fence </h1>
                </div>
                <img src="" alt="" />
            </div>

            <ul className='flex  w-full gap-5 justify-center h-full items-center ' >
                <li className='hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer' >Select Store</li>
                <li className='hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer' >Design</li>
                <li className='hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer' >Materials</li>
                <li className='hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer' >summary</li>
                <li className='hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer' >Purchase</li>
            </ul>

            <ul className='flex  w-full gap-10 justify-end pr-20 h-full items-center p-2' >
                <li className='flex gap-2 items-center cursor-pointer' ><h1><i className="fa-solid fa-sd-card "></i></h1> save</li>
                <li className='flex gap-2 items-center cursor-pointer' ><h1><i className="fa-solid fa-sd-card "></i></h1> save as</li>
                <li className='flex gap-2 items-center cursor-pointer' ><h1><i className="fa-solid fa-file-circle-question"></i></h1> FAQ</li>
                <li className='flex gap-2 items-center cursor-pointer' ><h1><i className="fa-solid fa-user"></i></h1> Login</li>
            </ul>
            {/* Mobile screen */}
    </div>
      <div className='lg:hidden h-auto p-4 flex bg-green-700 text-white fixed w-full'>

          <div className='flex  w-full h-full items-center pl-2' >
              <div className='border-r border-white pr-2 ' >
                  <h3 className='text-sm' >Design and Buy<sup>TM</sup> Fence </h3>
              </div>
              <img src="" alt="" />
          </div>


            <div className='w-full h-full flex items-center justify-end pr-5 gap-7' >
                <button><i className="fa-solid fa-user"></i></button>
                <button
                  onClick={(e)=>{
                    e.preventDefault()
                     Openmenu == "hidden" ? setOpenMenu("visible") : setOpenMenu("hidden") 
                 }}
                ><i className="fa-solid fa-bars"></i></button>
            </div>

      </div>
      <ul className={`w-full ${Openmenu}`} >
          <li className='w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700' >Select Store</li>
          <li className='w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700' >Design</li>
          <li className='w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700' >Materials</li>
          <li className='w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700' >summary</li>
          <li className='w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700' >Purchase</li>
          <li className='w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700' >
            <ul className='flex items-center justify-center gap-3 p-3 transition-all transform duration-300' >
                <li className='flex gap-2 items-center cursor-pointer' ><h1><i className="fa-solid fa-sd-card "></i></h1> save</li>
                <li className='flex gap-2 items-center cursor-pointer' ><h1><i className="fa-solid fa-sd-card "></i></h1> save as</li>
                <li className='flex gap-2 items-center cursor-pointer' ><i className="fa-solid fa-file-circle-question"></i> FAQ</li>
            </ul>
          </li>
      </ul>
      </>
  )
}

export default Navbar