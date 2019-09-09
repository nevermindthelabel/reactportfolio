import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

const ContactForm = props => {
console.log(props.formData)
  return (
    <Form className="contactForm">
      <h1 className="text-center text-white">Email me</h1>
      <Form.Group onSubmit={props.handleSubmit}>
        <Form.Label>Your Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email address"
          name="email"
          value={props.handleChange}
        />
        <Form.Text className="text-warning">I'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={props.handleChange}
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
          value={props.handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
