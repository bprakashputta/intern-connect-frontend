import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { jobTypeLoadAction } from "../redux/actions/jobTypeAction";
import { grey } from "@mui/material/colors";

const SelectComponent = ({ handleChangeCategory, cat }) => {
  const { jobType } = useSelector((state) => state.jobTypeAll);
  const { palette } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobTypeLoadAction());
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
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
          label="Category"
          onChange={handleChangeCategory}
        >
          <MenuItem value="">All</MenuItem>
          {jobType &&
            [...new Set(jobType.map((jt) => jt.role_name))].map((role_name) => (
              <MenuItem key={role_name} value={role_name}>
                {role_name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
