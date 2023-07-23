import React, { useState, useEffect } from "react";
import axios from "../api/base";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";

const FileList = ({ taskId }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    fetchFileList();
  }, []);

  const fetchFileList = async () => {
    try {
      const response = await axios.get(`file/list/${taskId}`);
      setFileList(response.data.fileList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="submitted">
      <h2>Your Submitted Work</h2>
      {fileList.map((file) => (
        <Card key={file.fileName} sx={{ marginTop: "10px", width: "50%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <FileCopyIcon sx={{ marginRight: "10px" }} />
            <Typography sx={{ textAlign: "center", marginLeft: "auto" }}>
              {file.fileName}
            </Typography>
            <Box sx={{ marginLeft: "auto" }}>
              <Button variant="contained" href={file.fileUrl} download>
                <i className="fa fa-download" style={{ fontSize: "24px" }}></i>
              </Button>
            </Box>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default FileList;
