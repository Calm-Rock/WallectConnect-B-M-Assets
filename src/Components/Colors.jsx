import React, { useState } from "react";

const ColorBox = ({ color }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(color);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 1500);
  };

  const handleMouseEnter = (event) => {
    const tooltip = event.target.querySelector(".tooltip");
    tooltip.style.opacity = 1;
  };

  const handleMouseLeave = (event) => {
    const tooltip = event.target.querySelector(".tooltip");
    tooltip.style.opacity = 0;
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className={`copy-message ${copySuccess && "show"}`}>
        Copied to clipboard!
      </span>
      <span className="tooltip">{color}</span>
    </div>
  );
};

export default ColorBox;
