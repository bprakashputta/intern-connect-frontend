import React,{useEffect} from "react";
import Task from "../../components/Tasks/Task";
import { useDispatch, useSelector } from "react-redux";
import { taskLoadSingleAction } from "../../redux/actions/taskAction";
import { useParams } from "react-router-dom";
import LoadingBox from "../../Component/LoadingBox";


const ViewTask = () => {

  const dispatch = useDispatch();
  const { singleTask, loading } = useSelector((state) => state.singleTask);
  const { id } = useParams();
  useEffect(() => {
    dispatch(taskLoadSingleAction(id));
  }, [id]);

  return (
    <>
    {singleTask &&  
      <Task task={singleTask} />}
    </>
  );
};

export default ViewTask;
