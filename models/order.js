const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    cart: {
      type: Array,
    },
    orderAmount: {
      type: Number,
    },
    orderIdGenerated: {
      type: String,
    },
    isPaymentSuccess: {
      type: Boolean,
    },
    razorpay_payment_id: {
      type: String,
    },
    razorpay_order_id: {
      type: String,
    },
    razorpay_signature: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;  