import React, { useRef, useEffect, useState} from "react";

const DrawCanvas = () => {

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [canvasEnabled, setCanvasEnabled] = useState(true);
  const [currentLine, setCurrentLine] = useState(null);
  const hasMoved = useRef(false); // Add a ref to track mouse movement

  const handleStart = (x, y) => {
    if (canvasEnabled) {
      hasMoved.current = false;
      setIsDrawing(true);
      setCurrentLine({ startX: x, startY: y, endX: x, endY: y });
    }
  };

  const resetDrawingState = () => {
    setIsDrawing(false);
    setCurrentLine(null);
  };
  

  const handleMove = (x, y) => {
    if (isDrawing) {
      hasMoved.current = true; // Set the flag to true on any mouse movement
      setCurrentLine({
        ...currentLine,
        endX: x,
        endY: y,
      });
      drawCanvas();
    }
  };

  const handleEnd = () => {
    if (isDrawing && hasMoved.current) {
      setIsDrawing(false);
      if (currentLine) {
        const newLines = [...lines, currentLine];
        setLines(newLines);
      }
      setCurrentLine(null);
      drawCanvas();
    }
    resetDrawingState();
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);

    const gridSize = 20;
    const gridColor = "#ccc";
    const lineWidth = 1;

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

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;

      context.scale(devicePixelRatio, devicePixelRatio);

      drawCanvas();
    };

    updateCanvasSize();

    
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

const handleTouchMove = (e) => {
  if (isDrawing) {
    const touch = e.touches[0];
    if (touch) {
      const x = touch.clientX - canvas.getBoundingClientRect().left;
      const y = touch.clientY - canvas.getBoundingClientRect().top;
      handleMove(x, y);
    }
  }
};
    const handleTouchEnd = () => {
      handleEnd();
    };

    canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      if (touch) {
        const x = touch.clientX - canvas.getBoundingClientRect().left;
        const y = touch.clientY - canvas.getBoundingClientRect().top;
        handleStart(x, y);
      }
    });

    canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      canvas.removeEventListener("touchstart", handleStart);
      canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
      canvas.addEventListener("touchend", handleTouchEnd, { passive: false });
    };
  }, [isDrawing]);


  const captureInput = () => {
    const coordinates = lines.map((line) => {
      return {
        startX: line.startX,
        startY: line.startY,
        endX: line.endX,
        endY: line.endY,
      };
    });
    alert("Drawn input coordinates:", coordinates);
  };
  

  return (
    <div className="canvasmain">
      <canvas
      className="h-5/6 w-full"
        id="canvas"
        style={{
          border: "1px solid black",
          pointerEvents: canvasEnabled ? "auto" : "none",
        }}
        ref={canvasRef}
        onMouseDown={(e) => {
          e.preventDefault();
          const x = e.nativeEvent.offsetX;
          const y = e.nativeEvent.offsetY;
          handleStart(x, y);
        }}
        onMouseMove={(e) => {
          e.preventDefault();
          if (isDrawing) {
            const x = e.nativeEvent.offsetX;
            const y = e.nativeEvent.offsetY;
            handleMove(x, y);
          }
        }}
        onMouseUp={handleEnd}
      />
        <div>
          {/* <button onClick={clearCanvas}>Clear</button> */}
          <button onClick={captureInput}>Capture Input</button>
      </div>
    </div>
  );
};

export default DrawCanvas