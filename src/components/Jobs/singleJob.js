import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jobLoadSingleUserAction } from "../../redux/actions/jobAction";
import {
  registerAjobApplicationAction,
  deleteJobApplicationAction,
} from "../../redux/actions/jobApplicationAction";
import Footerbar from "../Bars/Footerbar";
import { useTheme } from "@emotion/react";
import "../../componentsCss/singlejob.css";

const SingleJob = () => {
  const dispatch = useDispatch();
  const { singleJob } = useSelector((state) => state.singleJob);
  const [applied, setApplied] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(applied);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user_id = userInfo._id;
  const { id } = useParams();

  useEffect(() => {
    dispatch(jobLoadSingleUserAction(id));
    singleJob && setApplied(singleJob.applied);
  }, []);
  console.log(singleJob);

  const applyForAJob = async () => {
    try {
      var { job_id } = singleJob;
      if (currentStatus) {
        await dispatch(deleteJobApplicationAction({ job_id, user_id }));
        setApplied(false);
      } else {
        await dispatch(registerAjobApplicationAction({ job_id, user_id }));
        setApplied(true);
      }
    } catch (err) {}
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fafafa",
          marginTop: "80px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            paddingTop: "30px",
            borderTop: "5px solid #0277bd",
            textAlign: "left",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              margin: "10px auto",
              padding: "20px",
              width: "60%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              borderLeft: "5px solid #0277bd",
            }}
          >
            <h3 style={{ margin: "5px 0px" }}>
              <span className="jobtitle2">Role :</span>
              {singleJob && singleJob.role_name}
            </h3>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              margin: "10px auto",
              padding: "20px",
              width: "60%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              borderLeft: "5px solid #0277bd",
            }}
          >
            <div className="details-job">
              <h2 style={{ margin: "0px" }} className="job-title">
                Job_Id:
                <span className="job-data">
                  {singleJob && singleJob.job_id}
                </span>
              </h2>
            </div>

            <div className="details-job">
              <h2 style={{ margin: "0px" }} className="job-title">
                Company_Id:
                <span className="job-data">
                  {singleJob && singleJob.company_id}
                </span>
              </h2>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              margin: "10px auto",
              padding: "20px",
              width: "60%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              borderLeft: "5px solid #0277bd",
            }}
          >
            <h2
              style={{ margin: "0px", textAlign: "center", fontWeight: "500" }}
              className="job-title"
            >
              Job Details
            </h2>
            <hr />
            <div className="details-job">
              <span className="job-title">Job type</span>:
              <span className="job-data">
                {singleJob && singleJob.job_type
                  ? singleJob.job_type
                  : "No category"}
              </span>
            </div>
            <div className="details-job">
              <span className="job-title">Location:</span>
              <span className="job-data">
                {singleJob && singleJob.location}
              </span>
            </div>

            <div className="details-job">
              <span className="job-title">Job Description:</span>
              <br />
              <span className="job-description">
                {singleJob && singleJob.description}
              </span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              margin: "10px auto",
              padding: "20px",
              width: "60%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              borderLeft: "5px solid #0277bd",
            }}
          >
            <span className="job-title">Skills Required:</span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              {singleJob &&
                singleJob.skills_required.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      color: "white",
                      padding: "10px",
                      marginRight: "10px",
                      borderRadius: "10px",
                      backgroundImage:
                        "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#fff",
              margin: "10px auto",
              padding: "8px",
              width: "60%",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            <button
              onClick={applyForAJob}
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "black",
                padding: "13px",
                textTransform: "capitalize",
                backgroundImage:
                  "linear-gradient(to right top, #a8eb12, #00e97d, #00ddc2, #00cae9, #12b3eb)",
              }}
              disabled={applied}
            >
              {applied ? "Applied" : "Apply!"}
            </button>
          </div>
        </div>
      </div>

      <Footerbar />
    </>
  );
};

export default SingleJob;
