import React, { useState } from 'react'
import OptionsTable from '../optionsTable/OptionsTable';

const Options = () => {
    const [isTable,setisCanvas] = useState(false)

    return (
      <div>
              <div className='lg:flex h-full w-full hidden' >
                  <div className='border h-full lg:w-4/12 w-full border-b-0' >
                      <div className='w-full p-3 text-green-500 ' >
                          <h1 className='border-b border-green-500 w-34' >
                            Select a post and click continue
                          </h1>
                      </div>
                      <div className='flex gap-3 p-2'>
                          <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                              <img src="https://designit.menards.com/media/Fence/selection/post/wood/1112201.jpg" className='w-full  bg-cover bg-center' alt="" />
                              <h1>4 x 4 x 10' #2 Ground Contact AC2® Timber</h1>
                          </div>
                          <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                              <img src="https://designit.menards.com/media/Fence/selection/post/wood/1112201.jpg" alt="" />
                              <h1>4 x 4 x 10' #2 Ground Contact AC2® Timber</h1>
                          </div>
                      </div>
              </div>
              <div className='border h-full w-8/12 lg:flex hidden flex-col p-2' >
                  <h1 className=' text-3xl' >FENCE POST SELECTION GUIDE</h1>
                  <div>
                    <OptionsTable/>
                  </div>
              </div>
          </div>
              <div className='lg:hidden flex' >
              {
                  (!isTable) ? <div className='border h-full w-full border-b-0'>
                                  <div className='w-full p-3 text-green-500 ' >
                                        <h1 className='border-b border-green-500 w-34' >
                                            Select a post and click continue
                                        </h1>
                                    </div>
                                    <div className='flex gap-3 p-2'>
                                        <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                                            <img src="https://designit.menards.com/media/Fence/selection/post/wood/1112201.jpg" className='w-full  bg-cover bg-center' alt="" />
                                            <h1>4 x 4 x 10' #2 Ground Contact AC2® Timber</h1>
                                        </div>
                                        <div className='border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2' >
                                            <img src="https://designit.menards.com/media/Fence/selection/post/wood/1112201.jpg" alt="" />
                                            <h1>4 x 4 x 10' #2 Ground Contact AC2® Timber</h1>
                                        </div>
                                    </div>
                                  </div> : <div className='border h-full w-full' >
                                            <h1 className=' text-3xl' >FENCE POST SELECTION GUIDE</h1>
                                                <div>
                                                    <OptionsTable/>
                                                </div>
                                           </div>
              }
                  <div className='w-full h-12 fixed bottom-0 z-50 flex items-center justify-center gap-3 bg-slate-500 opacity-80 lg:hidden'>
                          <button onClick={(e)=>{
                              e.preventDefault();
                              setisCanvas(true);
                          }} className={`rounded-full border ${!isTable ? "bg-green-500" : "bg-slate-500"} border-green-500 h-8 w-8`}></button>
                          <button onClick={(e)=>{
                              e.preventDefault();
                              setisCanvas(false)
                          }} className={`rounded-full border  ${ isTable ? "bg-green-500" : "bg-slate-500"} border-green-500 h-8 w-8`}></button>
                  </div>
              </div>
      </div>
    )
}

export default Options
