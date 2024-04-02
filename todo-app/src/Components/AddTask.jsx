import React from "react";

const AddTask = () => {
  return (
    <form className="add-task">
      <input type="text" placeholder="What do you need to do today?" />
      <button type="submit" className="add-btn">
        ADD
      </button>
    </form>
  );
};

export default AddTask;
