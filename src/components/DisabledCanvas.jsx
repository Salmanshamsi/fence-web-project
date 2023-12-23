import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const DisabledCanvas = () => {
  const renderlines = useSelector((state) => state.selectedDesign.Design);
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const drawLine = (ctx, x1, y1, x2, y2, lineIndex, color = "#66BB6A") => {
    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Math.ceil(length) > 0) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = color; // Set the line color
      ctx.stroke();
      ctx.closePath();

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
    }
  };

  const linesDataRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const resizeCanvas = () => {
      if (window.innerHeight <= 1100 && window.innerWidth <= 800) {
        canvas.width = window.innerWidth - 40;
        canvas.height = window.innerHeight - 20;
      } else {
        canvas.width = window.innerWidth - 400;
        canvas.height = window.innerHeight - 200;
      }
    };

    const handleClick = (event) => {
      const clickX = event.clientX - canvas.getBoundingClientRect().left;
      const clickY = event.clientY - canvas.getBoundingClientRect().top;
    
      // Check if the click is close to any line
      for (let i = 0; i < linesDataRef.current.length; i++) {
        const { startX, startY, endX, endY } = linesDataRef.current[i];
        const distance = pointToLineDistance(clickX, clickY, startX, startY, endX, endY);
    
        // If the distance is within a threshold (e.g., 10 pixels), show an alert
        if (distance < 10) {
          alert("Hello");
          break; // Exit the loop after the first line is clicked
        }
      }
    };
    

    const pointToLineDistance = (px, py, x1, y1, x2, y2) => {
      const A = px - x1;
      const B = py - y1;
      const C = x2 - x1;
      const D = y2 - y1;

      const dot = A * C + B * D;
      const len_sq = C * C + D * D;
      const param = dot / len_sq;

      let xx, yy;

      if (param < 0 || (x1 === x2 && y1 === y2)) {
        xx = x1;
        yy = y1;
      } else if (param > 1) {
        xx = x2;
        yy = y2;
      } else {
        xx = x1 + param * C;
        yy = y1 + param * D;
      }

      const dx = px - xx;
      const dy = py - yy;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Add click event listener
    canvas.addEventListener("click", handleClick);

    // Call the resize function
    resizeCanvas();

    // Draw the lines on the canvas
    context.lineWidth = 7.5;
    context.lineJoin = "round";
    context.lineCap = "round";

    renderlines.forEach((line, index) => {
      drawLine(
        context,
        line.startX,
        line.startY,
        line.endX,
        line.endY,
        index,
        linesDataRef.current[index]?.color || "#66BB6A" // Pass the color
      );

      // If the color property is not set, set it to the default color
      if (!linesDataRef.current[index]?.color) {
        linesDataRef.current[index] = { ...linesDataRef.current[index], color: "#66BB6A" };
      }
    });

    // Cleanup: remove event listener
    return () => {
      canvas.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [renderlines]);
  const openModal = () => {
    const gateType = localStorage.getItem("gate");

    console.log("Gate Type : ", gateType);

    let selectedInfo = {};

    if (gateType === "remove") {
      // If gate type is 'remove', display custom information
      selectedInfo = {
        title: "Remove Gate",
        includes: [],
        description:
          "You have selected to remove the gate. Please proceed accordingly.",
        imageSrc:
          "https://designit.menards.com/media/Fence/selection/remove-selection.jpg", // Replace with your desired image URL
      };
    } else if (gateType === "openings") {
      selectedInfo = {
        title: "ADD A MATCHING GATE",
        includes: [],
        description:
          "You have selected to remove the gate. Please proceed accordingly.",
        imageSrc:
          "https://designit.menards.com/media/Fence/selection/opening.jpg", // Replace with your desired image URL
      };
    } else {
      // Default information for other cases
      selectedInfo = {
        title: "ADD A MATCHING GATE",
        includes: ["Posts", "Hardware", "Hinges", "Latch"],
        description:
          "Design includes materials recommended for installation. Please refer to the installation instructions for specifications and use.",
        imageSrc:
          "https://designit.menards.com/media/Fence/selection/gates/wood-picket/1731257-gate.jpg",
      };
    }

    setSelectedInfo(selectedInfo);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedInfo(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="w-full h-full flex items-center gap-1 p-2 justify-center flex-col">
        <div className="self-start ms-0">
          <button
            className="px-4 py-1 bg-green-500 rounded-b-none rounded-md text-white"
            onClick={closeModal}
          >
            Design
          </button>
          <button
            className="px-4 py-1 mx-2 bg-green-500 rounded-b-none rounded-md text-white"
            onClick={openModal}
          >
            Information
          </button>
        </div>
        {showModal && selectedInfo && (
          <div
            className="modal flex justify-left items-center"
            style={{ width: "100%" }}
          >
            <div className="w-full max-w-md p-4 bg-white rounded-md">
              <h1 className="font-bold text-2xl">{selectedInfo.title}</h1>
              <hr />
              <p className="text-2xl my-2">Fence Design Includes</p>
              <ul>
                {selectedInfo.includes.map((item, i) => (
                  <li key={i} className="font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mb-2 my-1">{selectedInfo.description}</p>
              <img
                src={selectedInfo.imageSrc}
                alt="Random Image"
                className="h-100 w-full"
              />
              <button onClick={closeModal}>Hide Information</button>
            </div>
          </div>
        )}
        <canvas
          style={{
            backgroundImage:
              "url(https://www.xmple.com/wallpaper/graph-paper-grey-white-grid-1920x1080-c2-ffffff-d3d3d3-l2-1-11-a-60-f-20.svg)",
          }}
          className={`border bg-center bg-cover pointer-events-none`}
          ref={canvasRef}
        />
      </div>
    </>
  );
};

export default DisabledCanvas;
