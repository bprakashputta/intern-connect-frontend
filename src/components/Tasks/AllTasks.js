import React, { useState, useEffect } from "react";
import axios from "../../api/base";
import { useParams } from "react-router-dom";
import AddTask from "../../components/Tasks/AddTask";

import TaskList from "./TaskList"; // Update the import path if necessary

function AllTasks({ handleTaskClick }) {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const { job_id } = useParams();

  useEffect(() => {
    axios
      .get(`/jobs/${job_id}/tasks/all`)
      .then((response) => {
        setTasks(response.data.tasks);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="all-tasks">
      <h2>My Tasks</h2>
      <div>
        <div style={{ float: "right", marginRight: "10%" }}>
          <button onClick={() => setShowForm(true)}>
            <span className="assigning">
              {showForm ? "Close Task Form" : "Add Task"}
            </span>
          </button>
          {showForm && (
            <div className="form-overlay">
              <div className="form-container">
                <button
                  class="circle"
                  data-animation="showShadow"
                  data-remove="3000"
                  onClick={closeForm}
                ></button>

                <AddTask job_id={job_id} />
              </div>
            </div>
          )}
        </div>
        <TaskList
          tasks={tasks}
          handleTaskClick={handleTaskClick}
          page="mycreatedtasks"
        />
      </div>
    </div>
  );
}

export default AllTasks;
