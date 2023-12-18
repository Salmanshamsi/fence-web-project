import Navbar from '../components/Navbar/Navbar'
import DrawSide from "../components/DrawSideBar/DrawSide"
import GooglePlaceSearch from '../components/GooglePlaceSearchBar/GooglePlaceSearch'
import G_Map from '../components/GoogleMap/GoogleMap'
import { useState } from 'react'


const Mapscreen = ({API}) => {    

  const [linesDrawn, setLinesDrawn] = useState(false);
    

  return (
    <div>
        <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='lg:hidden flex flex-col mt-20 px-4' >
                {/* <GooglePlaceSearch API={API} /> */}
              </div>
              <div className='w-full mt-20' >
                  <div className='flex' >
                    <div className='lg:w-3/12 w-full lg:flex flex-col hidden ' >
                      <DrawSide API={API} linesDrawn={linesDrawn} setLinesDrawn={setLinesDrawn} />
                    </div>
                    <div className='w-full lg:pt-10 lg:px-10 px-2 pt-2' >                  
                       <G_Map API={API} linesDrawn={linesDrawn} setLinesDrawn={setLinesDrawn} />
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Mapscreen
