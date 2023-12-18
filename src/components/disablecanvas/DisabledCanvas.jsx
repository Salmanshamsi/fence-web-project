import { useSelector} from "react-redux";
import { useState, useRef, useEffect } from "react";



const DisabledCanvas = () => {

  const renderlines = useSelector((state) => state.selectedMaterials.selectedLines);

  const canvasRef = useRef(null);

  const DemoLines = [
    { startX: 100, startY: 100, endX: 200, endY: 100 },
    { startX: 200, startY: 100, endX: 200, endY: 200 },
    { startX: 200, startY: 200, endX: 100, endY: 200 },
    { startX: 100, startY: 200, endX: 100, endY: 100 },
  ];

  const drawLine = (ctx, x1, y1, x2, y2) => {
  
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

    }

  };

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

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    context.lineWidth = 7.5;
    context.strokeStyle = "#66BB6A";
    context.lineJoin = "round";
    context.lineCap = "round";

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw all lines at once without clearing the canvas in between
    renderlines.map((line) => {
      drawLine(context, line.startX, line.startY, line.endX, line.endY);
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };

  }, []);


  return (
    <>
      <div
        className="w-full h-full flex  items-center gap-1 p-2 justify-center flex-col">
        <div className="self-start ms-8 ">
            <button className='px-4 py-1 bg-green-500 rounded-b-none rounded-md text-white' >Design</button>
        </div>
          <canvas
            style={{backgroundImage:"url(https://www.xmple.com/wallpaper/graph-paper-grey-white-grid-1920x1080-c2-ffffff-d3d3d3-l2-1-11-a-60-f-20.svg)",}}
            className={`border bg-center bg-cover pointer-events-none`}
            ref={canvasRef}
          />
      </div>
    </>
  );
};



export default DisabledCanvas;