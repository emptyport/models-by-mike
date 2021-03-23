"use strict";

const { createLogger, format, transports } = require("winston");
const AWS = require("aws-sdk");
const request = require("request");

const SES = new AWS.SES();

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "info",
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

const sendEmail = (data, done) => {
  const body = `${data.name} - ${data.email} \n\n ${data.message}`;

  const params = {
    Source: process.env.FROM,
    ReplyToAddresses: [data.email],
    Destination: {
      ToAddresses: [process.env.EMAIL],
    },
    Message: {
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `${data.name} via modelsbymike3d.com`,
      },
    },
  };

  SES.sendEmail(params, done);
};

module.exports.mailer = (event, context, callback) => {
  logger.info("Receiving request:");
  const data = JSON.parse(event.body);
  logger.info(`${data.name} | ${data.email} | ${data.message}`);
  logger.info(`${data.challenge}`);

  const res = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 400,
    body: JSON.stringify({ status: "failed" }),
  };

  const validAnswers = [9, "9", "Nine", "nine"];
  if (!validAnswers.includes(data.challenge)) {
    logger.error("Detected spam submission");
    return callback(null, res);
  }

  sendEmail(data, (err) => {
    if (err) {
      logger.error(`Error while sending email ${err}`);
      return callback(null, res);
    }

    logger.info("Successfully sent email");
    res.statusCode = 200;
    res.body = JSON.stringify({ status: "success" });
    callback(null, res);
  });
};
