import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const [Openmenu, setOpenMenu] = useState("hidden");
  const checkInpVal = useSelector((state) => state.ptCode.pCOdeVal);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstModalVal , setFirstModalVal] = useState('');
  const [secondModalVal , setSecondModalVal] = useState('');
  const [modalBtnVal , setModalBtnVal] = useState('');

  const clickDesignToCheckStore = () => {
    if (checkInpVal.length < 5) {
        setFirstModalVal("Select a Store");
        setSecondModalVal("You Must Select Store Before Continue.");
        setModalBtnVal("Ok");
        setShowModal(true);
      }
  };

  const currentUrl = window.location.href;
  console.log(currentUrl);


  const clickMaterailToCheckStore = () => {
    if (checkInpVal.length < 5) {
        setFirstModalVal("Select a Store");
        setSecondModalVal("You Must Select Store Before Continue.");
        setModalBtnVal("Ok");
        setShowModal(true);
      }

      if(currentUrl === "http://localhost:5173/drawselection"){
        setShowModal(true)
        setFirstModalVal("Design Warning");
        setSecondModalVal("You must choose design type before continuing.");
        setModalBtnVal("Ok");
      }
  };
  const clickSummaryToCheckStore = () => {
    if (checkInpVal.length < 5) {
        setFirstModalVal("Select a Store");
        setSecondModalVal("You Must Select Store Before Continue.");
        setModalBtnVal("Ok");
        setShowModal(true);
      }
      if(currentUrl === "http://localhost:5173/drawselection"){
        setShowModal(true)
        setFirstModalVal("Design Warning");
        setSecondModalVal("You must choose design type before continuing.");
        setModalBtnVal("Ok");
      }
  };
  const clickPurchaseToCheckStore = () => {
    if (checkInpVal.length < 5) {
        setFirstModalVal("Select a Store");
        setSecondModalVal("You Must Select Store Before Continue.");
        setModalBtnVal("Ok");
        setShowModal(true);
      }

      if(currentUrl === "http://localhost:5173/drawselection"){
        setShowModal(true)
        setFirstModalVal("Design Warning");
        setSecondModalVal("You must choose design type before continuing.");
        setModalBtnVal("Ok");
      }
  };

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
          <Link className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer">
            Select Store
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={clickDesignToCheckStore}
          >
            Design
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={clickMaterailToCheckStore}
          >
            Materials
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={clickSummaryToCheckStore}
          >
            summary
          </Link>
          <Link
            className="hover:bg-white hover:text-green-700 h-full flex items-center p-2 cursor-pointer"
            onClick={clickPurchaseToCheckStore}
          >
            Purchase
          </Link>
          {/* to={"/stores"} 
                to={"/drawselection"}  
                to={"/materials/type"} */}
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

     {
        showModal ?   <div className="modal-container">
        <div className="modal-box">
             <div className="m-header">
                <p>{firstModalVal}</p>
             </div>
             <div className="m-txt">
                <p>{secondModalVal}</p>
                <button onClick={() => {setShowModal(false)}}>{modalBtnVal}</button>
             </div>
        </div>
       </div> : null
     }
    </>
  );
};

export default Navbar;
