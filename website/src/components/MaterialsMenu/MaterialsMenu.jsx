import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MaterialMenu.css"

const MaterialsMenu = () => {

  return (
    <>
    <div className="typescontainer">
     <div className="typesdiv">
      <ul  className="types">
      <li>Type</li>
      <li>Fence</li>
      <li>Gates</li>
      <li>Options</li>
      </ul>
     </div>
  
    </div>
     <hr style={{marginTop:"1rem" , width:"100%"}}/>
    </>

  );
};

export default MaterialsMenu;
