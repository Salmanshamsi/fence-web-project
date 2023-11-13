import React from 'react'
import "./MaterailGatePrew.css"

const MaterialGatePrew = () => {
    let gates = [
        {
            img:"https://designit.menards.com/media/Fence/selection/opening.jpg",
            txt:"Add Opening",
            
        },
        {
            img:"https://designit.menards.com/media/Fence/selection/gates/wood-picket/1731257-gate.jpg",
            txt:"Build a Gate",
            
        },
        {
            img:"https://designit.menards.com/media/Fence/selection/remove-selection.jpg",
            txt:"Remove Selection",
            
        }
    ]
  return (
    <div>
     <p className='gateopening'>Place Gates & Openings </p>
     <p className='gateopeningInfo'>Select a gate or opening below adjust the size if applicable. Select the fence side and click/tap place button. Adjust the location by dragging.</p>
     <div className="gatesmain">
     <div className="gatescontainer">
        <div className="gates">
            {
                gates.map((ele,ind) => {
                  return(
                    <div key={ind}>
                      <div className="gatesbox">
                              <img src={ele.img} alt="" />
                              <p>{ele.txt}</p>
                    </div>
                    </div>
                  )
                })
            }
           
        </div>
     </div>
     </div>
    </div>
  )
}

export default MaterialGatePrew
