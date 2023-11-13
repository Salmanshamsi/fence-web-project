import React from "react";
import Navbar from "../components/Navbar/Navbar";
import MaterialsMenu from "../components/MaterialsMenu/MaterialsMenu";
import Option from "../components/options/Opt";
import EstimatePriceModal from "../components/EstimatePriceModal/EstimatePriceModal";

const OptionScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <Navbar />
      </div>
      <div className="mt-12">
        <MaterialsMenu />
      </div>
      <div className='w-full overflow-x-hidden p-5 fixed mt-20 bg flex justify-end' >
          <EstimatePriceModal/>
      </div>
      <div className="h-full w-full">
        <Option />
      </div>
    </div>
  );
};

export default OptionScreen;
