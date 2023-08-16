import React from "react";
import "./tasks.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CompanyTaskPage from "./CompanyTask";
import StudentTaskPage from "./UserTasks";

const Taskpage = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const userType = userInfo?.userType;
  const { job_id, task_id } = useParams();

  return (
    <div className="task-allot">
      {userType === "company" ? (
        <CompanyTaskPage job_id={job_id} task_id={task_id} />
      ) : (
        <StudentTaskPage job_id={job_id} />
      )}
    </div>
  );
};

export default Taskpage;
