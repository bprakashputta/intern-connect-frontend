import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, useTheme } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import {
  registerAjobApplicationAction,
  deleteJobApplicationAction,
} from "../redux/actions/jobApplicationAction";

const CardElement = ({
  jobTitle,
  description,
  category,
  location,
  job_id,
  addAppliedStudent,
  status,
}) => {
  const { palette } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
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
    <Card sx={{ minWidth: 275, mb: 5, mt: 3, bgcolor: palette.primary.white }}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
          <Typography
            variant="h5"
            component="div"
            style={{ fontWeight: "bolder" }}
          >
            {jobTitle}
          </Typography>
          <IconButton
            onClick={handleFavoriteClick}
            style={{ marginLeft: "auto" }}
          >
            {isFavorite ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <Button
            disableElevation
            variant="contained"
            sx={{ bgcolor: "#0277bd", color: "#fff" }}
            onClick={handleApplyClick}
          >
            {currentStatus ? "Applied" : "Apply"}
          </Button>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon
            sx={{ color: palette.secondary.main, width: "20px" }}
          />
          <Typography
            sx={{
              fontSize: 15,
              color: palette.secondary.main,
              fontWeight: 500,
              marginLeft: "4px",
            }}
            component="span"
          >
            {location}
          </Typography>
        </div>
        <div style={{ float: "left", margin: "10px" }}>
          <Typography
            sx={{ mb: 1.7, fontWeight: "bold", float: "left" }}
            color="text.secondary"
          >
            {category}
          </Typography>
        </div>
        <div style={{ float: "left", margin: "10px", width: "100%" }}>
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            Description:
            <span style={{ fontWeight: "normal" }}>
              {description.split(" ").slice(0, 15).join(" ")}...
            </span>
          </Typography>
        </div>
      </CardContent>
      <div
        style={{
          float: "left",
          margin: "10px 10px 20px",
        }}
      >
        <Button
          disableElevation
          variant="contained"
          size="small"
          style={{ backgroundColor: "whitesmoke", color: "blue" }}
        >
          <Link
            to={`/job/${job_id}`}
            style={{
              backgroundColor: "whitesmoke",
              color: "blue",
              textTransform: "capitalize",
            }}
          >
            View Details...
          </Link>
        </Button>
      </div>
    </Card>
  );
};

export default CardElement;
