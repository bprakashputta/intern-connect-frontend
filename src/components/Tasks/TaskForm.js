import React, { useState } from "react";
import axios from "../../api/base";
import "../../pages/Tasks/tasks.css";

function TaskForm() {
  const [task, setTask] = useState({
    assigned_by: "",
    task_id: "",
    title: "",
    description: "",
    status: "open",
    due_date: null,
    attachments: [],
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/taskallotment/create", task)
      .then((response) => response.json())
      .then((data) => {
        console.log("Task submitted successfully:", data);
        alert("Task submitted successfully!");
        setTask({
          assigned_by: "",
          task_id: "",
          title: "",
          description: "",
          status: "open",
          due_date: null,
          attachments: [],
        });
      })
      .catch((error) => {
        console.error("Error submitting task:", error);
        alert("Error submitting task. Please try again later.");
      });
  };

  const handleChange = (name, value) => {
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
                  Task_Id:
                  <input
                    type="text"
                    name="task_id"
                    value={task.task_id}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </label>
              </div>
            </div>
            <div>
              <div className="mt-4">
                <label>
                  Job_Id:
                  <input
                    type="text"
                    name="job_id"
                    value={task.job_id}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4 ">
            <div className="task-input">
              <label>
                Title:
                <input
                  type="text"
                  name="title"
                  value={task.title}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="mt-4"></div>
          </div>
          <div>
            <div className="mt-4">
              <label className="tags">Description</label>
              <textarea
                className="form-control"
                rows="6"
                placeholder="Task Description"
                name="description"
                required
                value={task.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
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
                  name="due_date"
                  value={task.due_date}
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
                onChange={(e) => handleChange(e.target.name, e.target.files)}
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
