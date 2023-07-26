import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  registerAjobApplicationAction,
  deleteJobApplicationAction,
} from "../redux/actions/jobApplicationAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
const CardElement = ({
  jobTitle,
  description,
  category,
  location,
  job_id,
  addAppliedStudent,
  status,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user_id = userInfo._id;
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  const handleApplyClick = async () => {
    try {
      if (currentStatus) {
        await dispatch(deleteJobApplicationAction({ job_id, user_id }));
      } else {
        await dispatch(registerAjobApplicationAction({ job_id, user_id }));
      }
      setCurrentStatus(!currentStatus);
      const studentInfo = {
        name: userInfo.firstname,
        jobTitle,
        description,
        category,
        location,
      };
      addAppliedStudent(studentInfo);
    } catch (error) {}
  };

  return (
    <div
      style={{
        minWidth: "275px",
        marginBottom: "15px",
        marginTop: "3px",
        backgroundColor: "#fff",
        padding: "20px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        borderRadius: "4px",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <h5
          style={{
            fontWeight: "bold",
            flex: "1",
            float: "left",
            textAlign: "left",
          }}
        >
          {jobTitle}
        </h5>
        <button
          onClick={handleFavoriteClick}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "18px",
            color: isFavorite ? "red" : "white",
          }}
        >
          <i className="fa fa-heart"></i>
        </button>
        <button
          style={{
            backgroundColor: "#0277bd",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            marginLeft: "10px",
          }}
          onClick={handleApplyClick}
        >
          {currentStatus ? "Applied" : "Apply"}
        </button>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <span
          style={{
            color: "grey",
            fontWeight: "bold",
            marginRight: "4px",
          }}
        >
          <FontAwesomeIcon icon={faMapMarkerAlt} style={{ width: "15px" }} />
        </span>
        <span style={{ color: "grey", fontSize: "15px", fontWeight: "bold" }}>
          {location}
        </span>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <span
          style={{
            color: "grey",
            fontSize: "15px",
            fontWeight: "bold",
            float: "left",
            textAlign: "left",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          {category}
        </span>
      </div>
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
        Description:
        <span style={{ fontWeight: "normal" }}>
          {description.split(" ").slice(0, 15).join(" ")}...
        </span>
      </div>
      <div>
        <button
          style={{
            backgroundColor: "whitesmoke",
            color: "blue",
            border: "none",
            padding: "5px 10px",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <Link
            to={`/job/${job_id}`}
            style={{
              color: "blue",
              textDecoration: "none",
            }}
          >
            View Details...
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CardElement;
