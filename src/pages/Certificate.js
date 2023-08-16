import React, { useState, useEffect } from "react";
import axios from "../api/base";
import { saveAs } from "file-saver";
import "../pages.css/certificate.css";

const Certificate = () => {
  const [name, setName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10);
    setDate(formattedDate);
  }, []);
  const generateCertificate = async () => {
    const response = await axios.post(
      "/certificate/generate",
      {
        name,
        courseName,
        date,
      },
      {
        responseType: "blob",
      }
    );

    if (response.status === 200) {
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      saveAs(pdfBlob, `${name}_${courseName}_certificate.pdf`);
    } else {
      console.error("Certificate generation failed.");
    }
  };

  return (
    <div className="container1">
      <div className="certificate-container">
        <form className="certificate-form">
          <label className="certificate-label">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="certificate-input"
            />
          </label>
          <br />
          <label className="certificate-label">
            Course Name:
            <input
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="certificate-input"
            />
          </label>
          <br />
          <label className="certificate-label">
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="certificate-input"
            />
          </label>
        </form>
        <button className="certificate-button" onClick={generateCertificate}>
          Get Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;
