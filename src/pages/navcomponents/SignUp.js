/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "../../api/base";
import React from "react";
import { useState } from "react";
import "../../componentsCss/logInpage.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password, firstName, lastName);
    console.log(event.target.value);
    try {
      const response = await axios.post("/user/register/email", {
        firstName,
        lastName,
        email,
        password,
      });
      alert("Check your inbox to verify!");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <div>
      <div className="section t-11">
        <div className="sizing ">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-3">
              <div className="section pb-1 pt-2 pt-sm-2 text-center">
                <h6 className="stud mb-0 pb-2">
                  <span>As a Student </span>
                  <span>As a Employer</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <span className="registered p-0">
                            Already Registered?
                            <br />
                            <Link to="/user/login">Login</Link>
                          </span>
                          <span>
                            <h4 className="mt-3 pb-1">Sign Up</h4>
                          </span>
                          <div className="row">
                            <div className="form-group col-md-6 ">
                              <input
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                                name="firstName"
                                className="form-style"
                                placeholder="First Name"
                                id="first"
                                autocomplete="off"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group col-md-6 ">
                              <input
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                                name="lastName"
                                className="form-style"
                                placeholder="last Name"
                                id="last"
                                autocomplete="off"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="email"
                              autocomplete="off"
                            />
                            {/* <i className="input-icon uil uil-at"></i> */}
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="password"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button
                            value="signUpBtn"
                            className="btn mt-4"
                            onClick={handleSubmit}
                          >
                            submit
                          </button>

                          <div className="col-md-12 ">
                            <div className="login-or  ">
                              <div className=" mt-0">
                                <span className="span-or ">or</span>
                              </div>
                            </div>
                          </div>
                          <div className="accounts">
                            <div class="line"></div>
                            <p class="message">Signup with Accounts</p>
                            <div class="line"></div>
                          </div>
                          <div class="social-icons">
                            <a href={process.env.REACT_APP_BACKEND_SERVER_URL +"/auth/google/register"}>
                              <button
                                aria-label="Signup with Google"
                                class="icon "
                              >
                                <div className="g_icon">
                                  <FontAwesomeIcon icon={faGoogle} />
                                </div>
                              </button>
                            </a>
                            <a>
                              <button
                                aria-label="Signup with Linkedin"
                                class="icon"
                              >
                                <div className="g_icon">
                                  <FontAwesomeIcon icon={faLinkedin} />
                                </div>
                              </button>
                            </a>
                            <a>
                              <button
                                aria-label="Signup with GitHub"
                                class="icon"
                              >
                                <div className="g_icon">
                                  <FontAwesomeIcon icon={faGithub} />
                                </div>
                              </button>
                            </a>
                          </div>

                          <p className="small mt-2">
                            By signing up, you are indicating that you have read
                            and agree to the <a href="#">Terms of Use</a>
                            and <a href="#">Privacy Policy.</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mt-5 pb-1">Sign Up </h4>
                          <div className="row">
                            <div className="form-group col-md-6 px-1">
                              <input
                                type="text"
                                onChange={(e) => setFirstName(e.target.value)}
                                name="firstName"
                                className="form-style"
                                placeholder="First Name"
                                id="firstName"
                                autocomplete="off"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                            <div className="form-group col-md-6 px-1">
                              <input
                                type="text"
                                onChange={(e) => setLastName(e.target.value)}
                                name="lastName"
                                className="form-style"
                                placeholder="last Name"
                                id="lastName"
                                autocomplete="off"
                              />
                              <i className="input-icon uil uil-user"></i>
                            </div>
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              onChange={(e) => setEmail(e.target.value)}
                              name="logemail"
                              className="form-style"
                              placeholder="Official mail ID"
                              id="logemail"
                              autocomplete="off"
                            />
                            {/* <i className="input-icon uil uil-at"></i> */}
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              onChange={(e) => setPassword(e.target.value)}
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <button
                            value="signUpBtn"
                            className="btn mt-3"
                            onClick={handleSubmit}
                          >
                            submit
                          </button>

                          <div className="col-md-12 ">
                            <div className="login-or">
                              <div className=" mt-0">
                                <span className="span-or ">or</span>
                              </div>
                            </div>
                          </div>
                          <div className="accounts">
                            <div class="line"></div>
                            <p class="message">Signup with Accounts</p>
                            <div class="line"></div>
                          </div>
                          <div class="social-icons">
                            <a>
                              <button
                                aria-label="Signup with Google"
                                class="icon "
                              >
                                <div className="g_icon">
                                  <i className="fa fa-google"></i>
                                </div>
                              </button>
                            </a>
                            <a>
                              <button
                                aria-label="Sginup with Linkedin"
                                class="icon"
                              >
                                <div className="g_icon">
                                  <i className="fa fa-linkedin"></i>
                                </div>
                              </button>
                            </a>
                            <a>
                              <button
                                aria-label="Singup with Github"
                                class="icon"
                              >
                                <div className="g_icon">
                                  <i className="fa fa-github"></i>
                                </div>
                              </button>
                            </a>
                          </div>

                          <p className="small mt-3">
                            By signing up, you are indicating that you have read
                            and agree to the
                            <a href="#" className="ps-hero__content__link">
                              Terms of Use
                            </a>
                            and <a href="#">Privacy Policy.</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
