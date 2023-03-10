 const Order = require("../../models/order");
const crypto = require("crypto");
const mailerFunc = require("../../utils/mailer");


const PaymentVerifyController = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id,razorpay_signature, orderId} = req.body;
  try {
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature || !orderId) {
      return res
        .status(400)
        .json({ type: "error", message: "No empty values allowed" });
    }
    //save data after verifying payment
    let body = razorpay_order_id + "|" + razorpay_payment_id;  
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body.toString())
      .digest("hex");

    let isPaymentVerified =
      expectedSignature === razorpay_signature ? true : false;

    if (!isPaymentVerified) {
      return res.status(400).json({
        message: "Payment not verified...try again.money deducted will be returned to your account within 3 to 5 days",
        type: "error",
      });
    }
    //since verified payment, saving it to orderCollection
    const orderFound = await Order.findOneAndUpdate(
      { orderIdGenerated: orderId },
      {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        isPaymentSuccess: true,
      }
    );
    if (!orderFound) {
      return res
        .status(400)
        .json({ message: "OrderId not found", type: "failure" });
    }
    const emailContent = `Payment made for order ${
      orderFound.cart.length > 1
        ? orderFound.cart.map((cartObj) => cartObj.name).join(" and ")
        : orderFound.cart[0].name
    } is successful`;

    await mailerFunc(
      emailContent,
      orderFound.email,
      "equipRentsApp-Payment Successful"
    );

    res.json({ message: "Payment successful", type: "success" });
  } catch (e) {
    res.status(500).json({ message: e.message, type: "error" });
  }
};
module.exports = PaymentVerifyController;