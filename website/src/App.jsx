import {Routes , Route} from "react-router-dom"
import "./App.css";
// screen's imports
import CanvasScreen from "./screens/CanvasScreen";
import Mapscreen from "./screens/Mapscreen";
import StoreScreen from "./screens/StoresScreen";
import DrawSelectionScreen from "./screens/DrawSelectionScreen";
import HomeScreen from "./screens/HomeScreen";
import { REACT_APP_GOOGLE_MAPS_KEY } from "./assets/mapApiKey/mapApiKey";
import Materials from "./screens/MaterialsScreen";
import Auth from "./screens/Auth";


function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/stores' element={<StoreScreen/>}/>
      <Route path='/drawselection' element={<DrawSelectionScreen/>}/>
      <Route path='/canvas' element={<CanvasScreen/>}/>
      <Route path='/map' element={<Mapscreen API={REACT_APP_GOOGLE_MAPS_KEY} />}/>
      <Route path='/materials' element={<Materials/>}/>
      <Route path='/login' element={<Auth/>}/>
     </Routes>
    </>
  )
}

export default App
