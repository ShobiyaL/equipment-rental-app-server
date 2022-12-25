const ContactForm = require("../../models/contactForm");

const GetSingleMsgController = async (req, res) => {
  const { id } = req.params;
  try {
    const msgFound = await ContactForm.findById(id);
    if (!msgFound) {
      return res.status(404).json({ message: e.message, type: "error" });
    }
    res.json({
      msgFound,
      message: "Successfully Fetched Message",
      type: "success",
    });
  } catch (error) {
    res.status(500).json({ message: error.message, type: "error" });
  }
};
module.exports = GetSingleMsgController;