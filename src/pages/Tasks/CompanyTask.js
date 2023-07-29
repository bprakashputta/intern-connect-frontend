import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddTask from "../../components/Tasks/AddTask";
import { useDispatch, useSelector } from "react-redux";
import { taskLoadAction } from "../../redux/actions/taskAction";
import ChatWindow from "../../components/Tasks/Chatwindow";
import axios from "../../api/base";
import { useParams } from "react-router-dom";

const CompanyTaskPage = ({ job_id }) => {
  console.log("jobid", job_id);
  const [showForm, setShowForm] = useState(false);

  const dispatch = useDispatch();
  const [selectedSection, setSelectedSection] = useState("tasks");

  const { tasks } = useSelector((state) => state.loadTasks);
  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const [appliedStudents, setAppliedStudents] = useState(null);
  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    dispatch(taskLoadAction());
    const fetchAppliedStudents = async () => {
      try {
        const response = await axios.get(`/jobs/${job_id}/appliedby`);
        const appliedStudentsData = response.data.users;
        setAppliedStudents(appliedStudentsData.map((user) => user));
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
              <Link to="/task/create" style={{ color: "black", right: "10px" }}>
                Assign Task
              </Link>
            </span>
          </button>
        </div>
        <h2>Applied Students</h2>
        {appliedStudents &&
          appliedStudents.map((student) => (
            <div key={student._id}>
              <p>{student.firstName + " " + student.lastName}</p>
            </div>
          ))}
        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <button className="cancel-button" onClick={closeForm}>
                &#10005;
              </button>
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
          {selectedSection === "tasks" && (
            <div className="tasks">
              <ChatWindow sender="company" />
            </div>
          )}

          {selectedSection === "submit" && (
            <div className="submitted-work"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyTaskPage;
