/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../componentsCss/Bars/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { userLogoutAction } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [colorChange, setColorChange] = useState(false);
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const dispatch = useDispatch();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // const email = userInfo?.email;
  const profilePhoto = userInfo?.profilePhoto;

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
            console.log(userInfo.userType);
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

  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  if (isAdminPage) {
    return null;
  }
  const getDestinationURL = () => {
    if (userInfo.userType === "user") {
      return "/user/myapplications";
    } else {
      return "/employer/myjobs";
    }
  };

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
                        <img
                          src={userInfo?.profilePhoto}
                          alt="Profile"
                          className="profile-photo"
                          style={{
                            borderRadius: "50%",
                            height: "30px",
                            width: "30px",
                            marginRight: "10px",
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
                              <FontAwesomeIcon
                                icon={faUser}
                                style={{
                                  height: "15px",
                                  marginRight: "10px",
                                }}
                              />

                              <a href="/user/editprofile">
                                <button> My Profile</button>
                              </a>
                            </li>
                            <li>
                              <Link to={getDestinationURL()}>
                                <button>
                                  {userInfo.userType === "user"
                                    ? "My Applications"
                                    : "My Jobs"}
                                </button>
                              </Link>
                            </li>

                            <li>
                              <FontAwesomeIcon
                                icon={faSignOutAlt}
                                style={{
                                  height: "15px",
                                  marginRight: "10px",
                                }}
                              />
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
