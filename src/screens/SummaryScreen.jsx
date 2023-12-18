import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Summary from "../components/summarycomponent/Summary";


const SummaryScreen = () => {

  return (
    <div className="h-full flex-col flex w-full">
      <div>
        <Navbar />
      </div>
      <div className="h-full mt-24 w-full">
        <Summary />
      </div>
    </div>
  );
};

export default SummaryScreen;
