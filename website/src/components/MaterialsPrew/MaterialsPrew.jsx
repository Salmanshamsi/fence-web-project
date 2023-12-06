import React, { useEffect, useState } from 'react';
import JSON_DATA from '../jsondata/selectGate.json';
import { useDispatch, useSelector } from 'react-redux';
import { imgValue, textValue, setGateDetails} from '../../redux/slices/FenceDesignSlice';
import { PanelPrice, TotalPrice } from '../../redux/slices/FencePrice';
import "./MaterialPrew.css"
import { useNavigate } from 'react-router-dom';

const MaterialsPrew = () => {
  const dispatch = useDispatch();
  const [totalLength,setTotalLength] = useState(useSelector((state)=>state.price.totalDrawLength))
  const [gateSelected, setGateSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [firstModalVal , setFirstModalVal] = useState('');
  const [secondModalVal , setSecondModalVal] = useState('');
  const [modalBtnVal , setModalBtnVal] = useState('');
  const navigate = useNavigate();
  const getSelectedGate = (image, text, gateDetails,tp) => {
    
    dispatch(imgValue(image));
    dispatch(textValue(text));
    dispatch(setGateDetails(gateDetails));
    dispatch(PanelPrice(tp))
    dispatch(TotalPrice())
    setGateSelected(true);
    console.log(image)
  };
  
  let getCUrl = window.location.href;

  const handleContinue = () => {
    if (gateSelected) {
      navigate("/materials/fence");
    } else {
      // Show modal for not selecting a gate
      setFirstModalVal("Design Warning");
      setSecondModalVal("You must select a product before continuing.");
      setModalBtnVal("Ok");
      setShowModal(true);
    }
    
  } 
  return (
    <>
      <div className='gateSelectedArea'>
        {JSON_DATA.map((ele,ind) => (
          <button
          key={ind}
            className="fbox"
            style={{
              height: '200px',
              width: '200px',
              marginTop: '1.5rem',
              border: '1px solid black',
              marginLeft: '2rem',
              padding: '1rem',
              cursor: 'pointer',
            }}
            onClick={() => {
              let total_price = (ele.price * totalLength);
              getSelectedGate(ele.img, ele.txt, ele.gateDetails,total_price);
            }}
            >
            <img
              src={ele.img}
              alt=""
              style={{ height: '150px', width: '170px' }}
            />
            <p style={{ textAlign: 'center', marginTop: '.2rem' }}>
              {ele.txt}
            </p>
          </button>
        ))}
            <button className='absolute top-20 right-10' style={{backgroundColor:"green" , position:"absolute" , right:"2%" , top:"8.5%" , padding:".5rem 2rem" , color:"#fff" , borderRadius:"20px"}}  onClick={handleContinue}>Continue</button>
      </div>
      {
        showModal ?   <div className="modal-container">
        <div className="modal-box">
             <div className="m-header">
                <p>{firstModalVal}</p>
             </div>
             <div className="m-txt">
                <p>{secondModalVal}</p>
                <button onClick={() => {setShowModal(false)}}>{modalBtnVal}</button>
             </div>
        </div>
       </div> : null
     }
    </>
  );
};

export default MaterialsPrew;
