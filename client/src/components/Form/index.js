import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './style.css';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    // console.log('submitted');
    event.preventDefault();
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
    <Form className="contactForm" onSubmit={handleSubmit}>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
