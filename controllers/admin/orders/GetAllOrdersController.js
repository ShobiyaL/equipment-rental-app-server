const Order = require("../../../models/order");

const GetAllOrdersController = async (req, res) => {
  try {
    const allOrders = await Order.find();
    if (allOrders.length === 0) {
      return res.status(400).json({ message: "No order created", type: "error" });
    }
    res.json({
      message: "All orders Listed",
      type: "success",
      ordersFound: allOrders,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, type: "error" });
  }
};
module.exports = GetAllOrdersController;