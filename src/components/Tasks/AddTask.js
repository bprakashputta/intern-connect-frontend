import React, { useState } from "react";
import axios from "../../api/base";
import "../../pages/Tasks/tasks.css";

function TaskForm() {
  const [task, setTask] = useState({
    task_id: "",
    title: "",
    description: "",
    status: "open",
    due_date: null,
    attachments: [],
  });

  const handleChange = (name, value) => {
    if (name === "attachments") {
      const attachmentsArray = Array.from(value); // Convert FileList to an array
      setTask((prevTask) => ({
        ...prevTask,
        attachments: attachmentsArray,
      }));
    } else {
      setTask((prevTask) => ({
        ...prevTask,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Task before submission:", task);
      const formData = new FormData();
      for (const [key, value] of Object.entries(task)) {
        if (key === "attachments") {
          for (let i = 0; i < value.length; i++) {
            formData.append("attachments", value[i]);
          }
        } else {
          formData.append(key, value);
        }
      }
      console.log("FormData before submission:", formData);

      const response = await axios.post(
        "http://www.localhost:8080/task/assign-task",
        task
      );
      console.log("Task submitted successfully:", response.data);
      alert("Task submitted successfully!");
      setTask({
        task_id: "",
        title: "",
        description: "",
        status: "open",
        due_date: null,
        attachments: [],
      });
    } catch (error) {
      console.error("Error submitting task:", error);
      if (error.response) {
        console.log("Error response from server:", error.response.data);
      }
      alert("Error submitting task. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="task-container">
        <div className="heading">
          <h2>Add Task</h2>
        </div>
        <div className="addtask-form">
          <div className="input-text" style={{ justifyContent: "center" }}>
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
            <div className="mt-4 ">
              <div className="task-input">
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
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
                className="form-control"
                rows="3"
                placeholder="Task Description"
                name="description"
                required
                value={task.description}
                onChange={(event) =>
                  handleChange("description", event.target.value)
                }
                style={{
                  height: "150px",

                  width: "80%",
                  margin: "auto",
                }}
              ></textarea>
            </div>
          </div>
          <div className="input-text" style={{ justifyContent: "center" }}>
            <div className="">
              <label>
                Status:
                <select
                  name="status"
                  value={task.status}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  style={{ padding: "10px" }}
                >
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                </select>
              </label>
            </div>
            <div className="">
              <label>
                Deadline:
                <input
                  type="datetime-local"
                  name="due_date"
                  value={task.due_date || ""}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  style={{ padding: "10px" }}
                />
              </label>
            </div>
          </div>
          <div>
            <label style={{ fontWeight: "bold", padding: "10px" }}>
              Attachment files:
              <input
                type="file"
                name="attachments"
                multiple
                onChange={(e) => handleChange(e.target.name, e.target.files)}
              />
            </label>
          </div>
        </div>
        <div className="form-row mt-4">
          <button
            className="created"
            style={{
              fontSize: "13px",
              fontWeight: "700",
              color: "black",
              padding: "10px",
              textTransform: "capitalize",
              backgroundImage:
                "linear-gradient(to right top, #a8eb12, #00e97d, #00ddc2, #00cae9, #12b3eb)",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
