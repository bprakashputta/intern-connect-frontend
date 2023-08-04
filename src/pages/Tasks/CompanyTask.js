import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddTask from "../../components/Tasks/AddTask";
import { useDispatch, useSelector } from "react-redux";
import { taskLoadAction } from "../../redux/actions/taskAction";
import ChatWindow from "../../components/Tasks/Chatwindow";
import axios from "../../api/base";
import { useParams } from "react-router-dom";

import "../../pages.css/jobs.css";

const CompanyTaskPage = ({ job_id }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedSection, setSelectedSection] = useState("tasks");
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.loadTasks);
  const { jobs } = useSelector((state) => state.loadJobs);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const [appliedStudents, setAppliedStudents] = useState(null);
  const closeForm = () => {
    setShowForm(false);
  };

  const handleStudentClick = (studentId) => {
    setSelectedStudentId(studentId);
    setSelectedSection("tasks"); // Display the chat window when student is selected
  };

  useEffect(() => {
    dispatch(taskLoadAction());
    const fetchAppliedStudents = async () => {
      try {
        const response = await axios.get(`/jobs/${job_id}/appliedby`);
        const appliedStudentsData = response.data.users;
        setAppliedStudents(appliedStudentsData);
      } catch (error) {
        console.error("Error fetching applied students:", error);
      }
    };

    fetchAppliedStudents();
  }, [dispatch]);

  return (
    <div className="task-page">
      <div className="student-list">
        <div>
          <button onClick={() => setShowForm(true)}>
            <span className="assigning">
              {showForm ? "Close Task Form" : "Assign Task"}
            </span>
          </button>
        </div>
        <h2 style={{ color: "black", fontSize: "20px", margin: "10px 0" }}>
          Applied Students
        </h2>
        {appliedStudents &&
          appliedStudents.map((student) => (
            <div
              key={student._id}
              style={{
                backgroundColor: "rgb(3, 3, 61)",
                borderRadius: "8px",
                padding: "10px",
                margin: "10px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => handleStudentClick(student._id)}
            >
              <input
                type="checkbox"
                style={{
                  margin: "8px",
                  width: "20px",
                  height: "20px",
                  position: "unset",
                }}
              />
              <p style={{ color: "white", fontSize: "large", margin: 0 }}>
                {student.firstName + " " + student.lastName}
              </p>
              <button
                style={{
                  marginLeft: "auto",
                  padding: "8px",
                  backgroundColor: "lightgreen",
                  borderRadius: "4px",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                View Profile
              </button>
            </div>
          ))}
        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <button
                class="circle"
                data-animation="showShadow"
                data-remove="3000"
                onClick={closeForm}
              ></button>
              {/* <button className="cancel-button" onClick={closeForm}>
                &#10005;
              </button> */}
              <AddTask />
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
          {selectedStudentId ? (
            <>
              {selectedSection === "tasks" && (
                <div className="tasks">
                  <ChatWindow
                    sender="company"
                    studentTasks={
                      tasks
                        ? tasks.filter(
                            (task) => task.student_id === selectedStudentId
                          )
                        : []
                    }
                  />
                </div>
              )}
              {selectedSection === "submit" && (
                <div className="submitted-work"></div>
              )}
            </>
          ) : (
            <p>Select a student to view tasks and chat window.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyTaskPage;
