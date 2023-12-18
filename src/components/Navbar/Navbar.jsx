import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import WarningModal from "../WarningModal/WarningModal";
import EstimatePriceModal from "../EstimatePriceModal/EstimatePriceModal";
import MaterialsMenu from "../MaterialsMenu/MaterialsMenu";
import { setIsLoading } from "../../redux/slices/loading";
import { setSelectedLines } from "../../redux/slices/selectedMaterials";
import { setDesignId } from "../../redux/slices/captureDesign";
import { create_Design, updateDesign } from "../../API_Calls/API_Calls_";

const Navbar = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ----------------Url--Defining------------------------------

    const baseUrl = "http://localhost:5173"
    const DepLoy_Url = "https://comfortable-tan-wig.cyclic.app"
    const currentUrl = window.location.href;

  // -------------------stack navigation bar handling----------------------------

  const [Openmenu, setOpenMenu] = useState("hidden");
  const [isCanvas, setisCanvas] = useState(false);
  const [showBottomNav, setshowBottomNav] = useState(false);
  const [showBottomNav_2, setshowBottomNav_2] = useState(false);
  const [showBottomNav_3, setshowBottomNav_3] = useState(false);
  
  // -------------------Modal handling----------------------------
  
  const [showModal, setShowModal] = useState(false);
  const [firstModalVal , setFirstModalVal] = useState('');
  const [secondModalVal , setSecondModalVal] = useState('');

  // ................material menu routes........

  const [isTypeActive , setisTypeActive] = useState(true);
  const [isFenceActive , setisFenceActive] = useState(false);
  const [isGateActive , setisGateActive] = useState(false);
  const [isOptionActive , setisOptionActive] = useState(false);

  // .................Redux states for Canvas and Map.............................................
  
    const mapLines = useSelector((state) => state.captureDesign.saveDesign)
    const FinalLineRec = useSelector((state) => state.captureDesign.FinalLineRecord)
    const Drawlength = useSelector((state) => state.price.totalDrawLength);
    const DB_lines = useSelector((state) => state.canvasDesign.cdesign);
  
    // .................Redux states for material Data.............................................
  
    const Types_M = useSelector((state) => state.selectedMaterials.Type_M);
    const Fence_M = useSelector((state) => state.selectedMaterials.Fence_M);
    const Gate_M = useSelector((state) => state.selectedMaterials.Gate_M);
    const Option_M = useSelector((state) => state.selectedMaterials.Option_M);
  
  //-------------------request Data functions-----------------------------------------------------

    const setDesignToDB = (Data) => {
      
      dispatch(setIsLoading(true))
      try{
            create_Design(Data).then((resp)=>{
                console.log("response from setting Data in DB :", resp)
                if(false){
                  dispatch(setDesignId(Data.randomId))
                  dispatch(setSelectedLines(FinalLineRec))
                  navigate("/materials/type")
                }
            }).catch((err)=>{
                console.log("Error from setting Data in DB :", err)
            })

            dispatch(setIsLoading(true))

        }catch(err){
          
          throw new err

          dispatch(setIsLoading(true))

        }
  }

  const updateDesignToDB = (Data, id) => {
      
    dispatch(setIsLoading(true))
    try{
          updateDesign(Data, id).then((resp)=>{
              console.log("response from updating Data in DB :", resp)
              if(false){
                dispatch(setDesignId(Data.randomId))
                dispatch(setSelectedLines(FinalLineRec))
                navigate("/materials/type")
              }
          }).catch((err)=>{
              console.log("Error from updating Data in DB :", err)
          })

          dispatch(setIsLoading(true))

      }catch(err){
        
        throw new err

        dispatch(setIsLoading(true))

      }
  }

  // ---------------------------------gournal functions----------------------------------------------

      const generateRandomId = () => {
        const length = 12;
        const characters = "0123456789";
        let randomId = "";

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomId += characters.charAt(randomIndex);
        }

        return randomId;
      };

      function isEmptyObject(obj) {
        return Object.keys(obj).length === 0;
      }

      const navigationRoutesChecking = () => {

        if ((currentUrl === `${baseUrl}/stores`) || (currentUrl === `${DepLoy_Url}/stores`)) {
            setFirstModalVal("Select a Store");
            setSecondModalVal("You Must Select Store Before Continue.");
            setShowModal(true);
          }
          if((currentUrl === `${baseUrl}/drawselection`) || (DepLoy_Url === `${DepLoy_Url}/drawselection`)){     
            setShowModal(true)
            setFirstModalVal("Design Warning");
            setSecondModalVal("You must choose design type before continuing.");
          }
          if((currentUrl === `${baseUrl}/map`) || (DepLoy_Url === `${DepLoy_Url}/map`)){
            setShowModal(true)
            setFirstModalVal("Design Warning");
            setSecondModalVal("You must choose design type before continuing.");
          }
          if((currentUrl === `${baseUrl}/canvas`) || (DepLoy_Url === `${DepLoy_Url}/canvas`)){
            setShowModal(true)
            setFirstModalVal("Design Warning");
            setSecondModalVal("You must choose design type before continuing.");
          }
        if((currentUrl === `${baseUrl}/materials/fence`) || (DepLoy_Url === `${DepLoy_Url}/materials/fence`)){
            setShowModal(true)
            setFirstModalVal("materials Warning");
            setSecondModalVal("You must choose materials  before continuing.");
          }
          if((currentUrl === `${baseUrl}/materials/gate`) || (DepLoy_Url === `${DepLoy_Url}/materials/gate`)){
            setShowModal(true)
            setFirstModalVal("materials Warning");
            setSecondModalVal("You must choose materials  before continuing.");
          }
          if((currentUrl === `${baseUrl}/materials/option`) || (DepLoy_Url === `${DepLoy_Url}/materials/option`)){
            setShowModal(true)
            setFirstModalVal("materials Warning");
            setSecondModalVal("You must choose materials  before continuing.");
          }
          if((currentUrl === `${baseUrl}/summary`) || (DepLoy_Url === `${DepLoy_Url}/summary`)){
            setShowModal(true)
            setFirstModalVal("materials Warning");
            setSecondModalVal("You must choose materials  before continuing.");
          }
          if((currentUrl === `${baseUrl}/purchase`) || (DepLoy_Url === `${DepLoy_Url}/purchase`)){
            setShowModal(true)
            setFirstModalVal("materials Warning");
            setSecondModalVal("You must choose materials  before continuing.");
          }
          
      };

      const ContinueButtonHandling = () => {
 
        if((currentUrl === `${baseUrl}/map`) || (DepLoy_Url === `${DepLoy_Url}/map`)){
    
          dispatch(setIsLoading(true))
    
          if (mapLines.length > 0 ) {
            dispatch(setIsLoading(false))
                    navigate("/canvas");
                  } else {
                    dispatch(setIsLoading(false))
                    setShowModal(true);
                    setFirstModalVal("Are you sure you want to leave without lines drawn?");
                    setSecondModalVal("Choose 'Yes' if you still want to leave.");
                  }
        }
        if((currentUrl === `${baseUrl}/canvas`) || (DepLoy_Url === `${DepLoy_Url}/canvas`)){
    
          if (FinalLineRec.length > 0 ) {
    
              if(Drawlength > 0){
    
                  if(DB_lines.length > 0){
                    // _updateData();
                  }else{
                    _postData();
                  }
    
              }else{
              setFirstModalVal("Design Warning");
              setSecondModalVal("You must enter the length of all fence legs before continuing.");
              setShowModal(true); 
              }
    
          } else {
            setFirstModalVal("Design Warning");
            setSecondModalVal("You must draw a shape before continuing.");
            setShowModal(true);
          }
    
        }
        if((currentUrl === `${baseUrl}/materials/type`) || (DepLoy_Url === `${DepLoy_Url}/materials/type`)){
          
          dispatch(setIsLoading(true))    
    
          if(Types_M.length > 1){
             
              dispatch(setIsLoading(false))
              navigate("/materials/fence")
             
              }else{
    
                setShowModal(true);
                setFirstModalVal("Material Selection Warning");
                setSecondModalVal("Please Select the Material First !");
            
                dispatch(setIsLoading(false))
              }
        }
       if((currentUrl === `${baseUrl}/materials/fence`) || (DepLoy_Url === `${DepLoy_Url}/materials/fence`)){
    
        dispatch(setIsLoading(true))    
            if(Fence_M.length > 1){
                  dispatch(setIsLoading(false))
                  navigate("/materials/gate")
                }else{
                  
                  dispatch(setIsLoading(false))
                  setShowModal(true);
                  setFirstModalVal("Material Selection Warning");
                  setSecondModalVal("Please Select the Material First !");
                }
        }
        if((currentUrl === `${baseUrl}/materials/gate`) || (DepLoy_Url === `${DepLoy_Url}/materials/gate`)){
    
          dispatch(setIsLoading(true))
          if(!isEmptyObject(Gate_M)){
            dispatch(setIsLoading(false))
            setShowModal(true);
            setFirstModalVal("Material Selection Warning");
            setSecondModalVal("Please Select the Material First !");
          }else{
            dispatch(setIsLoading(false))
            navigate("/materials/option")
          }
        }
        if((currentUrl === `${baseUrl}/materials/option`) || (DepLoy_Url === `${DepLoy_Url}/materials/option`)){
          
    
          dispatch(setIsLoading(true))  
          if(Option_M.length > 1){
            dispatch(setIsLoading(false))
            navigate("/summary")
            }else{
                dispatch(setIsLoading(false))  
                setShowModal(true);
                setFirstModalVal("Material Selection Warning");
                setSecondModalVal("Please Select the Material First !");
            }
        }
        if((currentUrl === `${baseUrl}/summary`) || (DepLoy_Url === `${DepLoy_Url}/summary`)){
          dispatch(setIsLoading(true)) 
          navigate("/purchase")
          dispatch(setIsLoading(false))
        }
      }

      const displayNavbarHandling = () => {
        if ((currentUrl === `${baseUrl}/stores`) || (currentUrl === `${DepLoy_Url}/stores`)) {
          setshowBottomNav(false)
          setshowBottomNav_2(false)
          setshowBottomNav_3(false)
        }
        if((currentUrl === `${baseUrl}/drawselection`) || (DepLoy_Url === `${DepLoy_Url}/drawselection`)){
          setshowBottomNav(false)
          setshowBottomNav_2(false)
          setshowBottomNav_3(false)
        }
        if((currentUrl === `${baseUrl}/map`) || (DepLoy_Url === `${DepLoy_Url}/map`)){
          setshowBottomNav(false)
          setshowBottomNav_2(true)
          setshowBottomNav_3(true)
          setisCanvas(false)
        }
        if((currentUrl === `${baseUrl}/canvas`) || (DepLoy_Url === `${DepLoy_Url}/canvas`)){
          setshowBottomNav(false)
          setshowBottomNav_2(true)
          setshowBottomNav_3(true)
          setisCanvas(true)
        }
        if((currentUrl === `${baseUrl}/materials/type`) || (DepLoy_Url === `${DepLoy_Url}/materials/type`)){
          setshowBottomNav(true)
          setshowBottomNav_2(true)
          setshowBottomNav_3(false)
          setisTypeActive(true);
          setisFenceActive(false);
          setisGateActive(false);
          setisOptionActive(false);
        }
       if((currentUrl === `${baseUrl}/materials/fence`) || (DepLoy_Url === `${DepLoy_Url}/materials/fence`)){
          setshowBottomNav(true)
          setshowBottomNav_2(true)
          setshowBottomNav_3(false)
          setisTypeActive(false);
          setisFenceActive(true);
          setisGateActive(false);
          setisOptionActive(false);
        }
        if((currentUrl === `${baseUrl}/materials/gate`) || (DepLoy_Url === `${DepLoy_Url}/materials/gate`)){
          setshowBottomNav(true)
          setshowBottomNav_2(true)
          setshowBottomNav_3(false)
          setisTypeActive(false);
          setisFenceActive(false);
          setisGateActive(true);
          setisOptionActive(false);
        }
        if((currentUrl === `${baseUrl}/materials/option`) || (DepLoy_Url === `${DepLoy_Url}/materials/option`)){
          setshowBottomNav(true)
          setshowBottomNav_2(true)
          setshowBottomNav_3(false)
          setisTypeActive(false);
          setisFenceActive(false);
          setisGateActive(false);
          setisOptionActive(true);
        }
        if((currentUrl === `${baseUrl}/summary`) || (DepLoy_Url === `${DepLoy_Url}/summary`)){
          setshowBottomNav(false)
          setshowBottomNav_2(true)
          setshowBottomNav_3(false)
        }
        if((currentUrl === `${baseUrl}/purchase`) || (DepLoy_Url === `${DepLoy_Url}/purchase`)){
          setshowBottomNav(false)
          setshowBottomNav_2(false)
          setshowBottomNav_3(false)
        }
      }

  // ------------------------------------------------------------------------------------------------      


  useEffect(()=>{
      displayNavbarHandling();
  },[])

  return (
    <>
      <div className="hidden h-12 lg:flex  bg-green-700 text-white fixed w-full z-50">
        <div className="flex  w-4/12 h-full items-center pl-10">
          <div className="border-r border-white pr-2 ">
            <h1 className="text-sm">
              Design and Buy<sup>TM</sup> Fence{" "}
            </h1>
          </div>
          <img src="" alt="" />
        </div>

        <ul className="flex  w-full gap-5 justify-center h-full items-center ">
          <Link 
          onClick={navigationRoutesChecking}
          className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer">
            Select Store
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={navigationRoutesChecking}
          >
            Design
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={navigationRoutesChecking}
          >
            Materials
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={navigationRoutesChecking}
          >
            summary
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={navigationRoutesChecking}
          >
            Purchase
          </Link>
        </ul>

        <ul className="flex  w-full gap-10 justify-end pr-20 h-full items-center p-2">
          <li className="flex gap-2 items-center cursor-pointer">
            <h1>
              <i className="fa-solid fa-sd-card "></i>
            </h1>{" "}
            save
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <h1>
              <i className="fa-solid fa-sd-card "></i>
            </h1>{" "}
            save as
          </li>
          <li className="flex gap-2 items-center cursor-pointer">
            <h1>
              <i className="fa-solid fa-file-circle-question"></i>
            </h1>{" "}
            FAQ
          </li>
          <Link
            to={"/login"}
            className="flex gap-2 items-center cursor-pointer"
          >
            <h1>
              <i className="fa-solid fa-user"></i>
            </h1>{" "}
            Login
          </Link>
        </ul>


        {/* Mobile screen */}
      
      
      
    </div>
      <div className="lg:hidden h-auto p-4 flex bg-green-700 text-white fixed w-full">
        <div className="flex  w-full h-full items-center pl-2">
          <div className="border-r border-white pr-2 ">
            <h3 className="text-sm">
              Design and Buy<sup>TM</sup> Fence{" "}
            </h3>
          </div>
          <img src="" alt="" />
        </div>

        <div className="w-full h-full flex items-center justify-end pr-5 gap-7">
          <button>
            <i className="fa-solid fa-user"></i>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              Openmenu == "hidden"
                ? setOpenMenu("visible")
                : setOpenMenu("hidden");
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>
      <ul className={`w-full fixed mt-14 ${Openmenu}`}>
        <Link
          to={"/stores"}
          className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
        >
          Select Store
        </Link>
        <Link
          to={"/drawselection"}
          className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
        >
          Design
        </Link>
        <Link
          to={"/materials/type"}
          className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700"
        >
          Materials
        </Link>
        <Link className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700">
          summary
        </Link>
        <Link className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700">
          Purchase
        </Link>
        <Link className="w-full flex items-center justify-center border p-3 bg-green-700 hover:bg-white text-white hover:text-green-700">
          <ul className="flex items-center justify-center gap-3 p-3 transition-all transform duration-300">
            <li className="flex gap-2 items-center cursor-pointer">
              <h1>
                <i className="fa-solid fa-sd-card "></i>
              </h1>{" "}
              save
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              <h1>
                <i className="fa-solid fa-sd-card "></i>
              </h1>{" "}
              save as
            </li>
            <li className="flex gap-2 items-center cursor-pointer">
              <i className="fa-solid fa-file-circle-question"></i> FAQ
            </li>
          </ul>
        </Link>
      </ul>
      <>
          {showBottomNav ? <div
                               className={`mt-24 border fixed lg:h-12 h-22 items-center flex-col-reverse lg:flex-row flex justify-between bg-white  w-full p-2'`}>
                                  <div className="w-full h-full mt-4 lg:mt-0" >
                                    <MaterialsMenu isTypeActive={isTypeActive} isFenceActive={isFenceActive} isGateActive={isGateActive} isOptionActive={isOptionActive} />
                                  </div>
                                  <div className="w-full h-full" >
                                    <EstimatePriceModal/>
                                  </div>
                              </div> : null}
          {showBottomNav_2 ? <div
                            className={`z-40 fixed w-full border bg-slate-100 mt-12  h-12 flex items-center justify-end p-2`} >
                                <button onClick={ContinueButtonHandling} className="bg-green-500 text-white p-2 rounded-full mr-5 cursor-pointer " >Continue</button>
                          </div>:null
          }
          {showBottomNav_3 ? <div
                            className={`z-40 bg-white mt-24 border fixed w-full h-12 items-end gap-2 flex text-center justify-evenly lg:hidden md:hidden`} >
                                <Link to={"/canvas"} className={`rounded-lg w-full p-1 rounded-b-none ${isCanvas ? "bg-green-500 text-white" : "bg-white"}`} >
                                    Canavs
                                </Link>
                                <Link to={"/map"} className={`rounded-lg w-full p-1 rounded-b-none ${!isCanvas ? "bg-green-500 text-white" : "bg-white"}`}>
                                    Map
                                </Link>
                          </div>:null
          }
       </>

      <WarningModal isOpen={showModal} setIsOpen={setShowModal} heading={firstModalVal} content={secondModalVal} />
    </>
  );
};

export default Navbar;
