import React from "react";
import Task from "./Task";

const TodoWrapper = ({ tasks }) => {
  return (
    <div className="todo-wrapper">
      <div className="todos">
        <Task task={"Task Number 1"} />
        <Task task={"Task Number 2"} />
        <Task task={"Task Number 3"} />
        <Task task={"Task Number 4"} />
        <Task task={"Task Number 5"} />
        <Task task={"Task Number 6"} />
        <Task task={"Task Number 7"} />
        <Task task={"Task Number 8"} />
        <Task task={"Task Number 9"} />
        <Task task={"Task Number 10"} />
        {/* {tasks.map((task, idx) => {
        <Task task={task} key={idx} />;
      })} */}
      </div>
    </div>
  );
};

export default TodoWrapper;
