import React, { useState } from "react";
import TaskCard from "./TaskCard";

function TaskList({ tasks, handleTaskClick }) {
  return (
    <div className="task-list">
      {tasks &&
        tasks.map((task, index) => (
          <TaskCard key={index} task={task} onClick={handleTaskClick} />
        ))}
    </div>
  );
}

export default TaskList;
