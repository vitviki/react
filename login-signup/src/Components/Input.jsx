import React from "react";

const Input = ({ type, icon, placeholder }) => {
  return (
    <div class="input">
      <img src={icon} alt="image" />
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
