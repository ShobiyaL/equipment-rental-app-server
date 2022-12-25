const ContactForm = require("../../models/contactForm");

const ContactUsController = async (req, res) => {
  const { username, email, phoneNo, query } = req.body;
  
  try {
    if (!email || !query) {
      return res
        .status(403)
        .json({ message: " email and query are necessaary fields", type: "error" });
    }

    const response = await ContactForm.create({
      username,
      email,
      phoneNo,
      query,
    });
    // console.log(response);
    if (!response) {
      return res
        .status(403)
        .json({ message: "Provide valid email and query", type: "error" });
    }

    res.json({ message: "Message Sent Successfully", type: "success" });
  } catch (error) {
    console.log(error.message, " err in ContactUs handler");
     res.status(500).json({
      message: error.message,
      
      type: "error",
    });
  }
};

module.exports = ContactUsController;