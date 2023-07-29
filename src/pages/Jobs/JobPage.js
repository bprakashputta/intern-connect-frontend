/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import api from "../../api/base";
import SearchInput from "../../components/Jobs/SearchInput";
import "../../pages.css/jobs.css";
import JobList from "../../components/Jobs/JobList";
import Footerbar from "../../components/Bars/Footerbar";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(null);

  return (
    <div className="jobs">
      <div className="ulist">
        <>
          <div style={{ backgroundColor: "#f9f9ff" }}>
            <section class="banner-area relative" id="home">
              <div class="overlay overlay-bg"></div>
              <div class="container">
                <div class="row search-page-top d-flex align-items-center justify-content-center">
                  <div class="banner-content col-lg-12">
                    <h1>Jobs</h1>
                    <h2 class="text">Search Results</h2>
                    <div className="search-div">
                      <SearchInput />
                    </div>
                    <p class="text">
                      49 Results found for <span>"Frontend developer"</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section class="features-area">
              <div class="">
                <div class="row">
                  <div class="col-lg-3 col-md-6">
                    <div class="single-feature">
                      <h4>Search</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="single-feature">
                      <h4>Apply</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="single-feature">
                      <h4>Work</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-3 col-md-6">
                    <div class="single-feature">
                      <h4>Get Certified</h4>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <JobList />
            </section>
          </div>
          <Footerbar />
        </>
      </div>
    </div>
  );
}

export default Jobs;
