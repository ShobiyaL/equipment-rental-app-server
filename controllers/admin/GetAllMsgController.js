const ContactForm = require("../../models/contactForm");

const GetAllMsgController = async (req, res) => {
  try {
    const allMsgs = await ContactForm.find();
    res.json({ allMsgs, type: "success" });
  } catch (error) {
    res.json({ message: error.message, type: "error" });
  }
};
module.exports = GetAllMsgController;