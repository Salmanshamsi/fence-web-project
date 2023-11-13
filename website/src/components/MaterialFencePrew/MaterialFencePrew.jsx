import React from 'react'
import selectWood from "../woodjson/woodData.json"
import "./MaterialFencePrew.css"
import { useDispatch, useSelector } from 'react-redux'
import { woodSelection } from '../../redux/slices/FenceDesignSlice'
import { FencePrice, TotalPrice } from '../../redux/slices/FencePrice'


const MaterialFencePrew = () => {

  const dispatch = useDispatch();
  const totalLength = useSelector((state)=>state.price.totalDrawLength)

  const selectWoodSide = (text,tp) => {
    dispatch(woodSelection(text));
    dispatch(FencePrice(tp));
    dispatch(TotalPrice())
  }

  return (
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
  )
}

export default MaterialFencePrew
