import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Upload, Modal, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

function FileUploader() {
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

  const handleSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    for (var a = 0; a < fileList.length; a++) {
      formData.append("file[]", fileList[a].originFileObj);
    }

    axios
      .post("http://localhost/save.php", formData)
      .then((res) => {
        alert("Files uploaded.");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
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
    <div className="MainDiv">
      <div className="jumbotron text-center pt-5">
        <h3 className="mt-5 mb-5">Submit</h3>
      </div>

      <div className="">
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          beforeUpload={() => false}
          customRequest={customRequest}
          accept={fileTypes.join(",")}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
        <Button type="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default FileUploader;
