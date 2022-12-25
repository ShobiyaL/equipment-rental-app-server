const express = require('express')

const router = express.Router();

const SignUpController = require("../controllers/public/SignUpController");
const SignInController =require("../controllers/public/SignInController");
const SectionDataController = require("../controllers/public/SectionDataController");
const GetAllProductsController = require("../controllers/admin/product-crud/GetAllProductsController");
const GetSingleProductController = require("../controllers/admin/product-crud/GetSingleProductController");
const CategoryDataController = require("../controllers/public/CategoryDataController");
const ContactUsController = require("../controllers/public/ContactUsController");

const CreateOrderController = require("../controllers/payment/CreateOrderController");
const PaymentVerifyController = require("../controllers/payment/PaymentVerifyController")

router.post("/contactus", ContactUsController);

router.post('/signup', SignUpController);

router.post('/signin', SignInController);

router.get("/allProducts", GetAllProductsController);

router.get("/product/:productid", GetSingleProductController);

router.get('/section/:sectionName',SectionDataController)

router.get("/category/:categoryName", CategoryDataController);

//payment -Razorpay
router.post("/payment/orderCreate", CreateOrderController);

router.post("/payment/verifyPayment", PaymentVerifyController);

module.exports = router;