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
import MaterialFenceScreen from "./screens/MaterialFenceScreen";
import SummaryScreen from "./screens/SummaryScreen";
import OptionScreen from "./screens/OptionScreen";
import MaterialGateScreen from "./screens/MaterialGateScreen";
import PurCHaseScreen from "./screens/PurChaseScreen";
import ShoppingCart from "./screens/ShoppingCart";
import CheckOut from "./screens/CheckOut";
import OrderConfirmation from "./screens/OrderConfirmation";
import Success from "./components/success/Success"
import Cancel from "./components/cancel/Cancel"

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/stores' element={<StoreScreen/>}/>
      <Route path='/drawselection' element={<DrawSelectionScreen/>}/>
      <Route path='/canvas' element={<CanvasScreen/>}/>
      <Route path='/map' element={<Mapscreen API={REACT_APP_GOOGLE_MAPS_KEY} />}/>
      <Route path='/materials/type' element={<Materials/>}/>
      <Route path='/materials/fence' element={<MaterialFenceScreen/>}/>
      <Route path='/materials/gate' element={<MaterialGateScreen/>}/>
      <Route path='/materials/option' element={<OptionScreen/>}/>
      <Route path='/summary' element={<SummaryScreen/>}/>
      <Route path='/purchase' element={<PurCHaseScreen/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
      <Route path='/cart' element={<ShoppingCart/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/cancel' element={<Cancel/>}/>
     </Routes>
    </>
  )
}

export default App
