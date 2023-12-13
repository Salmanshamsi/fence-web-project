import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Summary from "../components/summarycomponent/Summary";
import MaterialsMenu from "../components/MaterialsMenu/MaterialsMenu";
import DisabledCanvas from "../components/disablecanvas/DisabledCanvas";
import {useNavigate} from 'react-router-dom'


const SummaryScreen = () => {

  const navigate = useNavigate();


  const goToPurChase = () => {
      navigate("/purchase")
    }

  return (
    <div className="h-screen flex-col flex w-full">
      <div>
        <Navbar />
      </div>
      <div className="mt-12">
        <MaterialsMenu />
      </div>
      <div className="w-full h-12 p-4 my-3 md:justify-end justify-start flex items-center ">
            <button
            className="border md:p-3 p-2 rounded-full bg-green-600 text-white"
            onClick={goToPurChase}
            >
              continue
            </button>
      </div>
      <div className="h-full w-full mt-1">
        <Summary />
      </div>
    </div>
  );
};

export default SummaryScreen;
