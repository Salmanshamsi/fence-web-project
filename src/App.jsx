import {Routes , Route} from "react-router-dom"
import "./App.css";
import { REACT_APP_GOOGLE_MAPS_KEY } from "./assets/mapApiKey/mapApiKey";
import HomeScreen from "./screens/HomeScreen";
import StoreScreen from "./screens/StoreScreen";
import SavedDesignScreen from "./screens/SavedDesignScreen";
import {useSelector} from "react-redux"
import CanvasScreen from "./screens/canvasScreen";
import MapScreen from "./screens/MapScreen";
import DrawingOptions from "./screens/DrawingOptionScreen";
import MaterialType from "./screens/MaterialSelectionScreens/MaterialType";
import MaterialFence from "./screens/MaterialSelectionScreens/MaterialFence";
import MaterialGate from "./screens/MaterialSelectionScreens/MaterialGate";
import MaterialOption from "./screens/MaterialSelectionScreens/MaterialOption";
import SummaryScreen from "./screens/SummaryScreen";
import PurchaseScreen from "./screens/PurchaseScreen";
import CartScreen from "./screens/CartScreen";
import OrderConfirmationScreen from "./screens/OrderConfirmationScreen";
import CheckoutDetails from "./screens/CheckoutDetails";
import LoginScreen from "./screens/LoginScreen.jsx/LoginScreen";
import {useNavigate} from "react-router-dom"
import { useEffect } from "react";



function App() {

  const loading = useSelector(state => state.Loading.isLoading)
  const navigate = useNavigate()
  const isLoggedIn = Boolean(localStorage.getItem("loggedIn"))
  console.log(isLoggedIn)

  const isStore  = useSelector((state)=>state.RoutesChecking.isStores);
  const isDraw  = useSelector((state)=>state.RoutesChecking.isDraw);
  const isMaterials  = useSelector((state)=>state.RoutesChecking.isMaterials);
  const isSummary  = useSelector((state)=>state.RoutesChecking.isSummary);
  const isPurchase  = useSelector((state)=>state.RoutesChecking.isPurchase);

  function handlePageReload() {
    window.addEventListener('load', function () {
      navigate("/")
    });
  }
  
  useEffect(()=>{

    handlePageReload();

  },[])

  return (
    <>
    <div className="w-full" >
        <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/stores' element={<StoreScreen/>}/>
            <Route path='/savedesign' element={<SavedDesignScreen/>}/>
            {isStore ? <Route path='/drawoptions' element={<DrawingOptions/>}/> : "Not Found !" }
            {isStore ? <Route path='/canvas' element={<CanvasScreen/>}/> : "Not Found !" }
            {isStore ? <Route path='/map' element={<MapScreen API={REACT_APP_GOOGLE_MAPS_KEY} />}/> :  "Not Found !" }
            {isMaterials ? <Route path='/materials/type' element={<MaterialType/>}/> : "Not found" }
            {isMaterials ? <Route path='/materials/fence' element={<MaterialFence/>}/> : "Not Found !"}
            {isMaterials ? <Route path='/materials/gate' element={<MaterialGate/>}/> : "NotFound !" }
            {isMaterials ? <Route path='/materials/option' element={<MaterialOption/>}/> : "Not Found !" }
            {isMaterials ? <Route path='/summary' element={<SummaryScreen/>}/> : "Not Found !" }
            {isMaterials ?<Route path='/gotoCart' element={<PurchaseScreen/>}/> : "Not Found !" }
            <Route path='/cart' element={<CartScreen/>}/>
            <Route path='/checkoutdetails' element={<CheckoutDetails/>}/>
            <Route path='/orderconfirmation' element={<OrderConfirmationScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            {/* <Route path='/signup' element={</>}/> */}
        </Routes>
    </div>
     <div className={`${loading ? "fixed" : "hidden"} z-50  top-0 h-screen w-full flex items-center justify-center bg-slate-200 opacity-90`} >
        <div className="text-7xl"><i className="fa-solid fa-spinner fa-spin" style={{ color: '#38f06f' }}></i></div>
    </div>
    </>
  )
}

export default App

