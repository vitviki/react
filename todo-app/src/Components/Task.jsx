import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faTrashCan,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";

const Task = ({ task, finished }) => {
  return (
    <div className="task">
      <div className="task-left">
        <FontAwesomeIcon
          icon={finished ? faCircleCheck : faCircle}
          style={{ color: finished ? "#D98326" : "#241f31" }}
          className="icon"
        />
        <p className={`${finished ? "task-finished" : ""}`}>{task}</p>
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
