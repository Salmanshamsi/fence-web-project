import React, { useState } from "react";
import "./RecallComp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { continueCanvasDesign } from "../../redux/slices/ContinueToCanvasSlice";

const Recall = () => {
  const [recallID, setRecallID] = useState("");
  const [recalledDrawings, setRecalledDrawings] = useState([]);
  const [continuedseigning, setCotinueDesigning] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstModalVal , setFirstModalVal] = useState('');
  const [secondModalVal , setSecondModalVal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalBtnVal , setModalBtnVal] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setRecallID(event.target.value);
  };

  const recallIdHandler = async () => {
    try {
      // Check if the design ID is exactly 12 characters long
      if (recallID.length !== 12) {
        setFirstModalVal("Recall Design");
        setSecondModalVal("Invalid Design ID. Please enter a valid 12-character Design ID.")
        setModalBtnVal("Ok")
        setShowModal(true);
        return;
      }

      // Fetch the drawing using the API
      const response = await fetch(
        `http://localhost:3000/auth/getDrawing/${recallID}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          console.log("Drawing not found.");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        // Add the recalled drawing to the array
        setRecalledDrawings((prevDrawings) => [...prevDrawings, data]);
        setRecallID("")

        console.log("Data:", data);
        // Additional logic if needed
      } else {
        console.log("Response is not JSON:", response);
      }
    } catch (error) {
      console.error("Error fetching drawing:", error);
    }
  };

  const deleteDrawingHandler = async (id) => {
    try {
      console.log('Deleting drawing with ID:', id);
  
  
      // Send a POST request to the server to delete the drawing by ID
      const response = await fetch('http://localhost:3000/auth/deleteDrawing', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ randomId: id }),
      });
  
      console.log('Server response:', response);

      
    if (response.ok) {
      // Update state after successful deletion
      setRecalledDrawings((prevDrawings) => prevDrawings.filter((drawing) => drawing._id !== id));
      console.log('Drawing deleted successfully');
    } else {
      // Handle errors if needed
      console.error('Error deleting drawing. Server returned:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error deleting drawing:', error);
  }

  };
  
  const continueDesigning = async (id) => {
    try {
      const formattedId = id.toString();
      // Fetch the drawing using the API
      const response = await fetch(
        `http://localhost:3000/auth/getDrawing/${formattedId}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          console.log("Drawing not found.");
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();

        // Add the recalled drawing to the array
        setCotinueDesigning((prevDrawings) => [...prevDrawings, data]);

        dispatch(continueCanvasDesign(data));
        navigate("/canvas");
        // Additional logic if needed
      } else {
        console.log("Response is not JSON:", response);
      }
    } catch (error) {
      console.error("Error fetching drawing:", error);
    }
  };

  // const updateData = async (id, lines, pstTime) => {
  //   try {
  //     const response = await fetch("http://localhost:3000/auth/updateData", {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include", // Include credentials (cookies) for cross-origin requests
  //       body: JSON.stringify({
  //         randomId: id,
  //         lines,
  //         pstTime,
  //       }),
  //     });

  //     if (response.ok) {
  //       console.log("Data updated successfully");
  //       // Continue with your navigation or other logic
  //     } else {
  //       console.error("Error updating data:", response);
  //       // Handle the error as needed
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //     // Handle other errors as needed
  //   }
  // };

  return (
    <>
    <div>
      <div className="recall-compo">
        <div className="sh">
        <h1 className="logintoRetrive">Login to retrieve your designs, or search by Design ID:</h1>
        </div>
         <div className="f">
         <input
          type="text"
          className="recallId"
          placeholder="Design ID"
          value={recallID}
          onChange={handleChange}
        />
        <button onClick={recallIdHandler} className="recallBtn">
          Recall
        </button>
         </div>
      </div>

      {/* Display the recalled drawings if available */}
      {recalledDrawings.length > 0 && (
        <div className="mainrecalldrawing">
          <div className="recall-header-container">
            <div className="recallheader">
              <p>Design Name</p>
              <p>Design ID</p>
              <p>Date Created</p>
              <p>Last Modified</p>
            </div>
            <hr />
          </div>
          <div className="recall-data-container">
            {recalledDrawings.map((recalledDrawing) => (
              <div className="recal-data" key={recalledDrawing.randomId}>
                <p>Fence Design</p>
                <p>{recalledDrawing.randomId}</p>
                <p>{recalledDrawing.pstTime}</p>
                <p>{recalledDrawing.pstTime}</p>
                <button id="cont-designing" onClick={() => continueDesigning(recalledDrawing.randomId)}>Continue Designing</button>
                <button
                  id="remove-designing"
                  onClick={() => deleteDrawingHandler(recalledDrawing._id)}
                >
                  Remove
                </button>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    {
        showModal ?   <div className="modal-container">
        <div className="modal-box">
             <div className="m-header">
                <p>{firstModalVal}</p>
             </div>
             <div className="m-txt">
                <p>{secondModalVal}</p>
                <button onClick={() => {setShowModal(false)}}>{modalBtnVal}</button>
             </div>
        </div>
       </div> : null
     }
    </>
  );
};

export default Recall;



