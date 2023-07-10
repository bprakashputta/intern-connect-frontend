import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskForm from "../../components/Tasks/TaskForm";

const StudentList = () => {
  const [showForm, setShowForm] = useState(false);

  const closeForm = () => {
    setShowForm(false);
  };

  const [students, setSelectedStudent] = useState(null);

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };
  return (
    <div className="student-list">
      <button onClick={() => setShowForm(true)}>
        <span className="assigning">
          <Link to="/task/create" style={{ color: "black", right: "10px" }}>
            Assign Task
          </Link>
        </span>
      </button>
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

      <ul style={{ margin: "10px", padding: "10px" }}>
        {students.map((student) => (
          <li
            key={student.id}
            onClick={() => handleStudentClick(student)}
            style={{ margin: "10px", padding: "10px" }}
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
