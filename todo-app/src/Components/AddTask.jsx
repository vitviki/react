import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask("");
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };
  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do today?"
        onChange={handleChange}
        value={task}
      />
      <button type="submit" className="add-btn">
        ADD
      </button>
    </form>
  );
};

export default AddTask;
