import React from "react";
import Recall from "../components/recall/Recall";
import Navbar from "../components/Navbar/Navbar";

const RecallScreen = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="mt-12">
        <Recall />
      </div>
    </div>
  )
};

export default RecallScreen;
