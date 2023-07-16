import React from "react";

const Button = ({ text, outlined }) => {
  return <div className={outlined ? "outline-btn" : "btn"}>{text}</div>;
};

export default Button;
