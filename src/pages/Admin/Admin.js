/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import api from "../../api/base";
import "../../pages/Admin/admin.css";
import Sidebar from "../../components/Bars/Sidebar";
import AdminDashboardUser from "../../components/Admin/AdminDashboardUser";
import AdminDashboardJob from "../../components/Admin/AdminDashboardJob";

function Admin() {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [view, setView] = useState(null);

  // GET all users
  const retriveUsers = async () => {
    const response = await api.get("/users");
    return response.data;
  };

  // ADD user
  const addUserHandler = async (user) => {
    const request = {
      id: user.id,
      ...user,
    };

    const response = await api.post("/users", request);
    setUsers([...users, response.data]);
  };

  // DELETE user
  const removeUserHandler = async (id) => {
    await api.delete(`/users/${id}`);
    const newUsersList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUsersList);
  };

  // update user
  const updateUserHandler = async (user) => {
    const response = await api.put(`/users/${user.id}`, user);
    const { id } = response.data;
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...response.data } : user;
      })
    );
  };

  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retriveUsers();
      if (allUsers) setUsers(allUsers);
    };

    getAllUsers();
  }, []);

  const retriveJobs = async () => {
    const response = await api.get("/jobs");
    return response.data;
  };

  // ADD job
  const createJobHandler = async (job) => {
    const request = {
      id: job.id,
      ...job,
    };

    const response = await api.post("/jobs", request);
    setJobs([...jobs, response.data]);
  };

  // DELETE job
  const removeJobHandler = async (id) => {
    await api.delete(`/jobs/${id}`);
    const newJobsList = jobs.filter((job) => {
      return job.id !== id;
    });

    setJobs(newJobsList);
  };

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobs = await retriveJobs();
      if (allJobs) setJobs(allJobs);
    };
    getAllJobs();
  }, []);

  const renderView = () => {
    if (view === "users") {
      return (
        <AdminDashboardUser
          users={users}
          removeUserHandler={removeUserHandler}
          createUserHandler={addUserHandler}
        />
      );
    } else if (view === "jobs") {
      return (
        <AdminDashboardJob
          jobs={jobs}
          createJobHandler={createJobHandler}
          removeJobHandler={removeJobHandler}
        />
      );
    } else if (view === null) {
      return <h3>Admin Dashboard</h3>;
    }
  };

  return (
    <>
      <Sidebar />
      <div className="mt-5">
        <button onClick={() => setView("users")}>Users</button>
        <button onClick={() => setView("jobs")}>Jobs</button>
        <button onClick={() => setView(null)}>Home</button>
        {renderView()}
      </div>
    </>
  );
}

export default Admin;
