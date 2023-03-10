const res = require("express/lib/response");
const nodemailer = require("nodemailer");

const mailerFunc = async (
  mailContent,
  toAddress,
  mailSubject = "Equiprents-QueryHelper"
) => {
  try {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_MAIL_ID,
        pass: process.env.SENDER_MAIL_PWD,
      },
    });
    const mailOptions = {
      from: process.env.SENDER_MAIL_ID,
      to: toAddress,
      subject: mailSubject,
      text: mailContent,
    };

    const response = await transporter.sendMail(mailOptions);
    return response;
  } catch (error) {
    console.log(error.message, " xerr-mailFunc");
  }
};
module.exports = mailerFunc;