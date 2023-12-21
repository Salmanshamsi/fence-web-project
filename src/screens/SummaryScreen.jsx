import React from 'react'
import Navbar from '../components/Navbar'
import {useSelector, useDispatch} from "react-redux"
import DisabledCanvas from '../components/DisabledCanvas'
import { setIsPurchase } from '../redux/slices/RoutesChecking'
import {useNavigate} from "react-router-dom"



const SummaryScreen = () => {
        
    const Design_ID = useSelector((state) => state.selectedDesign.DesignId);   
    const totalLength = useSelector((state)=>state.selectedDesign.Design_length);
    const totalPrice = useSelector((state)=>state.selectedMaterials.PriceTotal) 
    const _Type = useSelector(state => state.selectedMaterials.Type_M[0].txt);
    const _Fence = useSelector(state => state.selectedMaterials.Fence_M[0].txt);
    const _Option = useSelector(state => state.selectedMaterials.Option_M[0].txt);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    if(Design_ID && totalLength && totalPrice && _Type && _Fence && _Option){
            dispatch(setIsPurchase(true))
    }


  return (
    <div>
        <div className="h-full flex-col flex w-full">
        <div>
            <Navbar />
        </div>
        <div className="h-full mt-24 w-full">
            
        <>
            <div className='w-full h-full lg:flex-row flex flex-col'>
            <div className='border h-full lg:w-6/12 w-full'>
            <div className='w-full p-3 text-green-500 ' >
                <h1 className='border-b border-green-500 w-34' >
                        Design complete! Print your design.
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 p-2 mt-8' >
                    <p>Below is a full summary of your fence. Please review it before moving forward.</p>
                    <button className='p-1 text-sm w-40 h-12 bg-green-500 text-white rounded-full' style={{backgroundColor:"green"}} onClick={(e)=>{
                                        e.preventDefault();
                                        print()
                                    }} >Print Design Packet</button>
            </div>
            
            <div className='mt-8 p-2' >
                    <div>
                        <h1 className='design-para'>Design:</h1>
                        <ul>
                            <li className='w-full h-8 flex' >
                                <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Length</div>
                                <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                                    <p>{totalLength}</p>
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
                                    <p>{_Type}</p>
                                    <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square" onClick={(e)=>{
                                        e.preventDefault();
                                        navigate("/materials/type")
                                    }}></i></h1>
                                </div>
                            </li>
                        </ul>


                        <ul>
                            <li className='w-full h-8 flex' >
                                <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Fence: </div>
                                <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                                    <p>{_Fence}</p>
                                    <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square" onClick={(e)=>{
                                        e.preventDefault();
                                        navigate("/materials/fence")
                                    }}></i></h1>
                                </div>
                            </li>
                        </ul>


                        <ul>
                            <li className='w-full h-8 flex' >
                                <div className='w-4/12 h-full border-black border flex p-2 items-center ' >Post : </div>
                                <div className='w-8/12 h-full border-black border flex justify-between items-center p-2 ' >
                                    <p>{_Option}</p>
                                    <h1 className='text-green-500' ><i className="fa-solid fa-pen-to-square" onClick={(e)=>{
                                        e.preventDefault();
                                        navigate("/materials/option")
                                    }}></i></h1>
                                </div>
                            </li>
                        </ul>

                    
                    </div>
            </div>
        
            </div>
            {/* Disabled Canvas */}
            <div className='border h-full w-full'>
                    <div className='p-3' >
                        <ul>
                            <li className='flex gap-3' >
                                <p className='designname font-bold'>{`Design Name : {Fence Design}`}</p>
                            </li>
                            <li className='flex gap-3' >
                                <p className='designId font-bold'>{`Design ID : ${Design_ID}`}</p>
                            </li>
                            <li className='flex gap-3' >
                                <p className='summaryPrice font-bold'>{`Estimated Price : ${totalPrice}$ `}</p>
                            </li>
                        </ul>
                    </div>
                    
                    <p className='mx-2 estimate' >*Today's estimated price, future pricing may go up or down. Tax, labor, and delivery not included.</p>
            
                    <div className='' >
                        <DisabledCanvas/>
                    </div>

            </div>
        </div>
        </>
            
        </div>
        </div>
    </div>
  )
}

export default SummaryScreen
