import React from 'react'
import {useNavigate} from "react-router-dom"

const Homeside = () => {

    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate("/main")
    }

  return (
    <>
        <div className='lg:px-20 px-10 py-10 flex flex-col  justify-center gap-5'>
            <h1 className='lg:text-5xl text-3xl font-bold border-b-4 pb-5' >Design and Buy <sup className='text-2xl' >TM</sup> Fence</h1>
                <p className='lg:text-2xl text-lg font-bold' >DEFINE YOUR FENCE WITH STYLE, PRIVACY, OR SECURITY</p>
                <ul className='lg:text-xl text-sm font-medium lg:ps-5 flex flex-col gap-3 '>
                    <li className='flex flex-row gap-4' ><h1><i class="fa-solid fa-feather-pointed"></i></h1> Multiple Materials</li>
                    <li className='flex flex-row gap-4' ><h1><i class="fa-solid fa-feather-pointed"></i></h1> Custom Drawn Layout</li>
                    <li className='flex flex-row gap-4' ><h1><i class="fa-solid fa-feather-pointed"></i></h1> Add Gates & Openings</li>
                    <li className='flex flex-row gap-4' ><h1><i class="fa-solid fa-feather-pointed"></i></h1> Draw With Google Maps</li>
                </ul>
                <div className='flex lg:flex-row flex-col lg:items-center items-start justify-center lg:gap-3 gap-5 ' >
                    <button className='text-center w-28 transition duration-100 hover:-translate-y-1 lg:w-44 lg:p-4 p-2 lg:text-lg text-md h-full bg-green-800 rounded-full ' onClick={navigateToMain}>start design</button>
                    <button className='text-center w-28 transition duration-100 hover:-translate-y-1 lg:w-44 lg:p-4 p-2 lg:text-lg text-md h-full bg-green-800 rounded-full ' >saved design</button>
                </div>
                <ul className='lg:text-xl text-sm font-medium lg:ps-5 flex flex-col gap-3'>
                    <li className='flex flex-row gap-4' ><h1><i class="text-green-800 fa-solid fa-money-bills "></i></h1>Free Estimates</li>
                    <li className='flex flex-row gap-4' ><h1><i class="text-green-800 fa-solid fa-maximize "></i></h1>Customizable Design Features</li>
                    <li className='flex flex-row gap-4' ><h1><i class="text-green-800 fa-solid fa-sd-card "></i></h1>Save And Recall Designs</li>
                    <li className='flex flex-row gap-4' ><h1><i class="text-green-800 fa-solid fa-message "></i></h1>Chat With Experts</li>
                    <li className='flex flex-row gap-4' ><h1><i class="text-green-800 fa-solid fa-paper-plane"></i></h1>Email Your Design</li>
                    <li className='flex flex-row gap-4' ><h1><i class="text-green-800 fa-solid fa-cart-shopping"></i></h1>Order Online Or In-Store</li>
                </ul>
            </div>
    </>
  )
}

export default Homeside