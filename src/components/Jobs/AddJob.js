import React, { useState } from "react";
import "../../componentsCss/employerstyles/addjob.css";
const AddJob = () => {
  const [jobDetails, setJobDetails] = useState({
    title: "",
    skillsets: [],
    jobType: "",
    duration: 0,
    deadline: "",
    maxApplicants: "",
    maxPositions: "",
  });

  const handleInput = (field, value) => {
    setJobDetails({ ...jobDetails, [field]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("", {
      method: "POST",
      headers: {},
      body: JSON.stringify(jobDetails),
    })
      .then((response) => response.json())
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
              {/* <label className="tags">Job Title</label> */}
              <input
                class="form-control"
                type="text"
                placeholder="Job role"
                value={jobDetails.title}
                onChange={(event) => handleInput("title", event.target.value)}
              />
            </div>
            <div className="form-row">
              {/* <label className="tags">Company Name</label> */}
              <input
                class="form-control"
                type="text"
                placeholder="Company Name"
                value={jobDetails.company}
                onChange={(event) => handleInput("company", event.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <label className="tags">Enter Required Skills</label>
            <input
              class="form-control"
              type="text"
              placeholder="Seperate by (,)"
              value={jobDetails.skillsets}
              onChange={(event) =>
                handleInput("skillsets", event.target.value.split(","))
              }
            />
          </div>

          <div className="input-text">
            <div className="form-row">
              <label className="tags">Job Type</label>
              <select
                class="form-control"
                value={jobDetails.jobType}
                onChange={(event) => handleInput("jobType", event.target.value)}
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
                value={jobDetails.duration}
                onChange={(event) =>
                  handleInput("duration", event.target.value)
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
                type="number"
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
                handleInput("description", event.target.value.split(","))
              }
            ></textarea>
          </div>
          <div className="form-row">
            <button className="created" onClick={handleSubmit}>
              Create Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJob;
// company
// location
// role
