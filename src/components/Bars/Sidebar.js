import React, { useState } from "react";
import { Link } from "react-router-dom";

import "@trendmicro/react-sidenav/dist/react-sidenav.css"; // Import the Trendmicro Sidebar CSS
import "../../componentsCss/Bars/Sidebar.css"; // Import your custom Sidebar CSS

const Sidebar = ({ isSidebarHidden, handleMenuBarClick }) => {
  const [user, setUser] = useState(null);

  const handleSignInBtn = (event) => {
    event.preventDefault();
    if (user === null) {
      setUser("Deepu");
    } else {
      setUser(null);
    }
  };

  return (
    <aside id="sidebar" className={isSidebarHidden ? "hide" : ""}>
      <Link to="/" className="brand">
        <span className="text">Internconnect</span>
      </Link>
      <ul className="side-menu top">
        <li className="active">
          <Link to="/">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/jobpage">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">Jobs</span>
          </Link>
        </li>
        <li>
          <Link to="/analytics">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">tasks</span>
          </Link>
        </li>
        <li>
          <Link to="/message">
            <i className="bx "></i>
            <span className="text">Employers</span>
          </Link>
        </li>
        <li>
          <Link to="/team">
            <i className="bx bxs-group"></i>
            <span className="text">Users</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <Link to="/settings">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li>
          <a href="#" className="logout" onClick={handleSignInBtn}>
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">{user ? "Logout" : "Login"}</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
