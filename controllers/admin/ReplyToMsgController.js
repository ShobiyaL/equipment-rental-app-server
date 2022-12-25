const mailerFunc = require("../../utils/mailer");

const ReplyToMsgController = async (req, res) => {
  const { mailContent, recipientEmail } = req.body;
  try {
    await mailerFunc(mailContent, recipientEmail);
    res.json({ message: "Mail Sent Successfully", type: "success" });
  } catch (error) {
    console.log(error, "   err in sending mail");
    return res.status(500).json({ message: error.message, type: "error" });
  }
};
module.exports = ReplyToMsgController;