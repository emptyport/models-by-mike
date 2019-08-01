const nodemailer = require('nodemailer');
const config = require('../config.json');
const path = require('path');

module.exports = function(app) {
  app.post('/api/contact', (req, res) => {

    req.body.name = decodeURIComponent(req.body.name);
    if(req.body.challenge !== '4') {
      res.send({
        response: "error",
        msg: "Challenge question was answered incorrectly"
      });
      return;
    }

    let mailTemplate = `
      <h3>New message from ${req.body.name} ${req.body.email}</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        type: 'OAuth2',
        user: config.EM_USERNAME,
        clientId: config.EM_CLIENTID,
        clientSecret: config.EM_CLIENTSECRET,
        refreshToken: config.EM_REFRESHTOKEN,
        accessToken: config.EM_ACCESSTOKEN
      }
    });

    const mailOptions = {
      from: config.EM_USERNAME,
      to: config.EMAIL,
      replyTo: req.body.email,
      subject: `${req.body.name} via modelsbymike3d.com`,
      html: mailTemplate
    }

    transporter.sendMail(mailOptions, function(err, info) {
      if(err) {
        console.log(err); res.send({
          response: "error",
          msg: "There was an error processing your message. Please try again later"
        });
        return; 
      }
      else {
        console.log(info);
        res.send({
          response: "success",
          status: 200
        });
      }
    });   
  });

}