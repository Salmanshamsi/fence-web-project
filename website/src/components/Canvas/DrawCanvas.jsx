import React, { useRef, useEffect, useState } from "react";
import "./DrawCanvas.css"; // Import your CSS file for styling

const DrawCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [canvasEnabled, setCanvasEnabled] = useState(true); // Flag to enable/disable canvas

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const scaleFactor = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * scaleFactor;
      canvas.height = window.innerHeight * scaleFactor;
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      const context = canvas.getContext("2d");
      context.scale(scaleFactor, scaleFactor);

      // Draw the grid
      const gridSize = 20; // Fixed grid size for both desktop and mobile
      const gridColor = "#ccc"; // Color of the grid lines
      const lineWidth = 1; // Fixed line width for both desktop and mobile

      for (let x = 0; x < canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.strokeStyle = gridColor;
        context.lineWidth = lineWidth;
        context.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.strokeStyle = gridColor;
        context.lineWidth = lineWidth;
        context.stroke();
      }
    }
  }, []);

  const handleStart = (x, y) => {
    if (canvasEnabled) {
      setIsDrawing(true);
      setStartX(x);
      setStartY(y);
      setCurrentLine({ startX: x, startY: y, endX: x, endY: y });
    }
  };

  const handleMove = (x, y) => {
    if (isDrawing) {
      setEndX(x);
      setEndY(y);
      setCurrentLine({ startX, startY, endX: x, endY: y });
    }
  };

  const handleEnd = () => {
    if (isDrawing) {
      setIsDrawing(false);
      setLines([...lines, currentLine]);
      setCurrentLine(null);
    }
  };

  const drawLines = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "#009a3d";
    context.lineWidth = 11;

    lines.forEach((line) => {
      context.beginPath();
      context.moveTo(line.startX, line.startY);
      context.lineTo(line.endX, line.endY);
      context.stroke();
    });

    if (currentLine) {
      context.beginPath();
      context.moveTo(currentLine.startX, currentLine.startY);
      context.lineTo(currentLine.endX, currentLine.endY);
      context.stroke();
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    handleStart(x, y);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isDrawing) {
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;
      handleMove(x, y);

      // Clear the canvas and redraw
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw the grid
      const gridSize = 20; // Fixed grid size for both desktop and mobile
      const gridColor = "#ccc"; // Color of the grid lines
      const lineWidth = 1; // Fixed line width for both desktop and mobile

      for (let x = 0; x < canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.strokeStyle = gridColor;
        context.lineWidth = lineWidth;
        context.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.strokeStyle = gridColor;
        context.lineWidth = lineWidth;
        context.stroke();
      }

      drawLines();
    }
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const x = touch.clientX - canvasRect.left;
    const y = touch.clientY - canvasRect.top;
    handleStart(x, y);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (isDrawing) {
      const touch = e.touches[0];
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const x = touch.clientX - canvasRect.left;
      const y = touch.clientY - canvasRect.top;
      handleMove(x, y);

      // Clear the canvas and redraw
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Redraw the grid
      const gridSize = 20; // Fixed grid size for both desktop and mobile
      const gridColor = "#ccc"; // Color of the grid lines
      const lineWidth = 1; // Fixed line width for both desktop and mobile

      for (let x = 0; x < canvas.width; x += gridSize) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
        context.strokeStyle = gridColor;
        context.lineWidth = lineWidth;
        context.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(canvas.width, y);
        context.strokeStyle = gridColor;
        context.lineWidth = lineWidth;
        context.stroke();
      }

      drawLines();
    }
  };

  const handleCanvasClick = () => {
    handleEnd();
  };

  const clearCanvas = () => {
    setLines([]);
    setCurrentLine(null);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Toggle canvas enabled/disabled
  const toggleCanvas = () => {
    setCanvasEnabled(!canvasEnabled);
  };

  return (
    <div className="canvasmain">
      <canvas
        id="canvas"
        style={{
          border: "1px solid black",
          pointerEvents: canvasEnabled ? "auto" : "none",
        }}
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleCanvasClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleCanvasClick}
      />
      <button  className="p-3 border bg-red-500 text-white mt-3 rounded-md" onClick={clearCanvas}>Clear Canvas</button>
      <button  className={`p-3 border ${canvasEnabled ? 'bg-green-500' : 'bg-red-500' } text-white mt-3 rounded-md`} onClick={toggleCanvas}>
        {canvasEnabled ? "Disable Canvas" : "Enable Canvas"}
      </button>
    </div>
  );
};

export default DrawCanvas;