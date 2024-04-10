import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <div className="line-through"></div>
    </div>
  );
};

export default Header;
