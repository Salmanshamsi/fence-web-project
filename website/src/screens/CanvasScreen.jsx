import Navbar from '../components/Navbar/Navbar'
import DrawCanvas from '../components/Canvas/DrawCanvas'
import DrawSide from "../components/DrawSideBar/DrawSide"

const CanvasScreen = () => {
  
  return (
    <>
          <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='flex items-center w-full mt-5' >
                  <div className='w-3/12 lg:flex flex-col hidden ' >
                    <DrawSide />
                  </div>
                  <div className='lg:w-9/12 w-full p-5 mt-5' >                  
                    <DrawCanvas/>
                  </div>
              </div>
          </div>

              
    </>
  )
}

export default CanvasScreen
