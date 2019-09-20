import React, { Fragment, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
// import ContactForm from '../components/Form';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .send('gmail', 'template_z94DQ8Z0', templateParams, 'user_TLMwrj0PSqq3A4j3MB7eB')
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text);
        },
        err => {
          console.log('FAILED...', err);
        }
      )
      .finally(
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      );
  };

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message
  };

  return (
    <Fragment>
      <Navigation />
      <Container fluid="true" className="contact" style={{ height: '100vh' }}>
        <h1 className="p-5 text-white">Contact</h1>
        <Container>
          <Row>
            <Col md={8}>
              <Form className="contactForm" onSubmit={handleSubmit} method="POST" action="/send">
                <h1 className="text-center text-white">Email me</h1>
                <Form.Group>
                  <Form.Label>Your Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <Form.Text className="text-warning">
                    I'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="5"
                    type="text"
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
              {/* <ContactForm
                className="contactForm"
                formData={formData}
                onChange={handleChange}
                setFormData={setFormData}
                method="POST"
              /> */}
            </Col>
            <Col md={4} className="contactBackground">
              <h1>Contact links</h1>
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
