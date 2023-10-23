import Canvas from "./screens/Canvas"
import Home from "./screens/Home"
import {Routes , Route} from "react-router-dom"


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/drawcanvas' element={<Canvas/>}/>
     </Routes>
      

    </>
  )
}

export default App
