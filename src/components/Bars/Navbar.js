/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../componentsCss/Bars/navbar.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { userLogoutAction } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [colorChange, setColorChange] = useState(false);
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dispatch = useDispatch();

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const response = await fetch("/user/details");
        if (response.ok) {
          const data = await response.json();
          if (data && data.user) {
            setLoggedInUser(data.user);
            localStorage.setItem("userInfo", JSON.stringify(data.user));
          } else {
            setLoggedInUser(null);
          }
        } else {
          setLoggedInUser(null);
        }
      } catch (error) {
        setLoggedInUser(null);
        console.log("Error fetching logged-in user:", error);
      }
    };
    fetchLoggedInUser();
  }, []);

  const handleLogout = async () => {
    try {
      dispatch(userLogoutAction());
      setLoggedInUser(null);
      localStorage.removeItem("userInfo");
      navigate("/user/login");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div className="fix">
      <nav className={colorChange ? "navbar-colorChange" : "navbar-top"}>
        <div className="navbar navbar-expand-lg">
          <div className="navbar-bg-class">
            <Link to="/" className="our-title">
              <span>Intern</span>
              <span>Connect</span>
            </Link>

            <div className="navbar-collapse" id="navbarSupportedContent">
              <div className="header-menu">
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="nav-text">
                    <Link to="/jobs">Find Internships</Link>
                  </span>
                </a>

                <a className="nav-link active" aria-current="page" href="#">
                  <span className="nav-text">
                    <Link to="/contactus">Contact Us</Link>
                  </span>
                </a>

                {localStorage.getItem("userInfo") ? (
                  <>
                    <a className="nav-link active" aria-current="page" href="#">
                      <button
                        className="dropdown-toggle nav-text"
                        onClick={handleDropdownToggle}
                      >
                        <FontAwesomeIcon
                          icon={faCircleUser}
                          style={{
                            color: "#66a5e1",
                            fontSize: "24px",
                            right: "20px",
                          }}
                        />
                      </button>
                    </a>
                    <ul className="nav navbar-nav">
                      <li className="dropdown">
                        {dropdownVisible && (
                          <ul
                            className="dropdown-menu dropdown-menu-right"
                            style={{
                              display: "block",
                              opacity: "1",
                              top: "60px",
                            }}
                          >
                            <li>
                              <i className="fa fa-user"></i>
                              <a href="#">
                                <button> My Profile</button>
                              </a>
                            </li>
                            <li>
                              <a href="/user/myapplications">
                                <button> My Applications</button>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <button>Something</button>
                              </a>
                            </li>
                            {/* <li role="separator" className="divider"></li> */}
                            <li>
                              <FontAwesomeIcon icon={faSignOutAlt} />
                              <button onClick={handleLogout}>Logout</button>
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <a className="nav-link active" aria-current="page">
                      <span className="nav-text">
                        <Link to="/user/login">Login</Link>
                      </span>
                    </a>
                    <a className="nav-link active" aria-current="page">
                      <span className="nav-text">
                        <Link to="/user/register">Register</Link>
                      </span>
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ overflowY: "scroll", height: "0px" }}></div>
    </div>
  );
};

export default Navbar;
