import React, { useState } from 'react';
import JSON_DATA from '../jsondata/selectGate.json';
import { useDispatch, useSelector } from 'react-redux';
import { imgValue, textValue, setGateDetails} from '../../redux/slices/FenceDesignSlice';
import { PanelPrice, TotalPrice } from '../../redux/slices/FencePrice';
import "./MaterialPrew.css"

const MaterialsPrew = () => {
  const dispatch = useDispatch();
  const [totalLength,setTotalLength] = useState(useSelector((state)=>state.price.totalDrawLength))
  const getSelectedGate = (image, text, gateDetails,tp) => {
    dispatch(imgValue(image));
    dispatch(textValue(text));
    dispatch(setGateDetails(gateDetails));
    dispatch(PanelPrice(tp))
    dispatch(TotalPrice())
  };

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
      </div>
    </>
  );
};

export default MaterialsPrew;
