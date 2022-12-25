const express = require('express')

const router = express.Router();

const GetOrdersController = require("../controllers/private/GetOrdersController");
const GetProfileController = require("../controllers/private/GetProfileController");

router.get("/Getprofile", GetProfileController);

router.get("/GetOrders", GetOrdersController);

module.exports = router;