import React from "react";

function TaskCard({ task, onClick }) {
  const {
    task_id,
    title,
    description,
    status,
    created_at,
    updated_at,
    due_date,
    attachments,
  } = task;

  const handleClick = () => {
    onClick(task_id);
    console.log("Clicked on TaskCard with id:", task_id);
  };

  return (
    <div className="class__announce" onClick={handleClick}>
      <h4>{task_id}</h4> <h4>{title}</h4>
      <p>Deadline: {due_date}</p>
    </div>
  );
}

export default TaskCard;
