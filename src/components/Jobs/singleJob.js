import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingBox from "../../Component/LoadingBox";
import { jobLoadSingleAction } from "../../redux/actions/jobAction";

import { userApplyJobAction } from "../../redux/actions/userAction";
import { useTheme } from "@emotion/react";
import "../../componentsCss/singlejob.css";

const SingleJob = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state) => state.singleJob);

  const { id } = useParams();

  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);

  const { singleCompany } = useSelector((state) => state.singleCompany);
  const [applied, setApplied] = useState(false);

  const applyForAJob = () => {
    setApplied(true);
    alert("Application submitted successfully!");
    dispatch(
      userApplyJobAction({
        jobTitle: singleJob && singleJob.role_name,
        description: singleJob && singleJob.description,
        category: singleJob && singleJob.job_type,
        location: singleJob && singleJob.location,
        jobId: singleJob && singleJob.job_id,
        companyId: singleJob && singleJob.company_id,
      })
    );
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#fafafa",
          marginTop: "100px",
          minHeight: "100vh",
        }}
      >
        <div style={{ pt: "30px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 4, padding: "8px" }}>
              {/* {loading ? (
                <LoadingBox />
              ) : ( */}
              <div
                style={{
                  backgroundColor: "#fff",
                  textAlign: "left",
                  margin: "10px 20px",
                  padding: "20px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <h3 style={{ margin: "5px 0px" }}>
                  <span className="jobtitle2">Role :</span>
                  {singleJob && singleJob.role_name}
                </h3>
                <hr />

                <div style={{ marginBottom: "10px" }}>
                  <h2 style={{ margin: "0px" }} className="job-title">
                    Job_Id:
                    <span className="job-data">
                      {singleJob && singleJob.job_id}
                    </span>
                  </h2>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <h2 style={{ margin: "0px" }} className="job-title">
                    Company_Id:
                    <span className="job-data">
                      {singleJob && singleJob.company_id}
                    </span>
                  </h2>
                </div>

                <hr />

                <h2 style={{ margin: "0px" }} className="job-title">
                  Job Details
                </h2>
                <div style={{ marginBottom: "10px" }}>
                  <span className="job-title">Job type:</span>:
                  <span className="job-data">
                    {singleJob && singleJob.job_type
                      ? singleJob.job_type
                      : "No category"}
                  </span>
                </div>
                <div style={{ marginBottom: "10px" }}>
                  <span className="job-title">Location:</span>
                  <span className="job-data">
                    {singleJob && singleJob.location}
                  </span>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <span className="job-title">Job Description:</span>
                  <br />
                  <span className="job-description">
                    {singleJob && singleJob.description}
                  </span>
                </div>
                <hr />

                <div style={{ marginBottom: "10px" }}>
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
              </div>
            </div>
            <div style={{ flex: 1, padding: "8px" }}>
              <div style={{ padding: "8px", backgroundColor: "#fff" }}>
                <button
                  onClick={applyForAJob}
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "black",
                    padding: "10px",
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
        </div>
      </div>
      {/* <Footerbar /> */}
    </>
  );
};

export default SingleJob;
