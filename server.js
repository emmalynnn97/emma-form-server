const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
require('dotenv/config')

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());
const port = process.env.PORT || 5001;

app.get('/', (req, res) => [
    res.status(200).send('hi')
])
app.post('/contact', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  var mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: 'emmalynnn97@gmail.com',
    subject: `New email from ${req.body.firstName}`,
    html: `<h2>Subject: ${req.body.subject}</h2><br/><h3>Email: ${req.body.email}</h3><br/><p>${req.body.message}</p>`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})
app.listen(port, () => {
    console.log(`Emma Contact server is listening on port ${port}`)
})