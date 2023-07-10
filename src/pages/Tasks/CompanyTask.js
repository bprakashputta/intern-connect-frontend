import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TaskForm from "../../components/Tasks/TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { taskLoadAction } from "../../redux/actions/taskAction";
import ChatWindow from "./Chatwindow";
import FileUpload from "../../Component/FileUpload";

const CompanyTaskPage = () => {
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const [selectedSection, setSelectedSection] = useState("tasks");

  const { tasks } = useSelector((state) => state.loadTasks);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    console.log("task Load Action");
    dispatch(taskLoadAction());
  }, [dispatch]);

  return (
    <div className="task-page">
      <div className="student-list">
        <div>
          <button onClick={() => setShowForm(true)}>
            <span className="assigning">
              <Link to="/task/create" style={{ color: "black", right: "10px" }}>
                Assign Task
              </Link>
            </span>
          </button>
        </div>
        <h2>Applied Students</h2>

        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <button className="cancel-button" onClick={closeForm}>
                &#10005;
              </button>
              <TaskForm />
            </div>
          </div>
        )}
      </div>
      <div className="task-section">
        <div className="tasks-container">
          <div className="section-nav">
            <div
              className={`task-item ${
                selectedSection === "tasks" ? "selected-item" : ""
              }`}
              onClick={() => handleSectionClick("tasks")}
            >
              Tasks
            </div>
            <div
              className={`task-item ${
                selectedSection === "submit" ? "selected-item" : ""
              }`}
              onClick={() => handleSectionClick("submit")}
            >
              Submitted Work
            </div>
          </div>
        </div>
        <div className="section-content">
          {selectedSection === "tasks" && (
            <div className="tasks">
              <ChatWindow sender="company" />
            </div>
          )}

          {selectedSection === "submit" && (
            <div className="submitted-work">
              <FileUpload />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyTaskPage;
