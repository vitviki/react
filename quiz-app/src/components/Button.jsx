import React from "react";

const Button = ({ text, handleClick, className }) => {
  return (
    <div className={`${className}`}>
      <button className={`${className}`} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
