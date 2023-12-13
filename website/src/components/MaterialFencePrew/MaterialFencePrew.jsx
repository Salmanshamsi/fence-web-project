import React from 'react'
import selectWood from "../woodjson/woodData.json"
import "./MaterialFencePrew.css"
import { useDispatch, useSelector } from 'react-redux'
import { woodSelection } from '../../redux/slices/FenceDesignSlice'
import { FencePrice, TotalPrice } from '../../redux/slices/FencePrice'
import { setSelectedFence } from '../../redux/slices/SelectionSlice'
import { useNavigate } from 'react-router-dom';


const MaterialFencePrew = () => {

  const dispatch = useDispatch();
  const totalLength = useSelector((state)=>state.price.totalDrawLength)

  
	const navigate = useNavigate();

  
  const handleContinue = () => {
		navigate("/materials/gate");
	  }
    

  const selectWoodSide = (text,tp) => {
    dispatch(woodSelection(text));
    dispatch(FencePrice(tp));
    dispatch(TotalPrice())
  }

  return (
    <>
      
		  <div className="w-full h-12 p-4 my-3 md:justify-end justify-start flex items-center ">
            <button
            className="border md:p-3 p-2 rounded-full bg-green-600 text-white"
            onClick={handleContinue}
            >
              continue
            </button>
      </div>
    <div className='materialFencePrew'>
        {selectWood.map((ele) => (
          <div
            key={ele.img}
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
              let total_price = ele.price * totalLength;
              selectWoodSide(ele.txt,total_price)
              dispatch(setSelectedFence({ heading: ele.txt }));
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
          </div>
        ))}
      </div>
      </>
  )
}

export default MaterialFencePrew
