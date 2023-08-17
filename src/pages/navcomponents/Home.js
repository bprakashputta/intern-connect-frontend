import "../../pages.css/home.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faGit,
  faJs,
  faAngular,
  faNode,
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import profile from "../../images/profile.png";
import certified from "../../images/certified.png";
import ReactLogo from "../../componentsCss/icon.svg";
import Footerbar from "../../components/Bars/Footerbar";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/jobs`;
    navigate(path);
  };

  return (
    <div className="home">
      <section>
        <div class="topping">
          <div class="content">
            <h1 class="header-title">
              Internship <br></br>
              <span>Roadmap</span>
            </h1>
          </div>
          <div class="header-box">
            <div class="header-description">
              Your Roadmap to Success: Internships that Guide Your Career. We
              help you achieve your goals.
            </div>
          </div>

          <button className="cta" onClick={routeChange}>
            <span>Start Applying</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          <div class="background-img"></div>
        </div>
      </section>

      <div class="row justify-content-center mb-5">
        <div class="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
          <span class="subheading"> </span>
          <h2 class="h2-style">Our Job Categories</h2>
        </div>
      </div>
      <section>
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <div class="type">React Developer</div>
            </div>
            <div class="slide">
              <div class="type"> Java Developer</div>
            </div>
            <div class="slide">
              <div class="type"> ProductManagement</div>
            </div>
            <div class="slide">
              <div class="type">Angular Developer </div>
            </div>
            <div class="slide">
              <div class="type">Digital Marketing</div>
            </div>
            <div class="slide">
              <div class="type">Market Research</div>
            </div>
            <div class="slide">
              <div class="type">Sales</div>
            </div>
            <div class="slide">
              <div class="type">Text Content Preparation</div>
            </div>
            <div class="slide">
              <div class="type">Graphic Content Preparation</div>
            </div>
            <div class="slide">
              <div class="type">Video Content Preparation</div>
            </div>
            <div class="slide">
              <div class="type">Audio content Preparation</div>
            </div>
            <div class="slide">
              <div class="type">SpringBoot Developer</div>
            </div>
            <div class="slide">
              <div class="type">WordPress Developer</div>
            </div>
            <div class="slide">
              <div class="type">Project Management</div>
            </div>
            <div class="slide">
              <div class="type">Strategic Relationship Management</div>
            </div>
            <div class="slide">
              <div class="type">Program Management</div>
            </div>
            <div class="slide">
              <div class="type">Enterpreneur in residence</div>
            </div>
            <div class="slide">
              <div class="type">Technical Program Management</div>
            </div>
          </div>
        </div>
      </section>
      <main role="main" className="site-main">
        <section className="fixed-width">
          <h2 class="skills">Skills You'll be working on!</h2>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>HTML5</h3>
              <FontAwesomeIcon
                icon={faHtml5}
                style={{ color: "#e34f26", height: "8rem" }}
              />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>CSS3</h3>
              <FontAwesomeIcon
                icon={faCss3}
                style={{ color: "#2965f1", height: "8rem" }}
              />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>JavaScript</h3>
              <FontAwesomeIcon
                icon={faJs}
                style={{ color: "#F0DB4F", height: "8rem" }}
              />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>MongoDB</h3>
              <img
                src={ReactLogo}
                alt="React Logo"
                style={{ width: "140px", height: "8rem", objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>Git</h3>
              <FontAwesomeIcon
                icon={faGit}
                style={{ color: "#4183c4", height: "8rem" }}
              />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>Node.js</h3>
              <FontAwesomeIcon
                icon={faNode}
                style={{ color: "#80BD01", height: "8rem" }}
              />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>Angular.js</h3>
              <FontAwesomeIcon
                icon={faAngular}
                style={{ color: "#DD1B16", height: "8rem" }}
              />
            </div>
          </div>

          <div className="col fourth highlighted-bg small-box">
            <div class="icon icon-large">
              <h3>Agile</h3>
              <FontAwesomeIcon
                icon={faAngular}
                style={{ color: "#0e3a86", height: "8rem" }}
              />
            </div>
          </div>
        </section>
      </main>
      <div className="process-heading">
        <h1>How to get started?</h1>
      </div>
      <section>
        <div>
          <div className="custom-card-section">
            <div className="custom-row">
              <div className="custom-card setcard">
                <div className="step-count">Step 1</div>

                <div className="process">
                  <h3>Complete Your Profile</h3>
                  <span>
                    <p>
                      Welcome to our platform! We're excited to have you join
                      our community. To get started, please complete your
                      profile information.
                    </p>
                  </span>

                  <div className="button-signup">
                    <button class="signing-in">
                      <span class="arrow" aria-hidden="true">
                        <span class="icon arrow"></span>
                      </span>
                      <span class="button-text">SignUp</span>
                    </button>
                  </div>
                </div>
                <div className="profile-img">
                  <img
                    src={profile}
                    alt="profile"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
              </div>
            </div>
            <div className="custom-row">
              <div className="custom-card">
                <div className="step-count">Step 2</div>
                <div className="process">
                  <h3>Apply Internships</h3>
                  <span>
                    Explore and apply for exciting internship opportunities that
                    align with your skills and interests. Gain valuable
                    experience and kick-start your career journey.
                  </span>
                </div>
              </div>
              <div className="custom-card">
                <div className="step-count">Step 3</div>
                <div className="process">
                  <h3>Complete Tasks</h3>
                  <span>
                    Engage with real-world projects from companies looking for
                    talented individuals like you. Complete tasks, demonstrate
                    your skills, and make a meaningful impact.
                  </span>
                </div>
              </div>
            </div>
            <div className="custom-row">
              <div className="custom-card setcard">
                <div className="step-count">Step 4</div>
                <div className="process">
                  <h3>Get Certificates</h3>
                  <span>
                    Showcase your achievements and skills by earning
                    certificates for the tasks you've successfully completed.
                    Build a strong profile that highlights your accomplishments.
                  </span>
                </div>
                {/* <div className="profile-img">
                  <img
                    src={certified}
                    alt="icon"
                    style={{
                      width: "200px",
                      height: "200px",
                      marginBottom: "0px",
                    }}
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="about">
          <div class="block2">
            <div class="about_heading">
              ABOUT US
              <br />
            </div>
            <div className="texting">
              <p>
                InternConnect is a leading platform for internship
                opportunities, designed to connect students and companies. Our
                platform provides a seamless experience for students seeking
                valuable real-world experiences and companies looking to engage
                with young talents. Since our inception, we've been at the
                forefront of revolutionizing the internship landscape. Our
                commitment to quality has made us the industry standard, earning
                the trust of students, educators, and companies alike.
                <p>
                  Our platform has empowered countless individuals to embark on
                  meaningful career journeys. We're proud to have facilitated
                  connections that have not only spanned five centuries but also
                  embraced the technological advancements of our times.
                </p>
              </p>
            </div>
            <div className="social_icons">
              <div className="square">
                <div className="icons">
                  <FontAwesomeIcon icon={faFacebook} size="5x" />
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </div>
              <div className="square">
                <div className="icons">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footerbar />
    </div>
  );
}

export default Home;
