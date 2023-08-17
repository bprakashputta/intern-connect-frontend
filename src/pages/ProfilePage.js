import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/base";
// import "../../componentsCss/ProfilePage.css";

const ProfilePage = ({ formData }) => {
  const [userData, setUserData] = useState(formData);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  const { username } = useParams();

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, [username]);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserData({ ...userData, ...formData });
    setEditMode(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      personalInfo: { ...prevState.personalInfo, [name]: value },
    }));
  };

  const renderUserProfile = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      country,
      code,
    } = userData.personalInfo;

    return (
      <div className="user-profile">
        <h1 className="profile-heading">User Profile</h1>
        <div className="profile-details">
          <div className="profile-section">
            <h2 className="section-heading">Personal Information</h2>
            <div className="profile-row">
              <span className="profile-label">First Name:</span>
              <span className="profile-value">{firstName}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Last Name:</span>
              <span className="profile-value">{lastName}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Email:</span>
              <span className="profile-value">{email}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Phone:</span>
              <span className="profile-value">{phone}</span>
            </div>
            <div className="profile-row">
              <span className="profile-label">Address:</span>
              <span className="profile-value">
                {`${address} ${city}, ${state}, ${country} ${code}`}
              </span>
            </div>
          </div>
          {userData.education && userData.education.clg.length > 0 && (
            <div className="profile-section">
              <h2 className="section-heading">Education</h2>
              <div className="profile-row">
                <span className="profile-label">College Name:</span>
                <span className="profile-value">{userData.education.clg}</span>
              </div>
              <div className="profile-row">
                <span className="profile-label">Branch:</span>
                <span className="profile-value">
                  {userData.education.branch}
                </span>
              </div>
            </div>
          )}
          {userData.workExperienceInfo &&
            userData.workExperienceInfo.workExperiences.length > 0 && (
              <div className="profile-section">
                <h2 className="section-heading">Work Experience</h2>
                {userData.workExperienceInfo.workExperiences.map(
                  (experience, index) => (
                    <div key={index} className="profile-row">
                      <span className="profile-label">Company:</span>
                      <span className="profile-value">
                        {experience.company}
                      </span>
                      <span className="profile-label">Position:</span>
                      <span className="profile-value">
                        {experience.position}
                      </span>
                    </div>
                  )
                )}
              </div>
            )}
          {userData.skillset && userData.skillset.skills.length > 0 && (
            <div className="profile-section">
              <h2 className="section-heading">Skills</h2>
              <div className="profile-row">
                <span className="profile-label">Skills:</span>
                <ul className="profile-list">
                  {userData.skillset.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {userData.socialMedia &&
            (userData.socialMedia.linkedInUrl.length > 0 ||
              userData.socialMedia.githubUrl.length > 0 ||
              userData.socialMedia.portfolioUrl.length > 0) && (
              <div className="profile-section">
                <h2 className="section-heading">Social Media</h2>
                <div className="profile-row">
                  {userData.socialMedia.linkedInUrl.length > 0 && (
                    <div>
                      <span className="profile-label">LinkedIn:</span>
                      <a
                        className="profile-link"
                        href={userData.socialMedia.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {userData.socialMedia.linkedInUrl}
                      </a>
                    </div>
                  )}
                  {userData.socialMedia.githubUrl.length > 0 && (
                    <div>
                      <span className="profile-label">GitHub:</span>
                      <a
                        className="profile-link"
                        href={userData.socialMedia.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {userData.socialMedia.githubUrl}
                      </a>
                    </div>
                  )}
                  {userData.socialMedia.portfolioUrl.length > 0 && (
                    <div>
                      <span className="profile-label">Portfolio:</span>
                      <a
                        className="profile-link"
                        href={userData.socialMedia.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {userData.socialMedia.portfolioUrl}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
        </div>
        <div className="profile-actions">
          {!editMode && (
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderEditForm = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      state,
      country,
      code,
    } = userData.personalInfo;

    return (
      <form className="edit-form" onSubmit={handleFormSubmit}>
        <h1 className="profile-heading">Edit Profile</h1>
        <div className="form-row">
          <label className="form-label">First Name:</label>
          <input
            className="form-input"
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">Last Name:</label>
          <input
            className="form-input"
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">Email:</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={email}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">Phone:</label>
          <input
            className="form-input"
            type="tel"
            name="phone"
            value={phone}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">Address:</label>
          <input
            className="form-input"
            type="text"
            name="address"
            value={address}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">City:</label>
          <input
            className="form-input"
            type="text"
            name="city"
            value={city}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">State:</label>
          <input
            className="form-input"
            type="text"
            name="state"
            value={state}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">Country:</label>
          <input
            className="form-input"
            type="text"
            name="country"
            value={country}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label">Postal Code:</label>
          <input
            className="form-input"
            type="text"
            name="code"
            value={code}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="save-button">
            Save
          </button>
          <button className="cancel-button" onClick={handleEdit}>
            Cancel
          </button>
        </div>
      </form>
    );
  };

  return <div>{editMode ? renderEditForm() : renderUserProfile()}</div>;
};

export default ProfilePage;
