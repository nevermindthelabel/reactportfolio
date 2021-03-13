require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
// const path = require('path');

const app = express();

app.post('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    // service: process.env.service,
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'joy.bashirian@ethereal.email',
      pass: 'FaUgyGtBgGQxrRwEVW'
    }
  });

  const mailOptions = {
    from: process.env.sendingEmail,
    to: process.env.receivingEmail,
    subject: 'test',
    text: req.body
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`message sent ${data}`);
    }
  });
});

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

module.exports = app;
