/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/base";
import "../../pages.css/jobs.css";
import Footerbar from "../../components/Bars/Footerbar";
import { useDispatch, useSelector } from "react-redux";
import { myJobsLoadAction } from "../../redux/actions/jobAction";
import CardElement from "../../components/Jobs/CardElement";
import AddJob from "../../components/Jobs/AddJob";

function Jobs() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const { userInfo } = useSelector((state) => state.signIn);
  const { jobs } = useSelector((state) => state.loadJobs);

  const jobIds = jobs ? jobs.map((job) => job.job_id) : [];

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    dispatch(myJobsLoadAction());

    const jobIds = jobs ? jobs.map((job) => job.job_id) : [];
  }, []);

  return (
    <div style={{ marginTop: "5rem", backgroundColor: "#fafafa" }}>
      <div style={{ margin: "4rem", padding: "15px" }}>
        <div style={{ float: "inline-end" }}>
          <button onClick={() => setShowForm(true)} style={{ float: "right" }}>
            <span className="assigning">
              <Link to="/addjob" style={{ color: "black", right: "10px" }}>
                Add Job
              </Link>
            </span>
          </button>
          {showForm && (
            <div className="form-overlay">
              <button className="cancel-button" onClick={closeForm}>
                &#10005;
              </button>
              <AddJob />
            </div>
          )}
        </div>
        {jobs &&
          jobs.map((job, i) => (
            <CardElement
              key={i}
              job_id={job.job_id}
              jobTitle={job.role_name}
              description={job.description}
              category={job.job_type ? job.job_type : "No category"}
              location={job.location}
              status={job.status}
              page="myjobs"
            />
          ))}
      </div>
    </div>
  );
}

export default Jobs;
