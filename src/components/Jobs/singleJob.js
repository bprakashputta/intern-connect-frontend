import { Card, CardContent, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footerbar from "../Bars/Footerbar";
import LoadingBox from "../../Component/LoadingBox";
import { jobLoadSingleAction } from "../../redux/actions/jobAction";
import { companyLoadSingleAction } from "../../redux/actions/companyAction";

import Button from "@mui/material/Button";
import { userApplyJobAction } from "../../redux/actions/userAction";
import { useTheme } from "@emotion/react";
import "../../componentsCss/singlejob.css";

const SingleJob = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { singleJob, loading } = useSelector((state) => state.singleJob);

  const { id } = useParams();

  useEffect(() => {
    dispatch(jobLoadSingleAction(id));
  }, [id]);

  // useEffect(() => {
  //   if (singleJob && singleJob.company_id) {
  //     dispatch(companyLoadSingleAction(singleJob.company_id));
  //   }
  // }, [singleJob]);

  const { singleCompany } = useSelector((state) => state.singleCompany);
  const [applied, setApplied] = useState(false);

  const applyForAJob = () => {
    setApplied(true);
    alert("Application submitted successfully!");
    dispatch(
      userApplyJobAction({
        jobTitle: singleJob && singleJob.role_name,
        description: singleJob && singleJob.description,
        category: singleJob && singleJob.job_type,
        location: singleJob && singleJob.location,
        jobId: singleJob && singleJob.job_id,
        companyId: singleJob && singleJob.company_id,
      })
    );
  };

  return (
    <>
      <Box sx={{ bgcolor: "#fafafa", marginTop: "100px" }}>
        <Box sx={{ minheight: "100vh" }}>
          <Container sx={{ pt: "30px" }}>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box sx={{ flex: 4, p: 2 }}>
                {/* {loading ? (
                  <LoadingBox />
                ) : ( */}
                <Card sx={{ bgcolor: palette.primary.white }}>
                  <CardContent sx={{ textAlign: "left", margin: "10px 20px" }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      sx={{ margin: "5px 0px " }}
                    >
                      <Box component="span" className="jobtitle2">
                        Role :
                      </Box>
                      {singleJob && singleJob.role_name}
                    </Typography>
                    <hr />

                    <Typography variant="body2">
                      <h2 style={{ margin: "0px" }} className="job-title">
                        Job_Id:
                        <span className="job-data">
                          {singleJob && singleJob.job_id}
                        </span>
                      </h2>
                    </Typography>

                    <Typography variant="body2">
                      <h2 style={{ margin: "0px" }} className="job-title">
                        Company_Id:
                        <span className="job-data">
                          {singleJob && singleJob.company_id}
                        </span>
                      </h2>
                    </Typography>

                    <hr />

                    <h2 style={{ margin: "0px" }} className="job-title">
                      Job Details
                    </h2>
                    <Typography
                      variant="body2"
                      component="h2"
                      sx={{ margin: "5px 0px " }}
                    >
                      <Box component="span" className="job-title">
                        Job type:
                      </Box>
                      :
                      <span className="job-data">
                        {singleJob && singleJob.job_type
                          ? singleJob.job_type
                          : "No category"}
                      </span>
                    </Typography>
                    <Typography
                      variant="body2"
                      component="h2"
                      sx={{ margin: "5px 0px " }}
                    >
                      <Box component="span" className="job-title">
                        Location:
                      </Box>

                      <span className="job-data">
                        {singleJob && singleJob.location}
                      </span>
                    </Typography>
                    {/* <Typography
                      variant="body2"
                      component="h2"
                      sx={{ margin: "5px 0px " }}
                    >
                      <Box component="span" className="job-title">
                        Max No.of Applications:
                      </Box>

                      <span className="job-data">
                        {singleJob && singleJob.application}
                      </span>
                    </Typography>

                    <Typography
                      variant="body2"
                      component="h2"
                      sx={{ margin: "5px 0px " }}
                    >
                      <Box component="span" className="job-title">
                        Application deadline:
                      </Box>

                      <span className="job-data">
                        {singleJob && singleJob.deadline}
                      </span>
                    </Typography>

                    <Typography
                      variant="body2"
                      component="h2"
                      sx={{ margin: "5px 0px " }}
                    >
                      <Box component="span" className="job-title">
                        Duration:
                      </Box>

                      <span className="job-data">
                        {singleJob && singleJob.deadline}
                      </span>
                    </Typography> */}

                    <Typography
                      variant="body2"
                      component="h2"
                      sx={{ margin: "5px 0px " }}
                    >
                      <Box component="span" className="job-title">
                        Job Description:
                        <br />
                      </Box>
                      <span className="job-description">
                        {singleJob && singleJob.description}
                      </span>
                    </Typography>
                    <hr />

                    <Typography
                      variant="body2"
                      component="h2"
                      sx={{ margin: "10px 0px " }}
                    >
                      <Box component="span" className="job-title">
                        Skills Required:
                      </Box>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "10px",
                          marginTop: "10px",
                        }}
                      >
                        {singleJob &&
                          singleJob.skills_required.map((skill, index) => (
                            <span
                              key={index}
                              style={{
                                color: "white",
                                padding: "10px",
                                marginRight: "10px",
                                borderRadius: "10px",
                                backgroundImage:
                                  "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                      </div>
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Card sx={{ p: 2, bgcolor: palette.primary.white }}>
                  <Button
                    onClick={applyForAJob}
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                      color: "black",
                      padding: "10px",
                      textTransform: "capitalize",
                      backgroundImage:
                        "linear-gradient(to right top, #a8eb12, #00e97d, #00ddc2, #00cae9, #12b3eb)",
                    }}
                    variant="contained"
                    disabled={applied}
                  >
                    {applied ? "Applied" : "Apply!"}
                  </Button>
                </Card>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Footerbar />
    </>
  );
};

export default SingleJob;
