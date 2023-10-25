import Canvas from "./screens/Canvas"
import Home from "./screens/Home"
import {Routes , Route} from "react-router-dom"
import MenuScreen from "./screens/MenuScreen"
import "./App.css";
import SelectionScreen from "./screens/SelectionScreen"


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/main' element={<MenuScreen/>}/>
      <Route path='/select' element={<SelectionScreen/>}/>
      <Route path='/drawcanvas' element={<Canvas/>}/>
     </Routes>
    </>
  )
}

export default App
