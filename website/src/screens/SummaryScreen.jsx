import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Summary from "../components/summarycomponent/Summary";
import MaterialsMenu from "../components/MaterialsMenu/MaterialsMenu";
import DisabledCanvas from "../components/disablecanvas/DisabledCanvas";

const SummaryScreen = () => {
  return (
    <div className="h-screen flex-col flex w-full">
      <div>
        <Navbar />
      </div>
      <div className="mt-12">
        <MaterialsMenu />
      </div>
      <div className="h-full w-full mt-1">
        <Summary />
      </div>
    </div>
  );
};

export default SummaryScreen;
