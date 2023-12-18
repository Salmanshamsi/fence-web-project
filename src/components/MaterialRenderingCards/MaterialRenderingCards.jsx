import React, { useState } from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import { SelectedDataDetails, SelectedDataImg, SelectedDataText } from '../../redux/slices/selectedData';
import { FencePrice, GatePrice, PanelPrice, TotalPrice, OptionPrice} from '../../redux/slices/FencePrice';
import { setFence_M_Data, setOption_M_Data, setType_M_Data } from '../../redux/slices/selectedMaterials';
import WarningModal from '../WarningModal/WarningModal';

const MaterialCard = ({Data ,_Route}) => {
  
    const dispatch = useDispatch();      
    const [showModal, setShowModal] = useState(false);
    const [firstModalVal, setFirstModalVal] = useState("");
    const [secondModalVal, setSecondModalVal] = useState("");
    const totalLength = useSelector((state)=>state.price.totalDrawLength)
    const [activeBg , setActiveBg] = useState(null);

    // ......Type Gate inputs...............................

    const [gateInpShow,setGateinpShow] = useState(false);
    const [gateWeidthInInchs,setGateWeidthInInchs] = useState(0);
    const [gateWeidthInFts,setGateWeidthInFts] = useState(0);


    const onClickHandler = (ele,ind) => {
    
      let totalPrice = ele.price * totalLength;

      if(_Route === "type"){

        dispatch(setType_M_Data({
            img: ele.img,
            txt: ele.txt,
            Details : ele.Details,
        }));

        setActiveBg(ind);
        dispatch(TotalPrice());

        dispatch(PanelPrice(totalPrice));
      }
      if(_Route === "fence"){
          dispatch(setFence_M_Data({
            img: ele.img,
            name: ele.txt,
            index:ind,
            route:"fence"
        }));
        setActiveBg(ind);
        dispatch(TotalPrice());
        dispatch(FencePrice(totalPrice));
      }
      if(_Route === "gate"){

          if(ele.txt !== "Remove Selection"){
              setGateinpShow(true);
          }else{
              setGateinpShow(false);
          }

          setActiveBg(ind);
          dispatch(TotalPrice());

        //  dispatch(setType_M_Data({
        //   img: ele.img,
        //   name: ele.txt,
        //   Details : ele.Details,
        //   }));

        // dispatch(GatePrice(totalPrice));

      }
      if(_Route === "option"){
          dispatch(setOption_M_Data({
          img: ele.img,
          name: ele.txt,
          index:ind,
      }));

      setActiveBg(ind);
      dispatch(TotalPrice());
      dispatch(OptionPrice(totalPrice));
    
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

      <WarningModal isOpen={showModal} setIsOpen={setShowModal} heading={firstModalVal} content={secondModalVal} />

    </div>
  )
}

export default MaterialCard
