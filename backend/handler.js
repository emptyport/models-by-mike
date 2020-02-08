"use strict";

const { createLogger, format, transports } = require("winston");
const AWS = require("aws-sdk");
const request = require("request");

const SES = new AWS.SES();

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(format.colorize(), format.simple())
    })
  ]
});

const validateToken = (data, done) => {
  const options = {
    uri: "https://www.google.com/recaptcha/api/siteverify",
    method: "POST",
    qs: {
      secret: process.env.RECAPTCHA_SECRET,
      response: data.token
    }
  };
  request(options, done);
};

const sendEmail = (data, done) => {
  const body = `${data.firstName} ${data.lastName} - ${data.email} \n\n ${data.message}`;

  const params = {
    Source: process.env.EMAIL,
    ReplyToAddresses: [data.email],
    Destination: {
      ToAddresses: [process.env.EMAIL]
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: body
        }
      },
      Subject: {
        Charset: "UTF-8",
        Data: `${data.firstName} ${data.lastName} via modelsbymike3d.com`
      }
    }
  };

  SES.sendEmail(params, done);
};

module.exports.mailer = (event, context, callback) => {
  logger.info("Receiving request:");
  const data = JSON.parse(event.body);
  logger.info(
    `${data.firstName} ${data.lastName} | ${data.email} | ${data.message}`
  );
  logger.info(`${data.token}`);

  const res = {
    statusCode: 400,
    body: JSON.stringify({ status: "failed" })
  };

  validateToken(data, (tokenErr, captcha) => {
    if (tokenErr) {
      logger.error(`Error while validating token ${tokenErr}`);
      return callback(null, res);
    }

    const captchaRes = JSON.parse(captcha.body);
    logger.info(captchaRes);
    if (!captchaRes.success) {
      logger.error(`Unsuccessful verification`);

      return callback(null, res);
    }

    if (captchaRes.score < 0.5) {
      logger.error("Detected spam submission");
      return callback(null, res);
    }

    sendEmail(data, err => {
      const res = {
        statusCode: 200,
        body: JSON.stringify({ status: "success" })
      };

      if (err) {
        logger.error(`Error while sending email ${err}`);

        return callback(null, res);
      }

      logger.info("Successfully sent email");
      res.statusCode = 200;
      res.body = JSON.stringify({ status: "success" });
      callback(null, res);
    });
  });
};
