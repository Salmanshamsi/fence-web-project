import React from "react";
import { Link } from "react-router-dom";

const MaterialsMenu = () => {
  return (
    <div
      className="w-full h-12 border flex items-center justify-between p-3"
    >
      <ul className="flex gap-5 ml-6 text-green-600">
        <li>Type</li>
        <li>Fence</li>
        <li>Gates</li>
        <li>Options</li>
      </ul>
      <div className="flex gap-4" >
        <button className="border border-green-500 text-green-500 p-2 rounded-full" >
          Back
        </button>
        <Link className="bg-green-500 rounded-full p-2 text-white" >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default MaterialsMenu;
