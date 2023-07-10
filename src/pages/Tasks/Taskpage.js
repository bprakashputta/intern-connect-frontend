import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import TaskForm from "../../components/Tasks/TaskForm";
import TaskList from "../../components/Tasks/TaskList";
import "./tasks.css";
import { taskLoadAction } from "../../redux/actions/taskAction";
import { useDispatch, useSelector } from "react-redux";
import FileUploader from "./FileUploader";

import CompanyTaskPage from "./CompanyTask";
import StudentTaskPage from "./UserTasks";

const Taskpage = () => {
  const { userInfo } = useSelector((state) => state.signIn);
  const userType = userInfo?.userType;

  return (
    <div className="">
      {userType === "company" ? <CompanyTaskPage /> : <StudentTaskPage />}
    </div>
  );
};

export default Taskpage;
