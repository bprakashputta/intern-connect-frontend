/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../../componentsCss/Bars/Footerbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";

function Footerbar() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("Subscription successful!");
        setEmail("");
      } else {
        alert("Subscription failed. Please try again later.");
      }
      console.log(response.data);
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error(error);
    }
  };
  return (
    <footer class="footer-section">
      <div class="block">
        <div class="footer-cta pt-2 pb-0">
          <div class="row">
            <div class="col-xl-4 col-lg-4 mb-50">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Get in Touch</h3>
                </div>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ color: "white", fontSize: "1.5rem" }}
                />
                <div class="cta-text">
                  <h4>Call us</h4>
                  <span>9XXXXXXXXX</span>
                </div>
                <div class="footer-widget">
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    style={{ color: "white" }}
                    size="xl"
                  />
                  <div class="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="/home">Home</a>
                  </li>
                  <li>
                    <a href="/aboutus">About</a>
                  </li>
                  <li>
                    <a href="jobs">Browse Jobs</a>
                  </li>
                  <li>
                    <a href="#">Browse Companies</a>
                  </li>
                  <li>
                    <a href="#">Career Advice</a>
                  </li>
                  <li>
                    <a href="#">Guidelines</a>
                  </li>
                  <li>
                    <a href="#">Job Search</a>
                  </li>
                  <li>
                    <a href="/addjob">Post a Job</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Help center</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div class="footer-widget">
                <div class="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div class="footer-text mb-25">
                  <p>
                    Don't miss any updates of your application, kindly fill the
                    form below..!
                  </p>
                </div>
                <div class="subscribe-form">
                  <form action="#" onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright-area">
        <div class="row">
          <div class="col-xl-6 col-lg-6 text-center text-lg-left">
            <div class="copyright-text">
              <p>Copyright &copy; 2023, All Right Reserved</p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
            <div class="footer-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footerbar;
