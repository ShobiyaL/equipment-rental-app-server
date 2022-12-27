const express = require('express')

const router = express.Router();

const GetOrdersController = require("../controllers/private/GetOrdersController");
const GetProfileController = require("../controllers/private/GetProfileController");

router.get("/getProfile", GetProfileController);

router.get("/getOrders", GetOrdersController);

module.exports = router;