const Order = require("../../models/order");

const GetOrdersController = async (req, res) => {
  const { email, role } = req.userObj;
  try {
    if (role === "admin") {
      return res.status(400).json({ message: "Resource denied", type: "error" });
    }

    const ordersFound = await Order.find({ email });
    if (ordersFound.length === 0) {
      return res.status(404).json({ message: "No orders Found", type: "error" });
    }

    res.json({ message: "Orders Listed", type: "success", ordersFound });
  } catch (error) {
    res.status(500).json({ message: error.message, type: "error" });
  }
};

module.exports = GetOrdersController;