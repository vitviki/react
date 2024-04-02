import React from "react";
import Task from "./Task";

const TodoWrapper = ({ tasks }) => {
  return (
    <div className="todo-wrapper">
      <div className="todos">
        <Task task={"Task Number 1"} finished={true} />
        <Task task={"Task Number 2"} finished={false} />
        <Task task={"Task Number 3"} finished={false} />
        <Task task={"Task Number 4"} finished={false} />
        <Task task={"Task Number 5"} finished={true} />
        <Task task={"Task Number 6"} finished={false} />
        <Task task={"Task Number 7"} finished={false} />
        <Task task={"Task Number 8"} finished={false} />
        <Task task={"Task Number 9"} finished={false} />
        <Task task={"Task Number 10"} finished={false} />
        {/* {tasks.map((task, idx) => {
        <Task task={task} key={idx} />;
      })} */}
      </div>
    </div>
  );
};

export default TodoWrapper;
