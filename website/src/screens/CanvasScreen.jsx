import Navbar from '../components/Navbar/Navbar'
import DrawSide from "../components/DrawSideBar/DrawSide"
import DrawCanvas from '../components/Canvas/DrawCanvas'

const CanvasScreen = () => {
  
  return (
    <>
          <div className='flex flex-col' >
              <div>
                <Navbar/>
              </div>
              <div className='lg:h-screen h-full w-full'>
                  <div className='flex pt-10 lg:fixed'>
                    <div className='w-5/12 lg:flex flex-col hidden' >
                      <DrawSide/>
                    </div>
                    <div className='w-full p-5 mt-5' >                  
                      <DrawCanvas/>
                    </div>
                  </div>
              </div>
          </div>

              
    </>
  )
}

export default CanvasScreen
