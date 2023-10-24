import React, { useRef, useState } from "react";

const DrawCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    setStartX(e.nativeEvent.offsetX);
    setStartY(e.nativeEvent.offsetY);
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
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };
  return (
    <>
      <div style={{display:"flex" , justifyContent:"center" , marginTop:"1rem"}}>
      <canvas
        style={{border:"1px solid black"}}
        ref={canvasRef}
        width={800}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      </div>
    </>
  );
};

export default DrawCanvas;
