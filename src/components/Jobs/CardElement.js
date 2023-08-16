import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  registerAjobApplicationAction,
  deleteJobApplicationAction,
} from "../../redux/actions/jobApplicationAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { applyForAJob } from "./ApplyFunction";
const CardElement = ({
  jobTitle,
  description,
  category,
  location,
  job_id,
  addAppliedStudent,
  status,
  page,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user_id = userInfo._id;
  const [currentStatus, setCurrentStatus] = useState(status);
  const userType = userInfo?.userType;

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
      applyForAJob(dispatch, {
        jobTitle,
        description,
        category,
        location,
        job_id,
      });

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
        width: "90%",
        marginBottom: "15px",
        marginTop: "3px",
        backgroundColor: "#fff",
        padding: "30px",
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
            color: isFavorite ? "red" : "black",
            padding: "0",
            outline: "none",
          }}
        >
          {isFavorite ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart />}
        </button>
        <button
          style={{
            backgroundColor: "#0277bd",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            cursor: userType === "company" ? "not-allowed" : "pointer",
            marginLeft: "10px",
          }}
          onClick={handleApplyClick}
          disabled={userType === "company"}
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
            color: "black",
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
      <div style={{ marginBottom: "10px", fontWeight: "bold", float: "left" }}>
        Description:
        <span style={{ fontWeight: "normal" }}>
          {description.split(" ").slice(0, 15).join(" ")}...
        </span>
      </div>
      <div style={{ display: "block" }}>
        <button
          style={{
            color: "blue",
            padding: "5px 10px",
            cursor: "pointer",
            width: "100%",
            textAlign: "initial",
            marginTop: "10px",
          }}
        >
          <Link
            to={`/job/${job_id}`}
            style={{
              color: "blue",
              textDecoration: "none",
              border: "1px solid blue",
              padding: "10px",
            }}
          >
            View Details...
          </Link>

          {page === "myjobs" && (
            <Link
              to={`/jobs/${job_id}/tasks/all`}
              style={{
                color: "blue",
                textDecoration: "none",
                border: "1px solid blue",
                padding: "10px",
                margin: "10px",
              }}
            >
              Add Tasks...
            </Link>
          )}

          {page === "myapplications" && (
            <Link
              to={`/${job_id}/tasks/taskpage`}
              style={{
                color: "blue",
                textDecoration: "none",
                border: "1px solid blue",
                padding: "10px",
                margin: "10px",
              }}
            >
              View status...
            </Link>
          )}

          {page === "myapplications" && (
            <Link
              to={`/${job_id}/taskpage`}
              style={{
                color: "blue",
                textDecoration: "none",
                border: "1px solid blue",
                padding: "10px",
                margin: "10px",
              }}
            >
              View status...
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

export default CardElement;
