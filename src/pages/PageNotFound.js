import { Box } from "@mui/material";
import React from "react";
import Notfound from "../images/Notfound.png";

const PageNotFound = () => {
  return (
    <>
      <Box
        sx={{
          height: "30vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <img
          src={Notfound}
          alt="Page Not Found"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Box>
      <h2>404 Page Not Found</h2>
    </>
  );
};

export default PageNotFound;
