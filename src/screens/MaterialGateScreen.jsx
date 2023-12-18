import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import MaterialGateFence from '../components/Material_Gate_DisCanv/Material_Gate_DisCanv'
import MaterialCard from '../components/MaterialRenderingCards/MaterialRenderingCards'
import json_data from "../assets/GateData/GateData.json"

const MaterialGateScreen = () => {

  const gateInpShow = false

  const handlePlaceButtonClick = () => {
    if (gateWeidthInFts || gateWeidthInInchs) {

    } else {
      showModal(true);
      firstModalVal("Selection Warning")
      secondModalVal("add width for the selected gate to calculate price !")
    }
  };


  return (
    <div className='flex flex-col' >     
        <div>
          <Navbar/>
        </div>
        <div className='w-full md:flex-row flex-col flex h-full mt-36 '>
            <div className='lg:w-6/12 w-full h-full flex flex-col  lg:mt-2 md:mt-2 mt-10'>
                <div className='lg:h-96 h-full overflow-scroll' >
                  <MaterialCard Data={json_data} _Route={"gate"} />
                </div>
                <div>
                {gateInpShow ? <div className='w-full h-full mt-5' >
                    <div className='w-full h-12 bg-gray-400 flex items-center justify-between px-5' >
                        <h1>Build A Gate (width 3'0" ~ 10'0")</h1>
                        <h1 className='text-green-800 text-2xl' ><i className="fa-solid fa-angle-down"></i></h1>
                    </div>
                    <div className='flex items-center gap-2 p-2' >
                      <p>Width:</p>
                      <input type="number" onChange={(e)=>{
                        e.preventDefault();
                        setGateWeidthInFts(e.target.value)
                      }} className='w-20 border border-black rounded-full'  /> <p>ft</p> 
                      <input type="number" onChange={(e)=>{
                        e.preventDefault();
                        setGateWeidthInInchs(e.target.value)
                      }} className='w-20 border border-black rounded-full'  /> <p>inchs</p> 
                      <button onClick={handlePlaceButtonClick} className='p-2 rounded-full bg-green-500 text-white' >Place</button>
                    </div>
                  </div>: ""
                }
                </div>
            </div>
            <div className='borde w-full h-full'>
              <MaterialGateFence/>
            </div>
        </div>

    </div>
  )
}

export default MaterialGateScreen
