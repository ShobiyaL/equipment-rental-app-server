const User = require("../../models/userInfo");

const GetProfileController = async (req, res) => {
  const { email, role } = req.userObj;
  try {
    if (role === "admin") {
      return res.status(400).json({ message: "Resource denied", type: "error" });
    }
    const userFound = await User.findOne({ email }).select(
      "name email"
    );
    if (!userFound) {
      return res.status(400).json({ message: "No user Found", type: "error" });
    }
    res.json({ message: "User Found", type: "success", userFound });
  } catch (error) {
    return res.status(500).json({ message: error.message, type: "error" });
  }
};
module.exports = GetProfileController;