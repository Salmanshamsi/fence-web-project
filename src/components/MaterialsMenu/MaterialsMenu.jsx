import React from "react";
const MaterialsMenu = ({isTypeActive, isFenceActive, isGateActive,isOptionActive }) => {

  return (
    <>
     <div className="w-full h-full py-1">
      <ul  className="flex gap-6 justify-start items-center ml-5 h-full w-full">
      <li className={`h-full flex items-center p-2  ${ isTypeActive ? "text-white   drop-shadow-lg  rounded-s-lg rounded-r-3xl px-5 bg-green-500 " : "bg-white"}`} >Type</li>
      <li className={`h-full flex items-center p-2  ${ isFenceActive ? "text-white  drop-shadow-lg  rounded-s-lg rounded-r-3xl px-5  bg-green-500 " : "bg-white"}`} >Fence</li>
      <li className={`h-full flex items-center p-2  ${ isGateActive ? "text-white   drop-shadow-lg  rounded-s-lg rounded-r-3xl px-5 bg-green-500 " : "bg-white"}`} >Gates</li>
      <li className={`h-full flex items-center p-2  ${ isOptionActive ? "text-white drop-shadow-lg  rounded-s-lg rounded-r-3xl px-5   bg-green-500 " : "bg-white"}`} >Options</li>
      </ul>
     </div>
    </>

  );
};

export default MaterialsMenu;
