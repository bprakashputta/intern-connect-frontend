/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../api/base";
import "../../pages.css/jobs.css";
import Footerbar from "../../components/Bars/Footerbar";
import { useDispatch, useSelector } from "react-redux";
import { myJobsLoadAction } from "../../redux/actions/jobAction";
import CardElement from "../../Component/CardElement";
import AddJob from "../../components/Jobs/AddJob";

function Jobs() {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const { userInfo } = useSelector((state) => state.signIn);
  const { jobs } = useSelector((state) => state.loadJobs);

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    dispatch(myJobsLoadAction());
  }, []);

  return (
    <div>
      <div style={{ marginTop: "8rem" }}>
        {jobs &&
          jobs.map((job, i) => (
            <CardElement
              key={i}
              id={job.job_id}
              jobTitle={job.role_name}
              description={job.description}
              category={job.job_type ? job.job_type : "No category"}
              location={job.location}
              status={job.status}
            />
          ))}
      </div>
      <div>
        <button onClick={() => setShowForm(true)}>
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
    </div>
  );
}

export default Jobs;
