import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Task = ({ task }) => {
  return (
    <div className="task">
      <div className="task-left">
        <FontAwesomeIcon
          icon={faCircle}
          style={{ color: "#241f31" }}
          className="icon"
        />
        <p>{task}</p>
      </div>
      <FontAwesomeIcon
        icon={faTrashCan}
        style={{ color: "#D98326" }}
        className="trash-icon"
      />
    </div>
  );
};

export default Task;
