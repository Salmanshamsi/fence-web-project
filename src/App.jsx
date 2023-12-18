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
import RecallScreen from "./screens/RecallScreen";
import { useSelector } from "react-redux"

function App() {

  const loading = useSelector(state => state.loading.isLoading)

  return (
    <>
    <div className={`${loading ? "fixed" : "hidden"} z-50  top-0 h-screen w-full flex items-center justify-center bg-slate-200 opacity-90`} >
        <div className="text-7xl"><i className="fa-solid fa-spinner fa-spin" style={{ color: '#38f06f' }}></i></div>
    </div>
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
      <Route path='/cart' element={<ShoppingCart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/orderconfirmation' element={<OrderConfirmation/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/cancel' element={<Cancel/>}/>
      <Route path='/recall' element={<RecallScreen/>}/>
     </Routes>
    </>
  )
}

export default App
