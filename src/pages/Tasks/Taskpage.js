import React from "react";
import "./tasks.css";
import { taskLoadAction } from "../../redux/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import CompanyTaskPage from "./CompanyTask";
import StudentTaskPage from "./UserTasks";

const Taskpage = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const userType = userInfo?.userType;
  const { job_id } = useParams();

  return (
    <div className="task-allot">
      {userType === "company" ? (
        <CompanyTaskPage job_id={job_id} />
      ) : (
        <StudentTaskPage job_id={job_id} />
      )}
      console.log(job_id);
    </div>
  );
};

export default Taskpage;
