import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Bars/Sidebar";
import "../Admin/admin.css";

const Dashboard = () => {
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const [isSidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSidebarHidden(true);
    } else if (window.innerWidth > 576) {
      setSearchFormVisible(false);
    }
  }, []);

  const handleSearchButtonClick = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setSearchFormVisible(!isSearchFormVisible);
    }
  };

  const handleSwitchModeChange = () => {
    setDarkMode(!isDarkMode);
  };

  const handleMenuBarClick = () => {
    setSidebarHidden(!isSidebarHidden);
  };

  return (
    <section id="content">
      <nav>
        <i className="bx bx-menu" onClick={handleMenuBarClick}></i>
        <a href="#" className="nav-link">
          Categories
        </a>
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button
              type="submit"
              className="search-btn"
              onClick={handleSearchButtonClick}
            >
              <i
                className={isSearchFormVisible ? "bx bx-x" : "bx bx-search"}
              ></i>
            </button>
          </div>
        </form>
        <input
          type="checkbox"
          id="switch-mode"
          hidden
          onChange={handleSwitchModeChange}
        />
        <label htmlFor="switch-mode" className="switch-mode"></label>
        <a href="#" className="notification">
          <i className="bx bxs-bell"></i>
          <span className="num">8</span>
        </a>
        {/* <a href="#" className="profile">
          <img src="img/people.png" alt="Profile" />
        </a> */}
      </nav>

      <Sidebar
        isSidebarHidden={isSidebarHidden}
        handleMenuBarClick={handleMenuBarClick}
      />

      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>
              </li>
              <li>
                <a className="active" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
