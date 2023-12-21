import React, { useState } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import WarningModal from './WarningModal';
import { setFence_M_Data, setGate_M_Data, setOption_M_Data, setPriceTotal, setType_M_Data } from '../redux/slices/selectedMaterials';
import {setIsSummary } from '../redux/slices/RoutesChecking';

const MaterialsCard = ({Data ,_Route}) => {
  
    const dispatch = useDispatch();      
    const [showModal, setShowModal] = useState(false);
    const [firstModalVal, setFirstModalVal] = useState("");
    const [secondModalVal, setSecondModalVal] = useState("");
    const [gateInputHeader,setgateInputHeader] = useState("");
    const [activeBg , setActiveBg] = useState(null);

    const totalLength = useSelector((state)=>state.selectedDesign.Design_length)
    
    // ......Type Gate inputs...............................

    const [gateInpShow,setGateinpShow] = useState(false);
    const [gateWeidthInInchs,setGateWeidthInInchs] = useState(0);
    const [gateWeidthInFts,setGateWeidthInFts] = useState(0);
    const [gatePrice,setGatePrice] = useState(0);
    const [gateType,setGateType] = useState("remove");

    
    const handlePlaceButtonClick = () => {
      if (gateWeidthInFts || gateWeidthInInchs) {

            dispatch(setGate_M_Data({
                width : (gateWeidthInFts+(Number(gateWeidthInInchs/1000))),
                price : 10 * totalLength
              }))

        
      } else {
        setShowModal(true);
        setFirstModalVal("Selection Warning")
        setSecondModalVal(`add width for the selected ${gateType} to calculate price !`)
      }
    };


    const onClickHandler = (ele,ind) => {

      dispatch(setPriceTotal())
    
      let totalPrice = ele.price * totalLength;
      setActiveBg(ind)


      if(_Route === "type"){

          dispatch(setType_M_Data({
              img: ele.img,
              txt: ele.txt,
              Details : ele.Details,
              price: totalPrice
          }));

          dispatch(setIsSummary(true))
      
      }
      if(_Route === "fence"){

          dispatch(setFence_M_Data({
            img: ele.img,
            name: ele.txt,
            index:ind,
            price: totalPrice
        }));

        // dispatch(TotalPrice());
        // dispatch(FencePrice(totalPrice));
      
      }
      if(_Route === "gate"){

          if(ele.txt === "Remove Selection"){
              setGateinpShow(false);
              setGateType("remove");
          }else if(ele.txt === "Build a Gate"){
              setgateInputHeader(`"Build A Gate (width 3'0" ~ 10'0")"`)
              setGateinpShow(true);
              setGateType("gate");
          }else if(ele.txt === "Add Opening"){
              setgateInputHeader(`"Openings (width 2'0" ~ 100'0")`)
              setGateinpShow(true);
              setGateType("openings");
          }

      }
      if(_Route === "option"){

        dispatch(setOption_M_Data({
          img: ele.img,
          name: ele.txt,
          index:ind,
          price: totalPrice
      }));

      // setActiveBg(ind);
      // dispatch(TotalPrice());
      // dispatch(OptionPrice(totalPrice));
    
    }

    }

  
    return (
    <div className='w-full h-full flex flex-wrap justify-center gap-3 px-2' >
      {
        Data.map((ele,ind)=>{
            return(
                <div  key={ind}>
                  <div
                    className={`"
                    ${activeBg === ind ? "bg-green-500 text-white" : "bg-white"}
                    border flex flex-col gap-3 w-44 h-auto rounded-md shadow-md border-gray-500 p-2 `}
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(setIsSummary(true))
                      onClickHandler(ele,ind)
                    }}
                  >
                    <img
                      src={ele.img}
                      className="w-full  bg-cover bg-center"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                    <h1>{ele.txt}</h1>
                  </div>
                </div>
            )
        })
      }

        {gateInpShow ? <div className='w-full h-full mt-5' >
                      <div className='w-full h-12 bg-gray-400 flex items-center justify-between px-5' >
                          <h1>{gateInputHeader}</h1>
                          <h1 className='text-green-800 text-2xl' ><i className="fa-solid fa-angle-down"></i></h1>
                      </div>
                      <div className='flex items-center gap-2 p-2' >
                        <p>Width:</p>
                        <input type="number" onChange={(e)=>{
                          e.preventDefault();
                          setGateWeidthInFts(e.target.value)
                        }} className='w-20 border border-black rounded-full'  /> <p>ft</p> 
                        <input type="number"  onChange={(e)=>{
                          e.preventDefault();
                          setGateWeidthInInchs(e.target.value)
                        }} className='w-20 border border-black rounded-full'  /> <p>inchs</p> 
                        <button onClick={handlePlaceButtonClick} className='p-2 rounded-full bg-green-500 text-white' >Place</button>
                      </div>
                    </div>: ""
            }

      <WarningModal isOpen={showModal} setIsOpen={setShowModal} heading={firstModalVal} content={secondModalVal} />

    </div>
  )
}

export default MaterialsCard