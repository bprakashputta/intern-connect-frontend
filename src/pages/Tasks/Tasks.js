import React, { useState, useEffect } from "react";
import Task from "../../components/Tasks/Task";
import TaskList from "../../components/Tasks/TaskList";
import TaskForm from "../../components/Tasks/TaskForm";
import ViewTask from "./ViewTask";
import api from "../../api/base";
import { useDispatch, useSelector } from "react-redux";
import { taskLoadAction } from "../../redux/actions/taskAction";


const Tasks = () => {
  const { tasks } = useSelector(
    (state) => state.loadTasks
  );
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(taskLoadAction());
    console.log(tasks)
  }, []);

  return (
    <>
      <div className="container-ulist-uprofile ">
        <div className="ulist">
          <TaskList tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default Tasks;
