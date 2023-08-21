import React from "react";
import mobilev from "../images/mobilev.png";
import "../pages.css/home.css";

const MobileVersion = () => {
  const containerStyle = {
    width: "100%",
    marginTop: "auto",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "10px",
    boxSizing: "border-box",
    top: "150px",
    backgroundImage: `url(${mobilev})`,
    backgroundSize: "cover",
    height: "300px",
  };

  return (
    <div style={containerStyle}>
      <div className="msg">
        <div className="note">
          Please log in from the web version for the best experience, as we're
          currently enhancing the mobile interface.
        </div>
      </div>
    </div>
  );
};

export default MobileVersion;
