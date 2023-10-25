import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import DrawCanvas from '../components/drawcanvas/DrawCanvas'
import DrawSide from "../components/DrawSide/DrawSide"
import G_Map from '../components/GoogleMap/GoogleMap'
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

const Canvas = ({inCanvas}) => {
  
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 28.7041,
    lng: 77.1025,
  });

  
  return (
    <>
          <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='flex items-center w-full mt-5' >
                  <div className='w-3/12 lg:flex flex-col hidden ' >
                    <DrawSide SearchCity={false} />
                  </div>
                  <div className='lg:w-9/12 w-full p-5 mt-5' >                  
                    {/* {
                     inCanvas ? <DrawCanvas/> : <G_Map selectedLocation={selectedLocation} />
                    } */}
                    <DrawCanvas/>
                  </div>
              </div>
          </div>

                {/* <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}
    </>
  )
}

export default Canvas
