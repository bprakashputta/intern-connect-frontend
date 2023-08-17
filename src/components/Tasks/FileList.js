import React, { useState, useEffect } from "react";
import axios from "../../api/base";

const FileList = ({ taskId, key }) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    fetchFileList();
  }, [fileList, key]);

  const fetchFileList = async () => {
    try {
      const response = await axios.get(`/file/list/${taskId}`);
      setFileList(response.data.fileList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="submitted">
      <h2> Submitted Work</h2>
      {fileList.map((file) => (
        <div
          key={file.fileName}
          style={{
            marginTop: "10px",
            width: "50%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            className="fa fa-file"
            style={{
              marginRight: "10px",
              fontSize: "24px",
              color: "#1976d2",
            }}
          ></i>
          <span
            style={{
              textAlign: "center",
              marginLeft: "auto",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            {file.fileName}
          </span>
          <a
            href={file.fileUrl}
            download
            style={{
              marginLeft: "auto",
              textDecoration: "none",
              color: "#1976d2",
              display: "flex",
              alignItems: "center",
            }}
          >
            <i
              className="fa fa-download"
              style={{ fontSize: "24px", marginLeft: "8px" }}
            ></i>
            <span style={{ marginLeft: "4px" }}>Download</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FileList;
