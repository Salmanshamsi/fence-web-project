import React, { useRef, useState } from "react";
import "./DrawCanvas.css";

const DrawCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const canvasWidth = 1050; // Width of the canvas in pixels
  const canvasHeight = 500; // Height of the canvas in pixels

  const handleStart = (x, y) => {
    setIsDrawing(true);
    setStartX(x);
    setStartY(y);

    const latitude = (y / canvasHeight) * 180 - 90;
    const longitude = (x / canvasWidth) * 360 - 180;

    console.log("Start Latitude:", latitude);
    console.log("Start Longitude:", longitude);
  };

  const handleMove = (x, y) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const endX = x;
    const endY = y;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#009a3d";
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();

    const latitude = (endY / canvasHeight) * 180 - 90;
    const longitude = (endX / canvasWidth) * 360 - 180;

    console.log("End Latitude:", latitude);
    console.log("End Longitude:", longitude);
  };

  const handleEnd = () => {
    setIsDrawing(false);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    handleMove(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const canvasRect = canvasRef.current.getBoundingClientRect();
    handleStart(touch.clientX - canvasRect.left, touch.clientY - canvasRect.top);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const canvasRect = canvasRef.current.getBoundingClientRect();
    handleMove(touch.clientX - canvasRect.left, touch.clientY - canvasRect.top);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <div className="canvansmain">
      <canvas
        id="canvas"
        style={{ border: "1px solid black" }}
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

export default DrawCanvas;
