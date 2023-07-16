import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, Pagination, Typography, useTheme } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";

const SelectComponent = ({
  handleChangeCategory,
  handleChangeLocation,
  cat,
}) => {
  const { jobType } = useSelector((state) => state.jobTypeAll);
  const { palette } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  return (
    <div className="filter-card mt-1">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            {handleChangeCategory ? "Select Category" : "Select Location"}
          </InputLabel>
          <Select
            inputProps={{
              MenuProps: {
                MenuListProps: {
                  sx: {
                    margin: "10px",
                    padding: "20px",
                    backgroundImage:
                      "linear-gradient(to right bottom, #f9f9ff, #ecf1ff, #d9ebff, #c2e6fc, #a9e2f5)",
                  },
                },
              },
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cat}
            label={handleChangeCategory ? "Category" : "Location"}
            onChange={handleChangeCategory || handleChangeLocation}
          >
            <MenuItem value="">All</MenuItem>
            {jobType &&
              (handleChangeCategory
                ? [...new Set(jobType.map((jt) => jt.role_name))].map(
                    (role_name) => (
                      <MenuItem key={role_name} value={role_name}>
                        {role_name}
                      </MenuItem>
                    )
                  )
                : [...new Set(jobType.map((jt) => jt.location))].map(
                    (location) => (
                      <MenuItem key={location} value={location}>
                        {location}
                      </MenuItem>
                    )
                  ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SelectComponent;
