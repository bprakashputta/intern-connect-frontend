import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskLoadAction } from "../../redux/actions/taskAction";

import TaskList from "../../components/Tasks/TaskList";
import FileUploader from "./FileUploader";
import ChatWindow from "./Chatwindow";

const StudentTaskPage = () => {
  const [selectedSection, setSelectedSection] = useState("tasks");
  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedTaskTitle, setSelectedTaskTitle] = useState("");

  const { tasks } = useSelector((state) => state.loadTasks);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleTaskClick = (taskId) => {
    const selectedTask = tasks.find((task) => task.task_id === taskId);
    if (selectedTask) {
      setSelectedTask(selectedTask);
      setSelectedTaskTitle(selectedTask.title);
      setSelectedSection("tasks");
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("task Load Action");
    dispatch(taskLoadAction());
  }, [dispatch]);

  return (
    <div className="task-page">
      <div className="student-list">
        <h2>My Tasks</h2>
        <div className="my-tasks">
          <TaskList tasks={tasks} handleTaskClick={handleTaskClick} />
        </div>
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
          {selectedSection === "tasks" && selectedTask && selectedTaskTitle && (
            <div className="tasks">
              <h2>{selectedTaskTitle}</h2>
              <ChatWindow sender="student" taskId={selectedTask.task_id} />
            </div>
          )}

          {selectedSection === "submit" && selectedTask && (
            <div className="submitted-work">
              <FileUploader taskId={selectedTask.task_id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentTaskPage;
