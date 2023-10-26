import React, { useRef, useState, useEffect } from "react";
import "./DrawCanvas.css";

const DrawCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [endX, setEndX] = useState(0);
  const [endY, setEndY] = useState(0);

  const canvasWidth = 1050; // Width of the canvas in pixels
  const canvasHeight = 500; // Height of the canvas in pixels

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      console.log("Canvas Width:", canvas.width);
      console.log("Canvas Height:", canvas.height);
    }
  }, []);

  const handleStart = (x, y) => {
    setIsDrawing(true);
    setStartX(x);
    setStartY(y);
  };

  const handleMove = (x, y) => {
    if (!isDrawing) return;
    setEndX(x);
    setEndY(y);
  };

  const handleEnd = () => {
    if (isDrawing) {
      setIsDrawing(false);
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.strokeStyle = "#009a3d";
      context.lineWidth = 30;
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
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
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    handleMove(x, y);
  };

  const handleCanvasClick = () => {
    handleEnd();
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
    const touch = e.touches[0];
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const x = touch.clientX - canvasRect.left;
    const y = touch.clientY - canvasRect.top;
    handleMove(x, y);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <div className="canvasmain">
        <canvas
          id="canvas"
          style={{ border: "1px solid black" }}
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleEnd}
          onClick={handleCanvasClick}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      </div>

      <button onClick={clearCanvas}>Clear Canvas</button>
    </>
  );
};

export default DrawCanvas;