import React from 'react'
import "./MaterialGateFence.css"
import DisabledCanvas from '../disablecanvas/DisabledCanvas'

const MaterialGateFence = () => {
  return (
    <div>
        <div className="designandinfo">
            <button>Design</button>
            {/* <button className='infoBtn'>Information</button> */}
        </div>
         <div className='overflow-x-hidden overflow-y-hidden' >
                {/* <DrawCanvas/> */}
                <DisabledCanvas/>
            </div>
    </div>
  )
}

export default MaterialGateFence
