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
  const [userInputs , setUserInputs] = useState({
    nextSideVal:"",
    doneSideVal:""
  })

  // Add a state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLine, setSelectedLine] = useState(null);
  const [displayEditButton, setDisplayEditButton] = useState(false);

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

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const drawLine = (ctx, x1, y1, x2, y2) => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (length > 0.00) {
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
        // Draw a larger "Edit" button in the center of the line
        const buttonX = (x1 + x2) / 2 - 20; // Adjusted for a larger button
        const buttonY = (y1 + y2) / 2 - 10; // Adjusted for a larger button

        ctx.fillStyle = 'lightgray'; // Button background color
        ctx.fillRect(buttonX, buttonY, 40, 20); // Adjusted for a larger button
        ctx.font = '14px Arial'; // Adjusted for a larger button
        ctx.fillStyle = 'black';
        ctx.fillText('Edit', buttonX + 10, buttonY + 15);

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

  const handleEditButtonClick = (line) => {
    setSelectedLine(line);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
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
      drawLine(context, line.startX, line.startY, line.endX, line.endY);
    });

    drawLine(context, startX, startY, endX, endY);
    setDisplayEditButton(true); // Display the Edit button when the user draws the line
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    if (length > 0.00) {
      console.log(`Line length: ${length.toFixed(2)} pixels`);
      setLines([...lines, { startX, startY, endX, endY }]);
    }
  };

  const dispatch = useDispatch();

  let name , value
  const handleChange = (event) => {
   name = event.target.name;
   value = event.target.value;
   setUserInputs({...userInputs , [name] : value});
  }
  
  const nextSide = () => {
    // dispatch(nextSide({type:"nextSide" , inputs:userInputs.nextSideVal}));
     alert("Data Add Successfully In Redux toolkit");
     setUserInputs({
      nextSideVal:""
     })
  }

  const DoneSide = () => {
    // dispatch(doneSide({type:"doneSide" , inputs:userInputs.doneSideVal}));
    alert("Data Add Successfully In Redux toolkit");
    setUserInputs({
      doneSideVal:""
     })
  }


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

  return (
    <div>
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
                <input type="number" id='nextSide' name='nextSideVal' onChange={handleChange} value={userInputs.nextSideVal}/>
                <p>ft</p>
                </div>
                 <p className='counts'>(1-1000)</p>
              </div>
              <div className="second_edit_input">
              <div className="second_editinnerBox">
                <input type="number" id='doneSide' name='doneSideVal' onChange={handleChange} value={userInputs.doneSideVal}/>
                <p>in</p>
                </div>
                 <p className='counts secondcount'>(0-11)</p>
              </div>
            </div>
          </div>
          <div className="nextsideand_donebtn_container">
            <div className="nextsideand_donebtn">
              <button onClick={nextSide}>Next Side</button>
              <button onClick={DoneSide}>Done</button>
            </div>
          </div>
  
          <div className="removeselectedFenceSide">
            <p>Click to remove the selected fence side.</p>
          </div>
  
          <div className="removeSideBtn">
            <button           
            onClick={handleModalClose}>Remove Side</button>
          </div>
          </Modal>
      )}
    </div>
  );
};

export default DrawCanvas;
