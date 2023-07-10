import React, { useState } from "react";
import "../../pages/Tasks/tasks.css";

function TaskForm() {
  const [task, setTask] = useState({
    assigned_by: "",
    assigned_to: [],
    title: "",
    description: "",
    status: "open",
    due_date: null,
    attachments: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary operations with the task data, such as sending it to a server or updating state.
    console.log(task);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="task-container">
        <div className="heading">
          <h2>Add Task</h2>
        </div>
        <div className="form">
          <div className="input-text">
            <div className="mt-4 ">
              <div className="task-input">
                <label>
                  Assigned By:
                  <input
                    type="text"
                    name="assignedBy"
                    value={task.assignedBy}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="mt-4">
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4"></div>
          </div>
          <div>
            <div className="mt-4">
              <label className="tags">Description</label>
              <textarea
                class="form-control"
                rows="6"
                placeholder="Task Description"
                ng-model="description"
                name="description"
                required
                value={task.description}
                onChange={(event) =>
                  handleChange("description", event.target.value.split(","))
                }
              ></textarea>
            </div>
          </div>
          <div className="input-text">
            <div className="mt-4">
              <label>
                Status:
                <select
                  name="status"
                  value={task.status}
                  onChange={handleChange}
                >
                  <option value="open">Open</option>
                  <option value="close">Closed</option>
                </select>
              </label>
            </div>
            <div className="mt-4">
              <label>
                Deadline:
                <input
                  type="datetime-local"
                  name="deadline"
                  value={task.deadline}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div>
            <label>
              Attachments:
              <input
                type="file"
                name="attachments"
                multiple
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="form-row">
          <button type="submit" className="created">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;

// Task.model {
// 	id
// 	assignedBy : []
//     assignedTo : []
//     title:
//     description:
//     status:
//     deadline:
//     attachments: []
//     comments: []
// }
