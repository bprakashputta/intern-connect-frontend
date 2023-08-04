import React, { useState } from "react";
import axios from "../../api/base";
import "../../componentsCss/employerstyles/addjob.css";

const AddJob = () => {
  const [jobDetails, setJobDetails] = useState({
    role_name: "",
    skills_required: [],
    job_type: "",
    location: "",
    company_id: "",
    description: "",
  });

  const handleInput = (field, value) => {
    setJobDetails({ ...jobDetails, [field]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("/jobs/create", jobDetails)
      .then((data) => {
        alert("Job Posted!");
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="job-container">
      <div className="create-job mt-9">
        <div className="heading">
          <h2>Add Job</h2>
        </div>
        <div className="form">
          <div className="input-text">
            <div className="form-row">
              <input
                class="form-control"
                type="text"
                placeholder="Job role"
                value={jobDetails.role_name}
                onChange={(event) =>
                  handleInput("role_name", event.target.value)
                }
              />
            </div>
            {/* <div className="form-row">
              <input
                class="form-control"
                type="text"
                placeholder="Company Name"
                value={jobDetails.company}
                onChange={(event) => handleInput("company", event.target.value)}
              />
            </div> */}
          </div>
          <div className="form-row">
            <label className="tags">Enter Required Skills</label>
            <input
              class="form-control"
              type="text"
              placeholder="Seperate by (,)"
              value={jobDetails.skills_required}
              onChange={(event) =>
                handleInput("skills_required", event.target.value.split(","))
              }
            />
          </div>

          <div className="input-text">
            <div className="form-row">
              <label className="tags">Job Type</label>
              <select
                class="form-control"
                value={jobDetails.job_type}
                onChange={(event) =>
                  handleInput("job_type", event.target.value)
                }
              >
                <option value="">Select Job Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
            </div>
            <div className="form-row">
              <label className="tags">Location</label>
              <select
                class="form-control"
                value={jobDetails.location}
                onChange={(event) =>
                  handleInput("location", event.target.value)
                }
              >
                <option value="">Select Location</option>
                <option value={0}>WFH</option>
                <option value={1}>Chennai</option>
                <option value={2}>Goa</option>
                <option value={3}>Bangalore</option>
                <option value={4}>Hyderabad</option>
                <option value={5}>Pune</option>
                <option value={6}>Other</option>
              </select>
            </div>
            <div className="form-row">
              <label className="tags">Company_Id</label>
              <input
                class="form-control"
                type="text"
                value={jobDetails.company_id}
                onChange={(event) =>
                  handleInput("company_id", event.target.value)
                }
              />
            </div>
          </div>
          <div className="form-row">
            <label className="tags">Description</label>
            <textarea
              class="form-control"
              rows="6"
              placeholder="Job Description"
              ng-model="description"
              name="description"
              required
              value={jobDetails.description}
              onChange={(event) =>
                handleInput("description", event.target.value)
              }
            ></textarea>
          </div>
          <div className="form-row">
            <button
              className="created"
              onClick={handleSubmit}
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "black",
                padding: "10px",
                textTransform: "capitalize",
                backgroundImage:
                  "linear-gradient(to right top, #a8eb12, #00e97d, #00ddc2, #00cae9, #12b3eb)",
              }}
            >
              Create Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
