import React, { useState, useEffect } from "react";

function MouseTest() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Log mouse position event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, []);

  return (
    <div>
      Mouse Coordinates: {x}, {y}
    </div>
  );
}

export default MouseTest;
