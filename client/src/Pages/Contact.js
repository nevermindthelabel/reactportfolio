import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import emailjs from 'emailjs-com';
import ContactForm from '../components/Form';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {

  return (
    <Fragment>
      <Navigation />
      <Container fluid="true" className="contact">
        <h1 className="p-5 text-white">Contact</h1>
        <Container>
          <Row>
            <Col md={8}>
              <ContactForm
              // className="contactForm"
              // formData={formData}
              // setFormData={setFormData}
              // onChange={handleChange}
              // onSubmit={handleSubmit}
              />
            </Col>
            <Col md={4} className="contactBackground">
              <h1 className="text-white">Contact links</h1>
              <div className="mx-auto">
                <ul style={{ listStyle: 'none', marginTop: '5em' }}>
                  <li
                    className="list-item"
                    data-aos="slide-left"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                  >
                    <a href="https://github.com/nevermindthelabel">
                      <h1>GitHub</h1>
                    </a>
                  </li>
                  <li
                    className="list-item"
                    data-aos="slide-down"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                  >
                    <a href="https://www.linkedin.com/in/matt-kilcup-515697168/">
                      <h1>LinkedIn</h1>
                    </a>
                  </li>
                  <li
                    className="list-item"
                    data-aos="slide-up"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                  >
                    <a
                      href="https://drive.google.com/open?id=1foAZhg7dKUg54yF9mE2xtqIFD9rKC3TI"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h1>Resume</h1>
                    </a>
                  </li>
                  <li
                    className="list-item"
                    data-aos="slide-right"
                    data-aos-delay="50"
                    data-aos-duration="3000"
                  >
                    <a href="mailto:matt@mattkilcup.dev" target="_blank" rel="noopener noreferrer">
                      <h1>Email</h1>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Contact;
