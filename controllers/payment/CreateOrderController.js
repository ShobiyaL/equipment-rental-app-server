const RazorPay = require('razorpay')
const Order = require('../../models/order');

const CreateOrderController= async(req,res)=>{
 const {orderAmount, cartArray, email}=req.body;
 try{
    if (!orderAmount || !cartArray || !email) {
        return res
          .status(400)
          .json({ type: "error", message: "All fields are necessary" });
      }
      //save order details
    const orderSaved = await Order.create({
        orderAmount,
        cart: cartArray,
        email,
      });
      const orderReceipt = orderSaved._id;

      let instance = new RazorPay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      let options = {
        amount: orderAmount * 100, // amount in the smallest currency unit( 1 Rupee = 100 paisa )
        currency: "INR",
        receipt: orderReceipt, //maybe add orderdocument id value from db(future)
      };
      const orders = await instance.orders.create(options);
    //here store the orders.id to db with rest details
    await OrderCollection.findByIdAndUpdate(orderSaved._id, {
      orderIdGenerated: orders.id,
    });
    res.json({
      orderId: orders.id,
      razorpayKey: process.env.RAZORPAY_KEY_ID,
      orderAmount: orders.amount,
      orderReceipt,
      type: "success",
      message: "Payment process started...",
    });
 }catch(error){
    res.status(500).json({ message: error.message, type: "error" })
 }

}
module.exports = CreateOrderController;