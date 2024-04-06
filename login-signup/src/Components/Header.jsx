import React from "react";

const Header = ({ text }) => {
  return (
    <div class="header">
      <div className="text">{text}</div>
      <div className="underline"></div>
    </div>
  );
};

export default Header;
