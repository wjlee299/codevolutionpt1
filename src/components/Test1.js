import React, { useState } from "react";
import "./Test1.css";

function Test1() {
  const [sentenceColor, setSentenceColor] = useState(false);

  const changeColor = () => {
    setSentenceColor((prevColor) => !prevColor);
  };

  let colorState = sentenceColor ? "style-color" : "";

  return (
    <>
      <div className="style1">This is a sentence.</div>
      <button onClick={changeColor}>Change Color</button>
      <div className={`style1 ${colorState}`}>Click button to change color</div>
    </>
  );
}

export default Test1;
