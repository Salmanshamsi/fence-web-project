import React, { useState } from "react";
import jsonStores from "../stores/Fences.json";
import { useNavigate } from "react-router-dom";
import "./ZipCode.css"
const ZipCodeBar = () => {
  const [inputValue, setInputValue] = useState("");

  const filterdData = jsonStores.filter((ele) => {
    return ele.ptCode.includes(inputValue);
  });

  const handleChange = (event) => {
   setInputValue(event.target.value);
  }

  const navigate = useNavigate("");

  const gotoCanvas = () => {
    navigate("/select")
  }

  return (
    <>
      <div className="w-full h-auto p-3 flex items-center gap-2 py-2 px-4 border">
        <h1 className="lg:text-md text-sm">
          Please enter the zip code to find a store:
        </h1>
        <input
          type="text"
          className="border text-sm h-full rounded-full px-4 shadow-sm"
          placeholder="Enter Zip-Code"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {/* <table>
              <tr>
                <td>STORE</td>
                <td>ADRESS</td>
                <td>DISTANCE</td>
                <td>PHONE</td>
              </tr>
            </table> */}
      {
        inputValue.length > 0 ? <div className="maincards">
        {filterdData.map((ele) => {
          console.log(ele);
          return (
            <>
       
              <div className="card">
                <p>Store : {ele.store} </p>
                <p>Adress : {ele.adress} </p>
                <p>Distance : {ele.distance}</p>
                <p>Phone : {ele.phone}</p>
                <button onClick={gotoCanvas} className="selectstore">Select this store</button>
              </div>
            </>
          );
        })}
      </div> : <div className="noresultmain"><div className="noresult"> <p>No Result Found</p></div></div>
      }
      
    </>
  );
};

export default ZipCodeBar;
