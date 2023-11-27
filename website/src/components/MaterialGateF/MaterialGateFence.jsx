import React from 'react'
import "./MaterialGateFence.css"
import DrawCanvas from '../Canvas/DrawCanvas'

const MaterialGateFence = () => {
  return (
    <div>
        <div className="designandinfo">
            <button>Design</button>
            {/* <button className='infoBtn'>Information</button> */}
        </div>
         <div className='overflow-x-hidden overflow-y-hidden' >
                {/* <DrawCanvas/> */}
            </div>
    </div>
  )
}

export default MaterialGateFence
