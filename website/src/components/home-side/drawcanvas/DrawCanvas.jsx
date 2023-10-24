import React, { useRef, useState } from "react";

const DrawCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const canvasWidth = 800;  // Width of the canvas in pixels
  const canvasHeight = 500; // Height of the canvas in pixels

  // You might need to set up a scale factor to map canvas coordinates to actual latitude and longitude.

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    setStartX(e.nativeEvent.offsetX);
    setStartY(e.nativeEvent.offsetY);

    // You can map the canvas coordinates to latitude and longitude here.
    const latitude = (e.nativeEvent.offsetY / canvasHeight) * 180 - 90;
    const longitude = (e.nativeEvent.offsetX / canvasWidth) * 360 - 180;

    console.log("Start Latitude:", latitude);
    console.log("Start Longitude:", longitude);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const endX = e.nativeEvent.offsetX;
    const endY = e.nativeEvent.offsetY;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = "#009a3d";
    context.lineWidth = 10;

    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();

    // You can map the canvas coordinates to latitude and longitude here.
    const latitude = (endY / canvasHeight) * 180 - 90;
    const longitude = (endX / canvasWidth) * 360 - 180;

    console.log("End Latitude:", latitude);
    console.log("End Longitude:", longitude);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <>
      <h1 style={{ fontSize: "32px", textAlign: "center", marginTop: "3rem" }}>
        DRAW CANVAS
      </h1>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <canvas
          style={{ border: "1px solid black" }}
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        />
      </div>
    </>
  );
};

export default DrawCanvas;
