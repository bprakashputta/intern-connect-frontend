import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const TaskList = ({ tasks, handleTaskClick, page }) => {
  const { job_id } = useParams();

  const handleClick = (taskId) => {
    handleTaskClick(taskId);
  };

  const [dropdownVisible, setDropdownVisible] = useState(
    tasks ? Array(tasks.length).fill(false) : []
  );

  const dropdownRefs = useRef(tasks ? tasks.map(() => React.createRef()) : []);

  const handleDropdownToggle = (index) => {
    const updatedDropdownVisible = [...dropdownVisible];
    updatedDropdownVisible[index] = !updatedDropdownVisible[index];
    setDropdownVisible(updatedDropdownVisible);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task, index) => (
          <div key={index} className="task-cards">
            <div className="task-title">
              <button
                style={{ float: "right" }}
                className=""
                onClick={() => handleDropdownToggle(index)}
              >
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{ float: "right", width: "5px" }}
                />
              </button>

              <ul className="nav navbar-nav">
                <li
                  className="dropdown"
                  style={{ padding: "0px" }}
                  ref={dropdownRefs.current[index]}
                >
                  {dropdownVisible[index] && (
                    <ul
                      className=" dropdown-menu-right"
                      style={{
                        display: "block",
                        opacity: "1",
                        position: "absolute",
                        top: "40px",
                        right: "-80px",
                        zIndex: "1",
                      }}
                    >
                      <li>
                        {page === "mycreatedtasks" && (
                          <Link
                            to={`/${job_id}/${task.task_id}/taskpage`}
                            style={{
                              color: "blue",
                              textDecoration: "none",
                              border: "1px solid blue",
                              backgroundColor: "white",
                              padding: "10px",
                              margin: "10px",
                            }}
                          >
                            View Students...
                          </Link>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              <h4
                style={{ textAlign: "left", cursor: "pointer", width: "10%" }}
                onClick={() => handleClick(task.task_id)}
              >
                {task.task_id}
              </h4>
              <h4>{task.title}</h4>
            </div>
            <hr />
            <div className="task-card-bottom">
              <p style={{ float: "right", margin: "-10px 20px" }}>
                Deadline: {formatDate(task.due_date)}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
