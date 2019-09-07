import React, { Fragment, useState } from 'react';
import ContactForm from '../components/Form';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = event => {
    event.preventDefault();
    console.log('submitted');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Fragment>
      <Navigation />
      <div className="container">
        <h1>Contact</h1>
        <ContactForm formData={formData} onSubmit={handleSubmit} onChange={handleChange} />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
