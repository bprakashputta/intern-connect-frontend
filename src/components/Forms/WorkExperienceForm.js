import "../../componentsCss/WorkExperienceForm.css";
import React, { useState } from "react";

const WorkExperienceForm = ({ onNext, onPrevious, formData, setFormData }) => {
  const [errors, setErrors] = useState({});
  const { workExperiences } = formData;
  const [workExperience, setWorkExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      onNext();
    }
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      workExperiences: [...workExperiences, workExperience],
    });
    setWorkExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleRemoveExperience = (experience) => {
    const updatedWorkExperiences = workExperiences.filter(
      (exp) => exp !== experience
    );
    setFormData({ ...formData, workExperiences: updatedWorkExperiences });
  };

  return (
    <form onSubmit={handleSubmit} className="work-experience-form">
      <div>
        <small>
          <i className="fa fa-smile-o"></i>
        </small>
        <div className="text">
          <h2>Work Experience</h2>
          <p>
            Showcase your professional journey, achievements, and the expertise
            gained along the way.
          </p>
        </div>
        {formData.workExperiences.map((experience, index) => (
          <div key={experience}>
            <div className="input-text">
              <div className="input-div">
                <input
                  type="text"
                  name="company"
                  value={experience.company}
                  onChange={handleInputChange}
                />
                <span>Company Name:</span>
              </div>
            </div>
            <div>
              <div className="input-text">
                <div className="input-div">
                  <input
                    type="text"
                    name="position"
                    value={experience.position}
                    onChange={handleInputChange}
                  />
                  <span>Position/Role:</span>
                </div>
              </div>

              <div className="input-text">
                <div className="input-div">
                  <input
                    type="radio"
                    id="fulltype"
                    name="type"
                    value={experience.type}
                    onChange={handleInputChange}
                  />
                  <label for="fulltype" style={{ fontSize: "12px" }}>
                    Full-Time
                  </label>
                </div>
                <div className="input-div">
                  <input
                    type="radio"
                    name="type"
                    value={experience.type}
                    onChange={handleInputChange}
                  />
                  <label for="part-time" style={{ fontSize: "12px" }}>
                    Part-time
                  </label>
                </div>
              </div>

              <div className="input-text">
                <div className="input-div">
                  <input
                    type="date"
                    name="startDate"
                    value={experience.startDate}
                    onChange={handleInputChange}
                  />
                  <span>Start Date:</span>
                </div>

                <div className="input-div">
                  <input
                    type="date"
                    name="endDate"
                    value={experience.endDate}
                    onChange={handleInputChange}
                  />
                  <span>End Date:</span>
                </div>
              </div>
            </div>

            <button onClick={() => handleRemoveExperience(experience)}>
              <div className="del">
                <div className="del-button">
                  <i className="fa fa-trash-o"></i>
                  <span> Remove </span>
                </div>
              </div>
            </button>
          </div>
        ))}

        <div className="experience-section">
          <div className="input-text">
            <div className="input-div">
              <input
                type="text"
                name="company"
                value={workExperience.company}
                onChange={handleInputChange}
              />
              <span>Company Name:</span>
            </div>
          </div>
          <div className="input-text">
            <div className="input-div">
              <input
                type="text"
                name="position"
                value={workExperience.position}
                onChange={handleInputChange}
              />
              <span>Position/Role:</span>
            </div>
          </div>

          <div className="input-text">
            {/* <div className="spacer"> */}
            <div className="input-div">
              {/* <span>type:</span> */}
              <input
                type="radio"
                id="fulltype"
                name="type"
                value={workExperience.type}
                onChange={handleInputChange}
              />
              <label for="fulltype" style={{ fontSize: "12px" }}>
                Full-Time
              </label>
            </div>
            <div className="input-div">
              <input
                type="radio"
                name="type"
                value={workExperience.type}
                onChange={handleInputChange}
              />
              <label for="part-time" style={{ fontSize: "12px" }}>
                Part-time
              </label>
            </div>
          </div>
          <div className="calender">
            <div className="input-text">
              <div className="input-div">
                <input
                  type="date"
                  name="startDate"
                  value={workExperience.startDate}
                  onChange={handleInputChange}
                />
                <span>Start Date:</span>
              </div>

              <div className="input-div">
                <input
                  type="date"
                  name="endDate"
                  value={workExperience.endDate}
                  onChange={handleInputChange}
                />
                <span>End Date:</span>
              </div>
            </div>
          </div>

          <button onClick={handleAddExperience}>
            <div className="add">
              <div className="add-button">
                <span> + Add Experience </span>
              </div>
            </div>
          </button>
        </div>

        <div className="bu button_space">
          <button className="previous" onClick={onPrevious}>
            Previous
          </button>
          <button type="submit" className="next_button">
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default WorkExperienceForm;
