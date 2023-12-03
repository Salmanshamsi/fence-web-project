import React, { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
// import "./DisabledCanvas.css";
import "react-toastify/dist/ReactToastify.css";
import { totalDrawLength } from "../../redux/slices/FencePrice";
import { useNavigate } from "react-router-dom";
import {
  gCoordinatesEndX,
  gCoordinatesEndY,
  gCoordinatesStartX,
  gCoordinatesStartY,
} from "../../redux/slices/GetCoordinatesSlice";

const customStyles = {
  content: {
    width: "80%", // 80% of the viewport width
    maxWidth: "500px", // Maximum width for larger screens
    height: "60vh", // 60% of the viewport height
    maxHeight: "400px", // Maximum height for taller screens
    margin: "auto",
    padding: "0px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    // padding: '20px',
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

Modal.setAppElement("#root");

// const T_length = (value) => {
//   console.log("value : ", value)
//   value += value;
//   return value;
// }

const DisabledCanvas = () => {
  // .......................................

  const dispatch = useDispatch();

  const getEnterdLength = (feet, inch) => {
    if (feet) {
      dispatch(totalDrawLength(Number(feet)));
    } else if (inch) {
      const newInch = Number(inch / 100);
      dispatch(totalDrawLength(newInch));
    }
  };

  // ........................................

  const canvasRef = useRef(null);

  // state for the Draw Line

  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedLine, setSelectedLine] = useState(null);
  const [lines, setLines] = useState([]);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);

  // States For Draw Line's Edit Button..
  const [selectedLineIndex, setSelectedLineIndex] = useState(null);
  const [displayEditButton, setDisplayEditButton] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstModalVal, setFirstModalVal] = useState("");
  const [secondModalVal, setSecondModalVal] = useState("");
  const [modalBtnVal, setModalBtnVal] = useState("");
  const navigate = useNavigate();

  let StartOneX = useSelector((state) => state.corrdinates.startX);
  let StartOneY = useSelector((state) => state.corrdinates.startY);
  let StartSecondX = useSelector((state) => state.corrdinates.endX);
  let StartSecondY = useSelector((state) => state.corrdinates.endY);

  const renderlines = [
    {
      startXVal: StartOneX,
      startYVal: StartOneY,
      endXVal: StartSecondX,
      endYVal: StartSecondY,
    },
  ];

  // console.log(renderlines);

  //  states For Modal's..

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enteredFeet, setEnteredFeet] = useState(""); // State to store entered feet
  const [enteredInches, setEnteredInches] = useState(""); // State to store entered inches
  const editLines = useSelector((state) => state.canvas.lines);
  const myAlLines = useSelector((state) => state.corrdinates.allLinesShow);
  console.log("myAllLines : " + myAlLines);
  myAlLines.map((ele) => console.log(ele));

  const initialLines = [
    {
      endX: 34.00090665740623,
      endY: 14.860619689318344,
      startX: 18.56300253,
      startY: 11.25940117,
    },
    {
      endX: 43.00090665740623,
      endY: 32.860619689318344,
      startX: 294.22968954,
      startY: 114.25940119,
    },
    {
      endX: 67.00090665740623,
      endY: 26.860619689318344,
      startX: 184177441.22968954,
      startY: 115069600.92608818,
    },
    {
      endX: 67.00090665740623,
      endY: 50.860619689318344,
      startX: 184177438.56300253,
      startY: 115069699.5927752,
    },
  ];

  // Generate RandomId Function

  const drawLine = (ctx, x1, y1, x2, y2, index) => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Math.ceil(length) > 0) {
      // Draw the line
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();

      // Draw rounded dots at start and end points
      ctx.beginPath();
      ctx.arc(x1, y1, 7, 0, 3 * Math.PI);
      ctx.fillStyle = "#68AEB7";
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(x2, y2, 7, 0, 3 * Math.PI);
      ctx.fillStyle = "#68AEB7";
      ctx.fill();
      ctx.closePath();

      // // Calculate the position for the "90-degree" text
      // const textX = x1 + 15; // Adjusted for a 2-pixel gap
      // const textY = y1 + -15; // Adjusted for a 2-pixel gap

      // ctx.font = '20px Arial';
      // ctx.fillStyle = 'black';
      // ctx.fillText('90°', textX, textY);

      if (displayEditButton) {
        // Draw the "Edit" button with the given icon
        const buttonX = (x1 + x2) / 2 - 20; // Adjusted for a larger button
        const buttonY = (y1 + y2) / 2 - 10; // Adjusted for a larger button

        ctx.fillStyle = "white";
        ctx.fillRect(buttonX + 5, buttonY + -5, 30, 30);

        // Remove background color
        ctx.fillStyle = "black";
        ctx.font = "24px FontAwesome"; // Adjusted for a larger button and using FontAwesome
        // Replace the text with the icon
        ctx.fillText("\uf044", buttonX + 10, buttonY + 15);

        // Add an event listener for the "Edit" button
        canvasRef.current.addEventListener("click", (e) => {
          const rect = canvasRef.current.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const clickY = e.clientY - rect.top;

          if (
            clickX >= buttonX &&
            clickX <= buttonX + 40 &&
            clickY >= buttonY &&
            clickY <= buttonY + 40
          ) {
            // The "Edit" button was clicked
            handleEditButtonClick(
              { startX: x1, startY: y1, endX: x2, endY: y2 },
              index
            );
          }
        });
      }
    }
  };

  const handleRemoveButtonClick = () => {
    setIsModalOpen(false);

    if (selectedLineIndex !== null) {
      // console.log("Selected Line Index:", selectedLineIndex);

      // Remove the selected line from the lines array
      const updatedLines = [...lines];
      updatedLines.splice(selectedLineIndex, 1);

      // console.log("Updated Lines:", updatedLines);

      // Clear the selected line and index
      setSelectedLine(null);
      setSelectedLineIndex(null);

      // Redraw the lines on the canvas without resetting the entered feet or inches
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);

      updatedLines.forEach((line) => {
        drawLine(context, line.startX, line.startY, line.endX, line.endY);
      });

      setLines(updatedLines);

      // console.log("Lines after removal:", updatedLines);
    }
  };

  const handleEditButtonClick = (line, index) => {
    setSelectedLine(line);
    setSelectedLineIndex(index);
    setDisplayEditButton(true);
    setIsModalOpen(true);

    // Add an event listener for the "Edit" button
    const handleCanvasClick = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const buttonX = (line.startX + line.endX) / 2 - 20;
      const buttonY = (line.startY + line.endY) / 2 - 10;

      if (
        clickX >= buttonX &&
        clickX <= buttonX + 40 &&
        clickY >= buttonY &&
        clickY <= buttonY + 20
      ) {
        // The "Edit" button was clicked
        handleEditButtonClick(
          {
            startX: line.startX,
            startY: line.startY,
            endX: line.endX,
            endY: line.endY,
          },
          index
        );

        // Remove the event listener after it has been used
        canvasRef.current.removeEventListener("click", handleCanvasClick);
      }
    };

    canvasRef.current.addEventListener("click", handleCanvasClick);
  };

  const ModalDoneHandler = () => {
    setIsModalOpen(false);
    const line = selectedLine;
    const centerX = (line.startX + line.endX) / 2;
    const centerY = (line.startY + line.endY) / 2 + 20;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.font = "15px Arial";
    context.fillStyle = "black";

    if (enteredFeet) {
      if (enteredFeet >= 1 && enteredFeet <= 1000) {
        getEnterdLength(enteredFeet, null);
        const feetText = `${enteredFeet} ft's`;
        const textWidth = context.measureText(feetText).width;
        context.fillText(feetText, centerX - textWidth / 2, centerY + 20);
        // Reset the entered feet flag
        setEnteredFeet(false);
      } else {
        toast.warning("Entered Feet is Out Of Range !");
      }
    } else {
      if (enteredInches >= 0 && enteredInches <= 11) {
        getEnterdLength(null, enteredInches);
        const inchesText = `${enteredInches} inch's`;
        const textWidth = context.measureText(inchesText).width;
        context.fillText(inchesText, centerX - textWidth / 2, centerY + 35);
        // Reset the entered inches flag
        setEnteredInches(false);
      } else {
        toast.warning("Entered inch's is Out Of Range !");
      }
    }
  };

  // Function to check if two lines intersect
  const doLinesIntersect = (line1, line2) => {
    const x1 = line1.startX;
    const y1 = line1.startY;
    const x2 = line1.endX;
    const y2 = line1.endY;

    const x3 = line2.startX;
    const y3 = line2.startY;
    const x4 = line2.endX;
    const y4 = line2.endY;

    const ua =
      ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    const ub =
      ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
      ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1));

    return ua >= 0 && ua <= 1 && ub >= 0 && ub <= 1;
  };

  // mouse event handlers for screens

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

    const newX = e.nativeEvent.offsetX;
    const newY = e.nativeEvent.offsetY;

    // Check if the new line intersects with any existing lines
    const intersects = lines.some((line) => {
      return doLinesIntersect({ startX, startY, endX: newX, endY: newY }, line);
    });

    if (!intersects) {
      // Check if the new line is drawn away from the existing line
      const drawnAway = lines.every((line) => {
        return (
          !doLinesIntersect(
            { startX, startY, endX: newX, endY: newY },
            {
              startX: line.endX,
              startY: line.endY,
              endX: line.startX,
              endY: line.startY,
            }
          ) &&
          !doLinesIntersect(
            { startX, startY, endX: newX, endY: newY },
            {
              startX: line.startX,
              startY: line.startY,
              endX: line.endX,
              endY: line.endY,
            }
          )
        );
      });

      if (drawnAway) {
        setEndX(newX);
        setEndY(newY);

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);

        lines.forEach((line) => {
          drawLine(context, line.startX, line.startY, line.endX, line.endY);
        });

        drawLine(context, startX, startY, newX, newY);
        setDisplayEditButton(true);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);

    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    if (length > 0.0) {
      // Check if the new line intersects with any existing lines
      const intersects = lines.some((line) => {
        return doLinesIntersect({ startX, startY, endX, endY }, line);
      });

      if (!intersects) {
        setLines([
          ...lines,
          { startX, startY, endX, endY, enteredFeet, enteredInches },
        ]);
      } else {
        console.log(
          "The new line intersects with an existing line. Not adding it."
        );
      }
    }

    // Clear the selected line and index
    setSelectedLine(null);
    setSelectedLineIndex(null);
  };

  // Touch event handlers for mobile screens

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    handleMouseDown({
      nativeEvent: {
        offsetX: touch.clientX - canvasRef.current.getBoundingClientRect().left,
        offsetY: touch.clientY - canvasRef.current.getBoundingClientRect().top,
      },
    });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    handleMouseMove({
      nativeEvent: {
        offsetX: touch.clientX - canvasRef.current.getBoundingClientRect().left,
        offsetY: touch.clientY - canvasRef.current.getBoundingClientRect().top,
      },
    });
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // use-eff

  useEffect(() => {
    const handleCanvasClick = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      const lineClicked = lines.find((line, index) => {
        const buttonX = (line.startX + line.endX) / 2 - 20;
        const buttonY = (line.startY + line.endY) / 2 - 10;

        return (
          clickX >= buttonX &&
          clickX <= buttonX + 40 &&
          clickY >= buttonY &&
          clickY <= buttonY + 20
        );
      });

      if (lineClicked) {
        handleEditButtonClick(lineClicked, lines.indexOf(lineClicked));
      }
    };

    const canvas = canvasRef.current;

    canvas.addEventListener("click", handleCanvasClick);

    return () => {
      if (canvas) {
        canvas.removeEventListener("click", handleCanvasClick);
      }
    };
  }, [lines]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      if (window.innerHeight <= 1100 && window.innerWidth <= 800) {
        canvas.width = window.innerWidth - 40;
        canvas.height = window.innerHeight - 10;
      } else {
        canvas.width = window.innerWidth - 400;
        canvas.height = window.innerHeight - 100;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    context.lineWidth = 7.5;
    context.strokeStyle = "#66BB6A";
    context.lineJoin = "round";
    context.lineCap = "round";

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all lines at once without clearing the canvas in between
    myAlLines.map((line) => {
      drawLine(context, line.startX, line.startY, line.endX, line.endY);
      console.log(line);
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // useEffect(() => {
  //     editLines.forEach((line) => {
  //   drawLine(context, line.startX, line.startY, line.endX, line.endY);
  // });
  // } , [editLines])

  let cUrl = window.location.href;

  const continueHandler = () => {
    if (cUrl === "http://localhost:5173/materials/gate") {
      setShowModal(true);
      setFirstModalVal("Congratulations on completing your Fence design!");
      setSecondModalVal("Login or Create an Account");
      setModalBtnVal("Ok");
    }
  };
  const cModal = () => {
    setShowModal(false);
    navigate("/summary");
  };

  return (
    <>
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="canvsDIv">
          <ToastContainer position="bottom-right" />
          <canvas
            style={{
              pointerEvents: "none",
              backgroundImage:
                "url(https://www.xmple.com/wallpaper/graph-paper-grey-white-grid-1920x1080-c2-ffffff-d3d3d3-l2-1-11-a-60-f-20.svg)",
            }}
            className={`border bg-center bg-cover`}
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
          {selectedLine && isModalOpen && (
            <Modal isOpen={isModalOpen} style={customStyles}>
              <div className="w-full h-full flex flex-col justify-center items-center overflow-y-hidden">
                <div className="w-full h-full p-3 flex items-center justify-between bg-green-500 text-white">
                  <h1>Edit Fence Size</h1>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsModalOpen(false);
                    }}
                    className="text-2xl"
                  >
                    <i className="fa-regular fa-circle-xmark"></i>
                  </button>
                </div>

                <div className="flex h-full items-start flex-col justify-start w-full p-2">
                  <h1 className="text-xl font-bold lg:p-5 p-2">
                    Enter The Length of Fence :
                  </h1>
                  <div className=" h-full w-full flex justify-center lg:gap-20 gap-16">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <input
                        type="number"
                        id="nextSide"
                        name="nextSideVal"
                        placeholder="Enter fts"
                        className="border text-center w-20 h-10 lg:w-24 lg:h-12 rounded-full border-gray-400 "
                        onChange={(e) => {
                          e.preventDefault();
                          setEnteredFeet(e.target.value);
                        }}
                      />
                      <h2>(1-1000)</h2>
                      <button className="flex items-center justify-center h-12 w-28 bg-green-500 text-white rounded-full">
                        Next Side
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <input
                        type="number"
                        id="doneSide"
                        name="doneSideVal"
                        placeholder="Enter in"
                        className="border text-center w-20 h-10 lg:w-24 lg:h-12 rounded-full border-gray-400 "
                        onChange={(e) => {
                          e.preventDefault();
                          setEnteredInches(e.target.value);
                        }}
                      />
                      <h2>(0-11)</h2>
                      <button
                        onClick={ModalDoneHandler}
                        className="flex items-center justify-center h-12 w-28 bg-green-500 text-white rounded-full"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>

                <div className="h-full w-full items-center justify-center flex p-2">
                  <button
                    onClick={handleRemoveButtonClick}
                    className="h-12 w-24 border border-red-500 rounded-full text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </Modal>
          )}
        </div>
      </div>
      <button onClick={continueHandler}>Continue</button>
      {showModal ? (
        <div className="modal-container" style={{ marginTop: "8rem" }}>
          <div className="modal-box">
            <div className="m-header">
              <p>{firstModalVal}</p>
            </div>
            <div className="m-txt">
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  margin: "1rem 1rem 0rem 1rem",
                }}
              >
                {secondModalVal}
              </h1>
              <p style={{ fontSize: "14px", fontWeight: "200" }}>
                Saving will give you the ability to recall your design in the
                future and is highly recommended.
              </p>
              <p style={{ fontSize: "14px", fontWeight: "200" }}>
                To save your design to your Menards.com account, select the ‘OK’
                button below
              </p>
              <p style={{ fontSize: "14px", fontWeight: "200" }}>
                Select the ‘Login’ button in the upper right corner
              </p>
              <p style={{ fontSize: "14px", fontWeight: "200" }}>
                Once you are logged in, select the ‘Print Design Packet’ button
              </p>
              <p style={{ fontSize: "14px", fontWeight: "200" }}>
                To purchase your materials, go to the Purchase tab and follow
                the instructions there.
              </p>
              <button onClick={cModal}>{modalBtnVal}</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DisabledCanvas;
