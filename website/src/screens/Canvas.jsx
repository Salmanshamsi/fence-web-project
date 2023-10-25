import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ZipCodeBar from '../components/Zip-Code-Bar/ZipCodeBar'
import DrawSelection from '../components/drawSelection/DrawSelection'
import DrawCanvas from '../components/drawcanvas/DrawCanvas'
import DrawSide from "../components/DrawSide/DrawSide"
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

const Canvas = () => {
  return (
    <>

          <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='flex items-center w-full mt-14' >
                  <div className='w-3/12 lg:flex flex-col hidden' >
                    <DrawSide/>
                  </div>
                  <div className='lg:w-9/12 w-full' >                  
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
