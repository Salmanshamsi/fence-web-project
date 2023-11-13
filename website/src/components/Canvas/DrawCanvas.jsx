import React, { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { doneSide , nextSide } from '../../redux/slices/modalSlice'
import './DrawCanvas.css'

const customStyles = {
  content: {
    width: '500px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    // padding: '20px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

Modal.setAppElement('#root');

const DrawCanvas = () => {


  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);
  const [enteredFeet, setEnteredFeet] = useState(""); // State to store entered feet
  const [enteredInches, setEnteredInches] = useState(""); // State to store entered inches
    // Add a state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLine, setSelectedLine] = useState(null);
  const [displayEditButton, setDisplayEditButton] = useState(false);
  const [userInputs , setUserInputs] = useState({
    nextSideVal:"",
    doneSideVal:""
  })


  const handleEditButtonClick = (line) => {
    setSelectedLine(line);
    // Close the modal if it's open
    if (isModalOpen) {
      setIsModalOpen(false);
    }
    setIsModalOpen(true);
  };



  const removeLineHandler = () => {
    // Close the modal
    setIsModalOpen(false);
  
    // Remove the selected line from the lines state
    if (selectedLine) {
      setLines((prevLines) =>
        prevLines.filter(
          (line) =>
            line.startX !== selectedLine.startX ||
            line.startY !== selectedLine.startY ||
            line.endX !== selectedLine.endX ||
            line.endY !== selectedLine.endY
        )
      );
  
      setSelectedLine(null);
  
      // Redraw the canvas with the updated lines
      drawLines();
    }
  };
  


  const handleDoneClick = () => {
    // Close the modal
    setIsModalOpen(false);
    
    // Display the entered feet and inches at the center bottom of the line
    const line = selectedLine;
    // const feetText = `${enteredFeet} ft's`;
    // const inchesText = `${enteredInches} inch's`;
  
    const centerX = (line.startX + line.endX) / 2;
    const centerY = (line.startY + line.endY) / 2;
  
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
  
    // Explicitly set font size and color
    context.font = '12px Arial';
    context.fillStyle = 'black';
  
   
    if (enteredFeet) {
      const feetText = `${enteredFeet} ft's`;
      const textWidth = context.measureText(feetText).width;
      context.fillText(feetText, centerX - textWidth / 2, centerY + 20);
      // Reset the entered feet flag
      setEnteredFeet(false);
    }
  
    if (enteredInches) {
      const inchesText = `${enteredInches} inch's`;
      const textWidth = context.measureText(inchesText).width;
      context.fillText(inchesText, centerX - textWidth / 2, centerY + 35);
      // Reset the entered inches flag
      setEnteredInches(false);
    }

  };
  
  const drawLines = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    lines.forEach((line) => {
      drawLine(context, line.startX, line.startY, line.endX, line.endY);
    });
  };
  

  const drawLine = (ctx, x1, y1, x2, y2) => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  
    if (length > 0.00) {
      // Draw the line
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
  
      // Draw rounded dots at start and end points
      ctx.beginPath();
      ctx.arc(x1, y1, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
  
      ctx.beginPath();
      ctx.arc(x2, y2, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.closePath();
  
      // Calculate the position for the "90-degree" text
      const textX = x1 + 2; // Adjusted for a 2-pixel gap
      const textY = y1 - 2; // Adjusted for a 2-pixel gap
  
      ctx.font = '12px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText('(90°)', textX, textY);
  
      if (displayEditButton) {

        
        // Draw the "Edit" button with the given icon
        const buttonX = (x1 + x2) / 2 - 20; // Adjusted for a larger button
        const buttonY = (y1 + y2) / 2 - 10; // Adjusted for a larger button
      
        // Remove background color
        ctx.fillStyle = 'black';
        ctx.font = '14px FontAwesome'; // Adjusted for a larger button and using FontAwesome
        // Replace the text with the icon
        ctx.fillText('\uf044', buttonX + 10, buttonY + 15);
  
        // Add an event listener for the "Edit" button
        canvasRef.current.addEventListener('click', (e) => {
          const rect = canvasRef.current.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const clickY = e.clientY - rect.top;
      
          if (clickX >= buttonX && clickX <= buttonX + 40 && clickY >= buttonY && clickY <= buttonY + 20) {
            // The "Edit" button was clicked
            handleEditButtonClick({ startX: x1, startY: y1, endX: x2, endY: y2 });
          }
        });
      }
    }
  };
  


  const handleMouseDown = (e) => {
    setIsDrawing(true);
    setStartX(e.nativeEvent.offsetX);
    setStartY(e.nativeEvent.offsetY);
    setEndX(e.nativeEvent.offsetX);
    setEndY(e.nativeEvent.offsetY);
    setDisplayEditButton(false); // Don't display the Edit button initially
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;
  
    setEndX(e.nativeEvent.offsetX);
    setEndY(e.nativeEvent.offsetY);
  
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    lines.forEach((line) => {
      drawLine(context, line.startX, line.startY, line.endX, line.endY, line.enteredFeet, line.enteredInches);
    });
  
    drawLine(context, startX, startY, endX, endY, userInputs.nextSideVal, userInputs.doneSideVal);
    setDisplayEditButton(true);
  };
  
  
  const handleMouseUp = () => {
    setIsDrawing(false);
    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);
  
    if (length > 0.00) {
      console.log(`Line length: ${length.toFixed(2)} pixels`);
      setLines([...lines, { startX, startY, endX, endY, enteredFeet, enteredInches }]);
    }
  };

 

    // Touch event handlers for mobile screens
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleMouseDown({ nativeEvent: { offsetX: touch.clientX - canvasRef.current.getBoundingClientRect().left, offsetY: touch.clientY - canvasRef.current.getBoundingClientRect().top } });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMouseMove({ nativeEvent: { offsetX: touch.clientX - canvasRef.current.getBoundingClientRect().left, offsetY: touch.clientY - canvasRef.current.getBoundingClientRect().top } });
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };



  // use-eff


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.lineJoin = 'round';
    context.lineCap = 'round';

    drawLines(context);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);



  return (
    <div className='' >
      <canvas
        className="border-black border"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      {selectedLine && isModalOpen && (
          <Modal
          isOpen={isModalOpen}
          contentLabel="Edit Line"
          style={customStyles}
          className='z-50'
          >
          <div className='editcanvasheader'><h2>Edit Fence Side</h2></div>
           <div className="editcanvastext"><p>Enter the length of the selected fence side.</p></div>
          <div className="editinputscontainer">
            <div className="editinputs">
              <div className="first_edit_input">
                <div className="first_editinnerBox">
                <input type="number" id='nextSide' name='nextSideVal' onChange={(e)=>{
                  e.preventDefault();
                  setEnteredFeet(e.target.value);
                }} />
                <p>ft</p>
                </div>
                 <p className='counts'>(1-1000)</p>
              </div>
              <div className="second_edit_input">
              <div className="second_editinnerBox">
                <input type="number" id='doneSide' name='doneSideVal' onChange={(e)=>{
                  e.preventDefault();
                  setEnteredInches(e.target.value);
                }} />
                <p>in</p>
                </div>
                 <p className='counts secondcount'>(0-11)</p>
              </div>
            </div>
          </div>
          <div className="nextsideand_donebtn_container">
            <div className="nextsideand_donebtn">
              <button >Next Side</button>
              <button onClick={handleDoneClick}>Done</button>
            </div>
          </div>
  
          <div className="removeselectedFenceSide">
            <p>Click to remove the selected fence side.</p>
          </div>
  
          <div className="removeSideBtn">
            <button           
            onClick={removeLineHandler}>Remove Side</button>
          </div>
          </Modal>
      )}
    </div>
  );
};

export default DrawCanvas;