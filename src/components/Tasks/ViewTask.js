import React, { useEffect } from "react";
import TaskForm from "./AddTask";
import { useDispatch, useSelector } from "react-redux";
import { taskLoadSingleAction } from "../../redux/actions/taskAction";
import { useParams } from "react-router-dom";

const ViewTask = () => {
  const dispatch = useDispatch();
  const { singleTask, loading } = useSelector((state) => state.singleTask);
  const { id } = useParams();
  useEffect(() => {
    dispatch(taskLoadSingleAction(id));
  }, [id]);

  return <>{singleTask && <TaskForm task={singleTask} />}</>;
};

export default ViewTask;
