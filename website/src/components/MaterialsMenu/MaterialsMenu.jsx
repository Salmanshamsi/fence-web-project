import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MaterialMenu.css"

const MaterialsMenu = () => {

  const cUrl = window.location.href;

  const navigate = useNavigate();

  const continueRoute = () => {
    if(cUrl === "http://localhost:5173/materials/type"){
     navigate("/materials/fence");
    }else if(cUrl === "http://localhost:5173/materials/fence"){
      navigate("/materials/gate");
    }else if(cUrl === "http://localhost:5173/materials/gate"){
      navigate("/materials/option");
    }else if(cUrl === "http://localhost:5173/materials/option"){
       navigate("/summary");
    }else if(cUrl === "http://localhost:5173/summary"){
      navigate("/purchase");
   }
  }


  const backRoute = () => {
    if(cUrl === "http://localhost:5173/materials/option"){
     navigate("/materials/gate");
    }else if(cUrl === "http://localhost:5173/materials/gate"){
      navigate("/materials/fence");
    }else if(cUrl === "http://localhost:5173/materials/fence"){
      navigate("/materials/type");
    }
  }

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
    <div className="matMenuDiv">
         <button
           style={{
             border: "1px solid green",
             padding: ".3rem 1rem",
             borderRadius: "20px",
             marginRight: ".5rem",
           }}
           onClick={backRoute}
         >
           Back
         </button>
         <button
           style={{
             border: "1px solid green",
             padding: ".3rem 1rem",
             borderRadius: "20px",
             backgroundColor: "#2e9459",
             color: "#fff",
             marginRight: ".3rem",
           }}
           onClick={continueRoute}
         >
           Continue
         </button>
     </div>
    </div>
     <hr style={{marginTop:"1rem" , width:"100%"}}/>
    </>
    // <div
    //   className="w-full h-12 border flex items-center justify-start"
    //   style={{ display: "flex", justifyContent: "space-between" }}
    // >
    //   <ul className="flex gap-5 ml-6 text-green-600">
    //     <li>Type</li>
    //     <li>Fence</li>
    //     <li>Gates</li>
    //     <li>Options</li>
    //   </ul>
    //   <div>
   
   
    //   </div>
    // </div>
  );
};

export default MaterialsMenu;
