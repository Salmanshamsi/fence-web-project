import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import DrawSide from "../components/DrawSideBar/DrawSide"
import G_Map from '../components/GoogleMap/GoogleMap'
import PlaceSearchBar from '../components/PlaceSearchBar/PlaceSearchBar'

const Mapscreen = () => {

    const [selectedLocation, setSelectedLocation] = useState({
        lat: 28.7041,
        lng: 77.1025,
      });
    

  return (
    <div>
        <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='lg:hidden flex flex-col mt-20 px-4' >
                <PlaceSearchBar/>
              </div>
              <div className='w-full h-screen fixed pt-10' >
                  <div className='flex' >
                    <div className='w-3/12 lg:flex flex-col hidden ' >
                      <DrawSide/>
                    </div>
                    <div className='lg:w-9/12 w-full p-5 mt-5' >                  
                       <G_Map selectedLocation={selectedLocation} />
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Mapscreen
