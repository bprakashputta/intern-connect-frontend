import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobTypeLoadAction } from "../../redux/actions/jobTypeAction";

const SelectComponent = ({
  handleChangeCategory,
  handleChangeLocation,
  cat,
}) => {
  const { jobType } = useSelector((state) => state.jobTypeAll);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  return (
    <div className="filter-card mt-1">
      <div style={{ minWidth: "120px" }}>
        <label
          htmlFor="select-label"
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
            display: "block",
          }}
        >
          {handleChangeCategory ? "Select Category" : "Select Location"}
        </label>
        <select
          id="select-label"
          value={cat}
          onChange={handleChangeCategory || handleChangeLocation}
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
            color: "#333",
            fontSize: "14px",
            outline: "none",
            backgroundImage:
              "linear-gradient(to right, #d7eef6, #a6d1e6, #76b4d8, #4795cb, #0277bd)",
          }}
        >
          <option value="">All</option>
          {jobType &&
            (handleChangeCategory
              ? [...new Set(jobType.map((jt) => jt.role_name))].map(
                  (role_name) => (
                    <option
                      key={role_name}
                      value={role_name}
                      style={{
                        backgroundColor: "#fff",
                        color: "#333",
                        fontSize: "14px",
                        padding: "20px",
                      }}
                    >
                      {role_name}
                    </option>
                  )
                )
              : [...new Set(jobType.map((jt) => jt.location))].map(
                  (location) => (
                    <option
                      key={location}
                      value={location}
                      style={{
                        backgroundColor: "#fff",
                        color: "#333",
                        fontSize: "14px",
                        padding: "20px",
                      }}
                    >
                      {location}
                    </option>
                  )
                ))}
        </select>
        <span
          style={{
            content: "'\\f107'",
            fontFamily: "FontAwesome",
            position: "absolute",
            top: "50%",
            right: "15px",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
};

export default SelectComponent;
