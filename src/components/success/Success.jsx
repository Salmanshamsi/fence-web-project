import React, { useState, useEffect } from 'react';
import './Success.css';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const [isOrderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current route is the success route
    if (window.location.pathname === '/success') {
      // If it is, trigger the success animation
      setOrderPlaced(true);

      // Reset the order placed state after the animation duration
      const animationDuration = 3000; // milliseconds
      const timer = setTimeout(() => {
        setOrderPlaced(false);
      }, animationDuration);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timer);
    }
  }, []);

  const backToHome = () => {
     navigate("/")
  }

  return (
    <div className="order-placer-container">
      {isOrderPlaced ? (
        <div className="order-success-animation">
          <div className="success-icon">&#10004;</div>
          <div className="success-text">Order Placed Successfully!</div>
        </div>
      ) : (
        <div>
          <button onClick={backToHome} className='backtohome-btn'>Back to Home</button>
        </div>
      )}
    </div>
  );
};

export default Success;
