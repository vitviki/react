import React from "react";

const Tab = ({ tab, setTab }) => {
  return (
    <div className="tab">
      <div
        className={`tab-section ${tab === "personal" ? "tab-selected" : ""}`}
        onClick={() => setTab("personal")}
      >
        Personal
      </div>
      <div
        className={`tab-section ${
          tab === "professional" ? "tab-selected" : ""
        }`}
        onClick={() => setTab("professional")}
      >
        Professional
      </div>
    </div>
  );
};

export default Tab;
