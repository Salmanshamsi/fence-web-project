import React, { useState } from "react";
import "./RecallComp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { continueCanvasDesign } from "../../redux/slices/ContinueToCanvasSlice";
import { setIsLoading } from "../../redux/slices/loading";
import { deleteDesign, getDesign } from "../../API_Calls/API_Calls_";

const Recall = () => {

  const [recalledDrawings, setRecalledDrawings] = useState([]);
  const [continuedseigning, setCotinueDesigning] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstModalVal , setFirstModalVal] = useState('');
  const [secondModalVal , setSecondModalVal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalBtnVal , setModalBtnVal] = useState('');


  const [DataBase_Design , setDataBase_Design] = useState([]);
  const [recall_Id, setRecall_Id] = useState("");
  

  const navigate = useNavigate();
  const dispatch = useDispatch();


  // const getDesignfromDB = (id) => {
      
  //   dispatch(setIsLoading(true))
    
  //   if (recall_Id.length !== 12){

  //   try{
  //         // getDesign(id).then((resp)=>{
            
  //         //     setDataBase_Design(resp)
            
  //         // }).catch((err)=>{
  //         //     console.log("Error from setting design data in DB :", err)
  //         // })
  
  //         dispatch(setIsLoading(true))

  
  //     }catch(err){
  //       throw err
  //       dispatch(setIsLoading(true))
  //     }
  //   }else{
  //     setFirstModalVal("Recall Design");
  //     setSecondModalVal("Invalid Design ID. Please enter a valid 12-character Design ID.")
  //     setShowModal(true);
  //   }
  // }

  // const deletetDesignfromDB = (id) => {
      
  //   dispatch(setIsLoading(true))
    
  //   try{
  //         deleteDesign(id).then((resp)=>{
              
  //           console.log("response from deleting design Data in DB :", resp)
                 
  //         }).catch((err)=>{
  //             console.log("Error from deleting design data in DB :", err)
  //         })
  
  //         dispatch(setIsLoading(true))
  
  //     }catch(err){
        
  //       throw new err
  
  //       dispatch(setIsLoading(true))
  
  //     }
  // }

  const continuetoSelectedDesign = (id) => {

  }

  return (
    <>
    <div>

      <div className="w-full lg:h-14 h-32 border bg-gray-200 flex items-center justify-start" >
        <div className="w-full flex items-center justify-start gap-4 p-4 lg:flex-row flex-col" >
            <p className="text-base" >Login to retrieve your designs, or search by Design ID : <span className="border-2 border-green-500 rounded-full text-white font-bold bg-green-500 px-2 text-sm" >?</span> </p>
            <div className="flex gap-4" >
                <input onChange={(e)=>{
                    e.preventDefault();
                    setRecall_Id(e.target.value);
                }} className="border-2 border-green-500 rounded-full p-2  text-center" placeholder="Enter Recall id" type="number" name="recall_Id" />
                <button  className="bg-green-500 text-white p-2 border-2 rounded-full font-semibold" >recall</button>
            </div>
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
                <button id="cont-designing">Continue Designing</button>
                <button
                  id="remove-designing"
                >
                  Remove
                </button>
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Recall;




// const deleteDrawingHandler = async (id) => {
//   dispatch(setIsLoading(true))
//   try {
//     console.log('Deleting drawing with ID:', id);


//     // Send a POST request to the server to delete the drawing by ID
//     const response = await fetch('https://comfortable-tan-wig.cyclic.app/auth/deleteDrawing', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ randomId: id }),
//     });

//     console.log('Server response:', response);

    
//   if (response.ok) {
//     // Update state after successful deletion
//     setRecalledDrawings((prevDrawings) => prevDrawings.filter((drawing) => drawing._id !== id));
//     console.log('Drawing deleted successfully');
//   } else {
//     // Handle errors if needed
//     console.error('Error deleting drawing. Server returned:', response.status, response.statusText);
//   }

//   dispatch(setIsLoading(false))
// } catch (error) {
//   dispatch(setIsLoading(false))
//   console.error('Error deleting drawing:', error);
// }

// };




// const continueDesigning = async (id) => {
//   try {
//     const formattedId = id.toString();
//     // Fetch the drawing using the API
//     const response = await fetch(
//       `/auth/getDrawing/${formattedId}`
//     );

//     if (!response.ok) {
//       if (response.status === 404) {
//         console.log("Drawing not found.");
//       } else {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//     }

//     const contentType = response.headers.get("content-type");

//     if (contentType && contentType.includes("application/json")) {
//       const data = await response.json();

//       // Add the recalled drawing to the array
//       setCotinueDesigning((prevDrawings) => [...prevDrawings, data]);

//       dispatch(continueCanvasDesign(data));
//       navigate("/canvas");
//       // Additional logic if needed
//     } else {
//       console.log("Response is not JSON:", response);
//     }
//   } catch (error) {
//     console.error("Error fetching drawing:", error);
//   }
// };