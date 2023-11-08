import React from 'react'
import DrawCanvas from '../Canvas/DrawCanvas'

const Summary = () => {
  return (
    <div className='w-full h-full lg:flex-row flex flex-col'>
      <div className='border h-full lg:w-4/12 w-full'>
      <div className='w-full p-3 text-green-500 ' >
          <h1 className='border-b border-green-500 w-34' >
              Place Gates & Openings
          </h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 p-2 mt-8' >
            <p>Below is a full summary of your fence. Please review it before moving forward.</p>
            <button className='p-1 text-sm w-40 h-12 bg-green-500 text-white rounded-full' >Print Design Packet</button>
      </div>
      <div className='mt-8 p-2' >
            <div>
                <h1>Design:</h1>
                <ul>
                    <li className='w-full h-8 flex' >
                        <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Length</div>
                        <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                            <p>700''0</p>
                            <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square"></i></h1>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h1>Material:</h1>
                <ul>
                    <li className='w-full h-8 flex' >
                        <div className='w-4/12 h-full border-black border flex p-2 items-center ' >--</div>
                        <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                            <p>--</p>
                            <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square"></i></h1>
                        </div>
                    </li>
                </ul>
            </div>
      </div>
      </div>
      <div className='border h-full lg:w-8/12 w-full'>
            <div className='p-3' >
                <ul>
                    <li className='flex gap-3' >
                        <h1 className='font-bold' >Design Name:</h1>
                        <div>--</div>
                    </li>
                    <li className='flex gap-3' >
                        <h1 className='font-bold' >Design ID:</h1>
                        <div>--</div>
                    </li>
                    <li className='flex gap-3' >
                        <h1 className='font-bold' >Estimated Price:</h1>
                        <div>--</div>
                    </li>
                </ul>
            </div>
            
            <p className='mx-10' >*Today's estimated price, future pricing may go up or down. Tax, labor, and delivery not included.</p>
      
            <div className='overflow-x-hidden overflow-y-hidden' >
                <DrawCanvas/>
            </div>

      </div>
    </div>
  )
}

export default Summary
