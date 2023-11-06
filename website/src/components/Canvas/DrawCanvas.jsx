import React, { useRef, useState, useEffect } from 'react';

const DrawCanvas = () => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lines, setLines] = useState([]);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);
  const [endX, setEndX] = useState(null);
  const [endY, setEndY] = useState(null);

  // Add a state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLine, setSelectedLine] = useState(null);

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
    const angle = 90; // The angle to display (90 degrees in this case)

    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (length > 0.00) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();

      // Draw dots at start and end points
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
      ctx.fillText(`(${angle}°)`, textX, textY);

      // Draw a larger "Edit" button in the center of the line
      const buttonX = (x1 + x2) / 2 - 20; // Adjusted for a larger button
      const buttonY = (y1 + y2) / 2 - 10; // Adjusted for a larger button

      ctx.fillStyle = 'lightgray'; // Button background color
      ctx.fillRect(buttonX, buttonY, 40, 20); // Adjusted for a larger button
      ctx.font = '14px Arial'; // Adjusted for a larger button
      ctx.fillStyle = 'black';
      ctx.fillText('Edit', buttonX + 10, buttonY + 15); // Text on the button
    }
  };

  const handleMouseDown = (e) => {
    setIsDrawing(true);
    setStartX(e.nativeEvent.offsetX);
    setStartY(e.nativeEvent.offsetY);
    setEndX(e.nativeEvent.offsetX);
    setEndY(e.nativeEvent.offsetY);
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
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    const length = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

    if (length > 0.00) {
      console.log(`Line length: ${length.toFixed(2)} pixels`);
      setLines([...lines, { startX, startY, endX, endY }]);
    }
  };

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
        className='border-black border'
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
};

export default DrawCanvas;
