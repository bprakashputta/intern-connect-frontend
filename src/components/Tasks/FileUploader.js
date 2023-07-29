import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Upload, Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "../../api/base";

function FileUploader({ taskId }) {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);

  async function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList }) => setFileList(fileList);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("fileList");

    let formData = new FormData();
    for (var a = 0; a < fileList.length; a++) {
      formData.append("files", fileList[a].originFileObj);
    }

    try {
      const response = await axios.post(`file/upload/${taskId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("File uploaded:", response.data.fileUrl);
    } catch (error) {
      console.error("Failed to upload file:", error);
    }
  };

  const uploadButton = (
    <div className="upload-button">
      <div style={{ marginLeft: 8 }}> + Add Files</div>
    </div>
  );

  const fileTypes = [
    "application/pdf",
    "application/zip",
    "image/jpeg",
    "image/png",
  ];

  const customRequest = ({ file, onSuccess }) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(",")[1];
      file.thumbUrl = `data:${file.type};base64,${base64String}`;
      onSuccess(null, file);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="mt-5 files-submitter">
      <div className="upload-files">
        <Upload
          listType="picture"
          fileList={fileList}
          // onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
          customRequest={customRequest}
          accept={fileTypes.join(",")}
          className="ant-upload ant-upload-select"
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
      </div>

      <Button type="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default FileUploader;
