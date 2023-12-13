import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './MaterailGatePrew.css';

const MaterialGatePrew = () => {
  const [selectedGate, setSelectedGate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstModalVal, setFirstModalVal] = useState("");
  const [secondModalVal, setSecondModalVal] = useState("");
  const [modalBtnVal, setModalBtnVal] = useState("");

  const gates = [
    {
      img: "https://designit.menards.com/media/Fence/selection/opening.jpg",
      txt: "Add Opening",
    },
    {
      img: "https://designit.menards.com/media/Fence/selection/gates/wood-picket/1731257-gate.jpg",
      txt: "Build a Gate",
    },
    {
      img: "https://designit.menards.com/media/Fence/selection/remove-selection.jpg",
      txt: "Remove Selection",
    },
  ];

  const handleGateClick = (index) => {
    setSelectedGate(index);
  };

  const navigate = useNavigate();

  const handlePlaceButtonClick = () => {
    if (selectedGate === null) {
      setFirstModalVal("Fence Side");
      setSecondModalVal("Please select a gate first.");
      setModalBtnVal("Ok");
      setShowModal(true);
    } else {
      setFirstModalVal("Fence Side");
      setSecondModalVal("Plz Select a Fence Side Before Gate/Opening");
      setModalBtnVal("Ok");
      setShowModal(true);
      // Logic to handle placing the gate
      // This could involve updating state or triggering some other action
    }
  };

  // const continueHandler = () => {
  //   const cUrl =  window.location.href;
  //   if ((cUrl === "https://comfortable-tan-wig.cyclic.app/materials/gate") || (cUrl === "http://localhost:5173/materials/gate")) {

  //   }
  // };

  return (
    <>
      <div className="w-full h-12 p-4 my-3 md:justify-end justify-start flex items-center cursor-pointer">
        <button
          className="border md:p-3 p-2 rounded-full bg-green-600 text-white cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigate("/materials/option");
          }}
        >
          continue
        </button>
      </div>
      <div className="w-full h-8 text-green-600 border flex items-center justify-start p-1">
        <h1 className="p-2">Place Gate and openings ?</h1>
      </div>
      <div className="w-full p-2  flex items-center flex-col justify-center">
        <h1 className="w-full">
          Select a gate or opening below, adjust the size if applicable. Select
          the fence side and click/tap the place button. Adjust the location by
          dragging.
        </h1>
        <div>
          <div className="h-full w-full p-2 flex items-center gap-4 mt-10 justify-center border ">
            {gates.map((ele, ind) => {
              return (
                <div
                  key={ind}
                  onClick={() => handleGateClick(ind)}
                  className={`gatesbox ${
                    selectedGate === ind ? "selected" : ""
                  } border border-black rounded-md p-2`}
                >
                  <img src={ele.img} alt="" />
                  <p className="text-center text-xs">{ele.txt}</p>
                </div>
              );
            })}
          </div>
          <div className="h-full w-full">
            <h1 className="w-full flex mt-10 justify-between bg-gray-200 p-5">
              <p className="text-lg">{`Build a Gate width (3.0 ~ 10.0)`}</p>
              <button>Expand</button>
            </h1>

            {selectedGate !== 2 && (
              <>
              <div className="flex text-xl gap-2 mt-10 items-center">
            <h1>Width :</h1>
            <div className="flex gap-3">
              <input
                type="number"
                className="rounded-full border-black border h-12 w-24"
                name="ft"
                id=""
              />{" "}
              <p className="h-12 text-center text-lg">ft's</p>
              <input
                type="number"
                className="rounded-full border-black border h-12 w-24"
                name="ft"
                id=""
              />{" "}
              <p className="h-12 text-center text-lg">inch's</p>
            </div>
          </div>
            <button onClick={handlePlaceButtonClick} style={{padding:".5rem 2rem" , backgroundColor:"#008000" , color:"#fff" , borderRadius:"20px" , marginTop:"1rem"}}>Place</button>
              </>
            )}





          </div>
        </div>
      </div>
      {showModal ? (
        <div className="modal-container">
          <div className="modal-box">
            <div className="m-header">
              <p>{firstModalVal}</p>
            </div>
            <div className="m-txt">
              <p>{secondModalVal}</p>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
              >
                {modalBtnVal}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MaterialGatePrew;

{
  /* <div>
      <p className='gateopening'>Place Gates & Openings </p>
      <p className='gateopeningInfo'>
        Select a gate or opening below, adjust the size if applicable. Select the fence side and click/tap the place
        button. Adjust the location by dragging.
      </p>
      <div className='gatesmain'>
        <div className='gatescontainer'>
          <div className='gates'>
            {gates.map((ele, ind) => {
              return (
                <div key={ind} onClick={() => handleGateClick(ind)} className={`gatesbox ${selectedGate === ind ? 'selected' : ''}`}>
                  <img src={ele.img} alt='' />
                  <p className='gtXt'>{ele.txt}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedGate !== 2 && (
        <div className='placegate-container'>
          <div className='place-gate'>
            <div className='ffInput'>
              <p>Width : </p>
              <input type='number' />
            </div>
            <div className='ssInput'>
              <p>ft : </p>
              <input type='number' />
              <p>In</p>
            </div>

            <div className='btnPlace'>
              <button onClick={handlePlaceButtonClick}>Place</button>
            </div>
          </div>
        </div>
      )}



    </div> */
}
