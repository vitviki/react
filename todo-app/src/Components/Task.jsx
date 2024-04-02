import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faTrashCan,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

const Task = ({ task, toggleComplete, removeTask }) => {
  return (
    <div className="task">
      <div className="task-left">
        <FontAwesomeIcon
          icon={task.completed ? faCircleCheck : faCircle}
          style={{ color: task.completed ? "#D98326" : "#241f31" }}
          className="icon"
          onClick={() => {
            toggleComplete(task.id);
          }}
        />
        <p className={`${task.completed ? "task-finished" : ""}`}>
          {task.task}
        </p>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{ color: "#D98326" }}
        className="icon"
        onClick={() => {
          removeTask(task.id);
        }}
      />
    </div>
  );
};

export default Task;
