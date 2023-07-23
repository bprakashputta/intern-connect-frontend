import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobLoadAction } from "../../redux/actions/jobAction";
import { Link, useParams } from "react-router-dom";
import CardElement from "../../Component/CardElement";

import LoadingBox from "../../Component/LoadingBox";
import "../../componentsCss/jobpage.css";
import SelectComponent from "../../Component/SelectComponent";

const JobList = () => {
  const { jobs, setUniqueLocation, pages, loading } = useSelector(
    (state) => state.loadJobs
  );

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("");
  const { keyword: keywordParam, location: locationParam } = useParams();

  useEffect(() => {
    dispatch(jobLoadAction(page, keyword, cat, location));
  }, [page, keyword, cat, location]);

  const handleChangeCategory = (e) => {
    setKeyword(e.target.value);
  };

  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <div className="box-container">
        <div>
          <div className="stack-container">
            <div className="right-section">
              <div className="job-listings">
                <div className="load-box">
                  {loading ? (
                    <LoadingBox />
                  ) : jobs && jobs.length === 0 ? (
                    <div className="no-result">
                      <h2>No result found!</h2>
                    </div>
                  ) : (
                    jobs &&
                    jobs.map((job, i) => (
                      <CardElement
                        key={i}
                        job_id={job.job_id}
                        jobTitle={job.role_name}
                        description={job.description}
                        category={job.job_type ? job.job_type : "No category"}
                        location={job.location}
                        status={job.applied}
                      />
                    ))
                  )}
                </div>
                <div className="pagination-container">
                  <ul className="pagination">
                    {Array.from(
                      { length: pages === 0 ? 1 : pages },
                      (_, index) => (
                        <li
                          key={index}
                          className={`page-item${
                            page === index + 1 ? " active" : ""
                          }`}
                        >
                          <button
                            className="page-link"
                            onClick={(event) =>
                              handlePageChange(event, index + 1)
                            }
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="left-section">
              <div className="filter-card">
                <div className="filter-heading">
                  <h4 style={{ color: "#0277bd", fontWeight: 600 }}>
                    Filter jobs by category
                  </h4>
                </div>
                <SelectComponent
                  handleChangeCategory={handleChangeCategory}
                  cat={keyword}
                />
              </div>
              <div className="filter-card">
                <div className="filter-heading">
                  <h4 style={{ color: "#0277bd", fontWeight: 600 }}>
                    Filter jobs by location
                  </h4>
                </div>
                <SelectComponent
                  handleChangeLocation={handleChangeLocation}
                  cat={location}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobList;
