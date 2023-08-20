import React from "react";
import mobilev from "../images/mobilev.png";

const MobileVersion = () => {
  // Define your base style for the container
  const mobileStyle = {
    width: "100%", // Adjust width to 100% for responsiveness
    maxWidth: "700px", // Set a maximum width for larger screens
    marginTop: "auto",
    position: "relative", // Use relative positioning for responsiveness
    marginLeft: "auto", // Center the container horizontally
    marginRight: "auto", // Center the container horizontally
    padding: "10px", // Add some padding for spacing
    boxSizing: "border-box", // Include padding in width calculation
  };

  // Define styles for the image and text
  const imageStyle = {
    maxWidth: "100%", // Ensure the image fits within the container
    height: "auto", // Maintain aspect ratio
    marginTop: "20%",
  };

  const textStyle = {
    margin: "auto",
    fontWeight: "700",
    color: "#f48809",
    position: "relative", // Add relative positioning to create a context for pseudo-element
  };

  return (
    <div style={mobileStyle}>
      <div>
        <img src={mobilev} style={imageStyle} alt="Mobile Version" />
        <p className="animate-text" style={textStyle}>
          Please log in from the web version for the best experience, as we're
          currently enhancing the mobile interface.
        </p>
      </div>
    </div>
  );
};

export default MobileVersion;
