import React, { useState } from 'react'
import DrawCanvas from '../Canvas/DrawCanvas'

const Gates = () => {

    const [isCanvas,setisCanvas] = useState(false)

  return (
    <div>
            <div className='lg:flex h-full w-full hidden' >
                <div className='border h-full lg:w-4/12 w-full border-b-0' >
                    <div className='w-full p-3 text-green-500 ' >
                        <h1 className='border-b border-green-500 w-34' >
                            Place Gates & Openings
                        </h1>
                    </div>
                    <p className='mt-2 p-3' >
                        Select a gate or opening below adjust the size if applicable.
                        Select the fence side and click/tap place button. Adjust the location by dragging.
                    </p>
                    <div className='flex gap-3 p-2'>
                        <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                            <img src="https://designit.menards.com/media/Fence/selection/opening.jpg" className='w-full bg-cover bg-center' alt="" />
                            <h1>Add opening</h1>
                        </div>
                        <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                            <img src="https://designit.menards.com/media/Fence/selection/gates/wood-picket/1732157-gate.jpg" className='w-full bg-cover bg-center' alt="" />
                            <h1>Add Gate</h1>
                        </div>
                    </div>
                   </div>
            <div className='border h-full w-8/12 overflow-x-hidden overflow-y-hidden lg:flex hidden' >
                <DrawCanvas/>
            </div>
        </div>
            <div className='lg:hidden flex' >
            {
                (!isCanvas) ? <div className='border h-full w-full border-b-0'>
                                <div className='w-full p-3 text-green-500 ' >
                                    <h1 className='border-b border-green-500 w-34' >
                                        Place Gates & Openings
                                    </h1>
                                </div>
                                <p className='mt-2 p-3' >
                                    Select a gate or opening below adjust the size if applicable.
                                    Select the fence side and click/tap place button. Adjust the location by dragging.
                                </p>
                                <div className='flex gap-3 p-2'>
                                    <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                                        <img src="https://designit.menards.com/media/Fence/selection/opening.jpg" className='w-full bg-cover bg-center' alt="" />
                                        <h1>Add opening</h1>
                                    </div>
                                    <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                                        <img src="https://designit.menards.com/media/Fence/selection/gates/wood-picket/1732157-gate.jpg" className='w-full bg-cover bg-center' alt="" />
                                        <h1>Add Gate</h1>
                                    </div>
                                </div>
                                </div> : <div className='border h-full w-full' >
                                            <DrawCanvas/>
                                         </div>
            }
                <div className='w-full h-12 fixed bottom-0 z-50 flex items-center justify-center gap-3 bg-slate-500 opacity-80 lg:hidden'>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            setisCanvas(true);
                        }} className={`rounded-full border ${!isCanvas ? "bg-green-500" : "bg-slate-500"} border-green-500 h-8 w-8`}></button>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            setisCanvas(false)
                        }} className={`rounded-full border  ${ isCanvas ? "bg-green-500" : "bg-slate-500"} border-green-500 h-8 w-8`}></button>
                </div>
            </div>
    </div>
  )
}

export default Gates
