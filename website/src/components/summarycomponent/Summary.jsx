import React from 'react'
import "./Summary.css"
import { useSelector } from 'react-redux'
import DisabledCanvas from '../disablecanvas/DisabledCanvas'

const Summary = () => {


    let cUrl = window.location.href;
    const mRandomID = useSelector((state) => state.randomIdSlice.grandomId);
    const totalLength = useSelector((state)=>state.price.totalDrawLength)
    const totalPrice = useSelector((state)=>state.price.totalPrice)
    const name = useSelector((state) => state.selecteddesigns.designText);
    const woodse = useSelector((state) => state.selecteddesigns.woodS);
    const count = useSelector((state) => state.allCartData.value);
    const op = useSelector((state) => state.selecteddesigns.opselect);

    
    const editName = () => {
        if(cUrl === "http://localhost:5173/summary"){
            navigate("/materials/type");
        }
    }

    const editTheCanvas = () => {
        navigate("/canvas")
    }

    const editWoodSe = () => {
        if(cUrl === "http://localhost:5173/summary"){
            navigate("/materials/fence");
        }
    }

    const editOp = () => {
        if(cUrl === "http://localhost:5173/summary"){
            navigate("/materials/option");
        }
    }


    const handlePrint = () => {
        window.print();
      };

  return (
    <>
        <div className='w-full h-full lg:flex-row flex flex-col'>
      <div className='border h-full lg:w-4/12 w-full'>
      <div className='w-full p-3 text-green-500 ' >
          <h1 className='border-b border-green-500 w-34' >
              Place Gates & Openings
          </h1>
      </div>
      <div className='flex flex-col items-center justify-center gap-3 p-2 mt-8' >
            <p>Below is a full summary of your fence. Please review it before moving forward.</p>
            <button className='p-1 text-sm w-40 h-12 bg-green-500 text-white rounded-full' style={{backgroundColor:"green"}} onClick={handlePrint} >Print Design Packet</button>
      </div>
      <div className='mt-8 p-2' >
            <div>
                <h1 className='design-para'>Design:</h1>
                <ul>
                    <li className='w-full h-8 flex' >
                        <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Length</div>
                        <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                            <p>{totalLength}</p>
                            <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square" onClick={editTheCanvas}></i></h1>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='materials-para'>Material:</h1>
                <ul>
                    <li className='w-full h-8 flex' >
                        <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Type</div>
                        <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                            <p>{name}</p>
                            <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square" onClick={editName}></i></h1>
                        </div>
                    </li>
                </ul>


                <ul>
                    <li className='w-full h-8 flex' >
                        <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Fence: </div>
                        <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                            <p>{woodse}</p>
                            <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square" onClick={editWoodSe}></i></h1>
                        </div>
                    </li>
                </ul>


                <ul>
                    <li className='w-full h-8 flex' >
                        <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Post : </div>
                        <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                            <p>{op}</p>
                            <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square" onClick={editOp}></i></h1>
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
                        <p className='designname'>{`Design Name : {Fence Design}`}</p>
                    </li>
                    <li className='flex gap-3' >
                        <p className='designId'>{`Design ID : ${mRandomID}`}</p>
                    </li>
                    <li className='flex gap-3' >
                        <p className='summaryPrice'>{`Estimated Price : ${totalPrice*count}$ `}</p>
                    </li>
                </ul>
            </div>
            
            <p className='mx-2 estimate' >*Today's estimated price, future pricing may go up or down. Tax, labor, and delivery not included.</p>
      
            <div className='overflow-x-hidden overflow-y-hidden' >
            <DisabledCanvas/>
            </div>

      </div>
        </div>
        </>
  )
}

export default Summary
