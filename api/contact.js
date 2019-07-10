const nodemailer = require('nodemailer');
const config = require('../config.json');
const path = require('path');

module.exports = function(app) {
  app.post('/api/contact', (req, res) => {
    if(req.body.trial !== '4') {
      res.sendFile(path.join(__dirname, '../client/_site', 'spam-contact', 'index.html'));
      return;
    }

    let mailTemplate = `
      <h3>New message from ${req.body.firstname} ${req.body.lastname} ${req.body.email}</h3>
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
      subject: `${req.body.firstname} ${req.body.lastname} via modelsbymike3d.com`,
      html: mailTemplate
    }

    transporter.sendMail(mailOptions, function(err, info) {
      if(err) { console.log(err); res.sendFile(path.join(__dirname, '../client/_site', 'failed-contact', 'index.html')); return; }
      else { console.log(info); res.sendFile(path.join(__dirname, '../client/_site', 'good-contact', 'index.html')); }
    });   
  });

}