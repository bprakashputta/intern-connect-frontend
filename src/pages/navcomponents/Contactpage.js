import "../../pages.css/contact.css";
import React, { useState } from "react";
import axios from "axios";
import Footbar from "../../components/Bars/Footerbar";

function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("message sent!");
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div class="box">
        <div class="head">
          <div className="before-lineup">
            <h1 className="lineUp">
              Contact <span class="red">Us</span>
            </h1>
          </div>
          <hr class="redline" />
          <p>Have Questions ? We have answers ( may be )</p>
        </div>
      </div>

      <div class="contact">
        <div class="container__elem">
          <div className="elem__block">
            <img
              className="hover-img"
              src="https://i.postimg.cc/gjnCSrHQ/62759-computer-location-icon-icons-free-download-png-hd.png"
              width="50%"
              alt="call"
            />
          </div>

          <h2 class="mode">Our Address</h2>

          <p class="mode">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="container__elem">
          <div class="elem__block">
            <img
              class="hover-img"
              src="https://i.postimg.cc/XvK00tKD/call.png"
              width="50%"
              alt="call"
            />
          </div>

          <h2 class="mode">CALL US</h2>
          <p class="mode">Lorem ipsum dolor sit amet.</p>
        </div>
        <div class="container__elem">
          <div class="elem__block">
            <img
              class="hover-img"
              src="https://i.postimg.cc/Fzzt3RM2/write.png"
              width="50%"
              alt="mail"
            />
          </div>
          <h2 class="mode">WRITE US</h2>
          <p class="mode">
            We will respond to your email inquiry within 24 hours.
          </p>
        </div>
        <div class="container__elem">
          <div class="elem__block">
            <img
              class="hover-img"
              src="https://i.postimg.cc/tT2QsPM3/faq.png"
              width="50%"
              alt="faq"
            />
          </div>

          <h2 class="mode">FAQ</h2>
          <p class="mode">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div class="touch">
        <h2>Get in touch</h2>
        <hr class="redline" />
      </div>

      <form onSubmit={handleSubmit} method="POST" name="contact-form">
        <div class=" mt-11">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                  ng-model="firstname"
                  name="firstname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Company Name"
                  ng-model="company"
                  name="company"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone"
                  ng-model="phone"
                  name="firstname"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                  ng-model="lastname"
                  name="lastname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="E-mail"
                  ng-model="email"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div class="group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Course"
                  ng-model="course"
                  name="course"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          </div>
        </div>

        <div class="">
          <div class="row">
            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
            <div class="col-lg-8 col-md-8 col-sm-8">
              <div class="group">
                <textarea
                  class="form-control"
                  rows="6"
                  placeholder="Message"
                  ng-model="message"
                  name="message"
                  required
                  onChange={handleChange}
                ></textarea>
              </div>
              <div class="pager">
                <button type="submit" class="btn btn-success">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        </div>
      </form>
      <Footbar />
    </div>
  );
}

export default Contact;
