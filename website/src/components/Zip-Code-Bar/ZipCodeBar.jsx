import React, { useState } from "react";
import jsonStores from "../stores/Fences.json";
import { useNavigate } from "react-router-dom";




const ZipCodeBar = () => {
  const [inputValue, setInputValue] = useState("");


  const [data,setData] = useState(jsonStores);

  console.log(data)

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
      
      <div className="w-full h-auto p-4 border text-sm" >
          <p>
            For proper pricing, service, and plant production please tell us which store you would like to facilitate your purchase (including delivery if applicable).
            If you would like to search for stores using a different zip code other than the one above, <a className="text-blue-700" href="">click here</a>.
          </p>
      </div>
      <div className="w-full h-full">
            <table className="w-full h-auto hidden flex-col lg:flex" >
                <tbody>
                <tr className="w-full p-3 border border-gray-800 flex items-center justify-evenly" >
                    <td className=" w-full text-center h-full" >store</td>
                    <td className=" w-full text-center h-full" >Adress</td>
                    <td className=" w-full text-center h-full" >Distance</td>
                    <td className=" w-full text-center h-full" >Phone</td>
                    <td className=" w-full text-center h-full">

                    </td>
                </tr>
                
                      {
                        data.map((CurEl,index)=>{
                            return(
                              <tr key={index} className="w-full p-3 border flex  items-center justify-evenly" >
                                  <td className="w-full h-full text-center" >{CurEl.store}</td>
                                  <td className="w-full h-full text-center" >{CurEl.adress}</td>
                                  <td className="w-full h-full text-center" >{CurEl.distance}</td>
                                  <td className="w-full h-full text-center" >{CurEl.phone}</td>
                                  <td className="w-full h-full text-center" >
                                    <a
                                    onClick={gotoCanvas}
                                    className="cursor-pointer p-4 hover:bg-green-600 flex items-center w-full justify-center bg-blue-600 shadow-sm hover:shadow-md rounded-full text-white lg:text-md" >select this store</a>
                                  </td>
                               </tr>
                            )
                        })
                      }
                </tbody>
            </table>
            {/* Mobile Screen */}
                <div  className="h-auto lg:hidden p-2 w-full flex flex-col" >
                    {
                      data.map((CurEl,index)=>{

                          return(

                          <div key={index} className="w-full border p-3" >
                            <table className="flex flex-col gap-2 w-full" >
                              <tbody>
                                <tr className="flex items-start" >
                                    <th>Store:</th>
                                    <td className="text-sm font-normal text-start pl-3">{CurEl.store}</td>
                                </tr>
                                <tr className="flex items-start">
                                    <th>Distance:</th>
                                    <td className="text-sm font-normal text-start pl-3 ">{CurEl.distance}</td>
                                </tr>
                                <tr className="flex items-start">
                                    <th>Adress:</th>
                                    <td className="text-sm font-normal text-start pl-3 ">{CurEl.adress}</td>
                                </tr>
                                <tr className="flex items-start">
                                    <th>Phone:</th>
                                    <td className="text-sm font-normal text-start pl-3">{CurEl.phone}</td>
                                </tr>
                                <tr className="flex items-star  items-center justify-end w-full">
                                    <td>
                                      <a onClick={gotoCanvas} className="hover:bg-green-500 p-2 flex w-44 items-center justify-center bg-blue-600 shadow-sm hover:shadow-md rounded-full text-white text-xs lg:text-md" >select this store</a>
                                    </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          )

                      })
                    }
                    </div>
      </div>
    </>
  );
};

export default ZipCodeBar;

