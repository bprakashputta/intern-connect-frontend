import React, { useState } from "react";

const TaskList = ({ tasks, handleTaskClick }) => {
  const handleClick = (taskId) => {
    handleTaskClick(taskId);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task, index) => (
          <div
            key={index}
            className="task-cards"
            onClick={() => handleClick(task.task_id)}
          >
            <div className="task-title">
              <h4 style={{ textAlign: "left" }}>{task.task_id}</h4>
              <h4>{task.title}</h4>
            </div>
            <hr />
            <div className="task-card-bottom">
              <p>Deadline: {formatDate(task.due_date)}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
