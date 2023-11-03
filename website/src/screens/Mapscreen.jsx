import Navbar from '../components/Navbar/Navbar'
import DrawSide from "../components/DrawSideBar/DrawSide"
import GooglePlaceSearch from '../components/GooglePlaceSearchBar/GooglePlaceSearch'
import G_Map from '../components/GoogleMap/GoogleMap'


const Mapscreen = ({API}) => {    

  return (
    <div>
        <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='lg:hidden flex flex-col mt-20 px-4' >
                {/* <GooglePlaceSearch API={API} /> */}
              </div>
              <div className='w-full h-screen fixed pt-10' >
                  <div className='flex' >
                    <div className='w-3/12 lg:flex flex-col hidden ' >
                      <DrawSide API={API} />
                    </div>
                    <div className='lg:w-9/12 w-full p-5 mt-5' >                  
                       <G_Map API={API} />
                    </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Mapscreen
