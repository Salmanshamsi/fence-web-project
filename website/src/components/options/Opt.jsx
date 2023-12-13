import React, { useState } from "react";
import OptionsTables from "./OptionTable";
import { useDispatch, useSelector } from "react-redux";
import { optSelect } from "../../redux/slices/FenceDesignSlice";
import {optionPrice } from "../../redux/slices/FencePrice";
import "./Opt.css"
import { decrement, increment } from "../../redux/slices/CartSlice";
import {useNavigate} from 'react-router-dom'

const Option = () => {
  const [isTable, setisCanvas] = useState(false);
  const totalLength = useSelector((state) => state.price.totalDrawLength);
  const count = useSelector((state) => state.allCartData.value);
  const TotalPrice = useSelector((state)=>state.price.totalPrice) 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const navigateToSum = () => {
    navigate("/summary");
  };

  let arr = [
    {
      imgUrl:
        "https://designit.menards.com/media/Fence/selection/post/wood/1112201.jpg",
      heading: "4 x 8 x 10' #2 Ground Contact AC2® Timber",
      price: 12,
    },
    {
      imgUrl:
        "https://designit.menards.com/media/Fence/selection/post/wood/1112201.jpg",
      heading: "4 x 6 x 10' #2 Ground Contact AC2® Timber",
      price: 18,
    },
  ];

  const getFencePost = (text, tp) => {
    console.log(text, tp);
    dispatch(optSelect(text));
    dispatch(optionPrice(tp));
    // dispatch(TotalPrice(tp));
  };

   const decrementValue = () => {
    dispatch(decrement())
   }

   const incrementValue = () => {
    dispatch(increment());
   }

  return (
    <>
       <div>
      <div className="lg:flex h-full w-full hidden">
        <div className="border h-full lg:w-4/12 w-full border-b-0">
          <div className="w-full p-3 text-green-500 ">
            <h1 className="border-b border-green-500 w-34">
              Select a post and click continue
            </h1>
          </div>
          <div className="w-full h-12 p-4 my-3 md:justify-end justify-start flex items-center cursor-pointer">
            <button
            className="border md:p-3 p-2 rounded-full bg-green-600 text-white cursor-pointer"
            onClick={navigateToSum}
            >
              continue
            </button>
        </div>
          <div className="flex gap-3 p-2">
            {arr.map((ele, ind) => {
              return (
                <div key={ind}>
                  <div
                    className="border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2"
                    onClick={() => {
                      let total_price = ele.price * totalLength;
                      getFencePost(ele.heading, total_price);
                    }}
                  >
                    <img
                      src={ele.imgUrl}
                      className="w-full  bg-cover bg-center"
                      alt=""
                      style={{ cursor: "pointer" }}
                    />
                    <h1>{ele.heading}</h1>
                  </div>
                </div>
              );
            })}
          </div>
         
         <div className="increaseqtycontainer">
            {/* <div className="increaseqty">
                <p>Spacing In Inches (0-12):</p>
                <div className="innerqtybtns">
                    <button >-</button>
                    <button ></button>
                    <button >+</button>
                </div>
            </div> */}
            <div>
              <h1>{`Spacing In Inches (0-12):`}</h1>
              <div className="flex justify-center items-center gap-2" >
                <button id="decreaseBtn" onClick={decrementValue} className="border bg-gray-400 px-4 py-2 text-white">-</button>
                <input type="number" disabled={true} id="cBr" value={count} className="border border-black h-10 w-10 text-center" />
                <button id="incBtn" onClick={incrementValue} className="border bg-gray-400 px-4 py-2 text-white">+</button>
              </div>
            </div>
         </div>

        </div>
        <div className="border h-full w-8/12 lg:flex hidden flex-col p-5">
          <h1 className=" text-3xl" style={{marginLeft:"1rem"}}>FENCE POST SELECTION GUIDE</h1>
          <div>
            <OptionsTables />
          </div>
        </div>
      </div>
      <div className="lg:hidden flex">
        {!isTable ? (
          <div className="border h-full w-full border-b-0">
            <div className="w-full p-3 text-green-500 ">
              <h1 className="border-b border-green-500 w-34">
                Select a post and click continue
              </h1>
            </div>
            
            <div className="w-full h-12 p-4 my-3 md:justify-end justify-start flex items-center cursor-pointer">
                <button
                className="border md:p-3 p-2 rounded-full bg-green-600 text-white cursor-pointer"
                onClick={navigateToSum}
                >
                  continue
                </button>
            </div>

            <div className="flex gap-3 p-2">
              {arr.map((ele, ind) => {
                return (
                  <div key={ind}>
                    <div
                      className="border  flex flex-col gap-3 w-full h-full rounded-md shadow-md p-2 "
                      onClick={() => getFencePost(ele.heading)}
                    >
                      <img
                        src={ele.imgUrl}
                        className="w-full  bg-cover bg-center"
                        alt=""
                        style={{ cursor: "pointer" }}
                      />
                      <h1>{ele.heading}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        ) : (
          <div className="border h-full w-full">
            <h1 className=" text-3xl">FENCE POST SELECTION GUIDE</h1>
            <div>
              <OptionsTables />
            </div>
          </div>
        )}
        <div className="w-full h-12 fixed bottom-0 z-50 flex items-center justify-center gap-3 bg-slate-500 opacity-80 lg:hidden">
          <button
            onClick={(e) => {
              e.preventDefault();
              setisCanvas(true);
            }}
            className={`rounded-full border ${
              !isTable ? "bg-green-500" : "bg-slate-500"
            } border-green-500 h-8 w-8`}
          ></button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setisCanvas(false);
            }}
            className={`rounded-full border  ${
              isTable ? "bg-green-500" : "bg-slate-500"
            } border-green-500 h-8 w-8`}
          ></button>
        </div>
      </div>
    </div>
    {/* <button
        onClick={navigateToSum}
        style={{
          backgroundColor: "green",
          position: "absolute",
          right: "2%",
          top: "8.5%",
          padding: ".5rem 2rem",
          color: "#fff",
          borderRadius: "20px",
        }}
      >
        Continue
      </button> */}
    </>
  );
};

export default Option;
