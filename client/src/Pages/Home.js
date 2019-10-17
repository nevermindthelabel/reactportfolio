import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Fragment>
      <Navigation />
      <Container fluid="true" className="home" style={{ height: '100vh' }}>
        <h1 className="text-white p-5">Home</h1>
        <Container className="content">
          <Row>
            <div className="col-md-4">
              <img
                className="profile img-fluid"
                src="/images/portfolio/treesProfile.jpg"
                alt="Me"
                width="100%"
                height="100%"
              />
            </div>
            <Col md={8}>
              <p>Hi, thank you for stopping by my page! My name is Matt Kilcup.</p>
              <p>
                I am a tinkerer at heart that enjoys pushing my skills and abilities by learning new
                things. My passion for actualizing ideas and bringing them to fruition dives me and
                seeing lines of code turn into something live continues to amaze me. Having years of
                experience in Business Operations and Project Management has led to redefining my
                skills and continuing to build up my experience in development, to prepare myself
                for transitioning an avid hobby into something further.
              </p>
              <p>
                Coding and development have always fascinated me, and I found myself going to GitHub
                and staring at all of the fantastic code. It continued motivating me to develop my
                own work and deep dive into learning how to code better. I welcome you to view my
                projects below.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <p>
                A little more about me, I married my best friend and have four amazing children.
                When I am not waking up at 4 am to code, build, and tinker with new technologies, I
                enjoy spending time with my family, going on camping trips to Flagstaff and Northern
                Arizona, attending Arizona Diamondbacks games, and taking time to enjoy life.
              </p>
              <p>
                My other technology interest is Linux, especially Arch Linux. I love the simplicity
                of the base distro and the ability to install and configure to your needs.
              </p>
            </Col>
            <Col md={3} sm={6}>
              <iframe
                title="fullStackCertificate"
                frameBorder="0"
                scrolling="no"
                src="https://arizona.credly.com/embed.html#/?member_badge_id=17598295"
                target="_blank"
                rel="noopener noreferrer"
                width="180"
                height="230"
              ></iframe>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="text-center mt-4 mb-4">
              <h3 className="mb-5 text-primary">Here are a few of my favourite technologies</h3>
              <div className="profileBottom">
                {/* <a
                  href="https://www.w3schools.com/css/default.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="companyImages" src="/images/profile/css3.svg" alt="css logo" />
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="companyImages"
                    src="/images/profile/html.svg"
                    target="_blank"
                    alt="HTML5"
                  />
                </a> */}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="companyImages"
                    src="/images/profile/javascript.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                    alt="javascript logo"
                  />
                </a>

                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                  <img className="companyImages" src="/images/profile/react.svg" alt="react logo" />
                </a>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                  {' '}
                  <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                    <img
                      className="companyImages"
                      src="/images/profile/bootstrap-4.svg"
                      alt="bootstrap-4 logo"
                    />
                  </a>
                  <img
                    className="companyImages"
                    src="/images/profile/nodejs.svg"
                    alt="nodejs logo"
                  />
                </a>
                <a href="http://expressjs.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="companyImages"
                    src="/images/profile/express-109.svg"
                    alt="expressjs logo"
                  />
                </a>
                <a href="https://www.archlinux.org/" target="_blank" rel="noopener noreferrer">
                  <img
                    className="companyImages"
                    src="/images/profile/Archlinux-icon-crystal-64.svg.png"
                    alt="Arch Linux Logo"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
