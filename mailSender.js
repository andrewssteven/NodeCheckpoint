const nodemailer = require('nodemailer');

// Create transporter with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_email_password_or_app_password'
  }
});

// Set mail options
const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'your_email@gmail.com',
  subject: 'Hello from Node.js',
  text: 'This is an email sent from a Node.js app!'
};

// Send email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Email sent:', info.response);
  }
});