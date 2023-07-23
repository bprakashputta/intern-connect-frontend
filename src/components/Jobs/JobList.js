import React, { useEffect, useRef, useState } from "react";

import { Container, Pagination, Typography, useTheme } from "@mui/material";
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

  const { palette } = useTheme();
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

  return (
    <>
      <div className="box-container">
        <Container>
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
                  <Pagination
                    color="primary"
                    variant="outlined"
                    page={page}
                    count={pages === 0 ? 1 : pages}
                    onChange={(event, value) => setPage(value)}
                  />
                </div>
              </div>
            </div>

            <div className="left-section">
              <div className="filter-card">
                <div className="filter-heading">
                  <Typography
                    sx={{ color: palette.secondary.main, fontWeight: 600 }}
                  >
                    Filter jobs by category
                  </Typography>
                </div>
                <SelectComponent
                  handleChangeCategory={handleChangeCategory}
                  cat={keyword}
                />
              </div>
              <div className="filter-card">
                <div className="filter-heading">
                  <Typography
                    sx={{
                      color: palette.secondary.main,
                      fontWeight: 600,
                      fontSize: "10px",
                    }}
                  >
                    Filter jobs by location
                  </Typography>
                </div>
                <SelectComponent
                  handleChangeLocation={handleChangeLocation}
                  cat={location}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default JobList;
