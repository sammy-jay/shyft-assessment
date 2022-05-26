import React from "react";
import "./Chip.css";

const Chip = ({ text, color }) => {
  return (
    <span style={{ backgroundColor: color }} className="chipSpan">
      {text}
    </span>
  );
};

export default Chip;
