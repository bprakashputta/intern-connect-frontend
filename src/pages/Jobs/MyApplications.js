/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import api from "../../api/base";
import "../../pages.css/jobs.css";
import Footerbar from "../../components/Bars/Footerbar";
import { useDispatch, useSelector } from "react-redux";
import { jobsAppliedLoadAction } from "../../redux/actions/jobAction";
import CardElement from "../../components/Jobs/CardElement";

function Jobs() {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.signIn);
  const { jobs } = useSelector((state) => state.loadJobs);

  useEffect(() => {
    dispatch(jobsAppliedLoadAction());
  }, []);

  return (
    <div style={{ marginTop: "4rem" }}>
      <div style={{ margin: "4rem", backgroundColor: "#fafafa" }}>
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
              page="myapplications"
            />
          ))}
      </div>
    </div>
  );
}

export default Jobs;
