import React from "react";

function Task({ task }) {
    const {
      assigned_by,
      title,
      description,
      status,
      created_at,
      updated_at,
      due_date,
      comments,
      attachments,
    } = task;

  return (
    <div>
      <h2>Task Details</h2>
      <p>
        <strong>Assigned By:</strong> {assigned_by}
      </p>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p> 
      <p>
        <strong>Deadline:</strong> {due_date}
      </p>
      <p>
        <strong>Attachments:</strong> {attachments.join(", ")}
      </p>
    </div>
  );
}


export default Task;
