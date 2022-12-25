const express = require('express');
const router = express.Router();

//Message
const GetAllMsgController = require("../controllers/admin/GetAllMsgController");
const GetSingleMsgController = require("../controllers/admin/GetSingleMsgController");
const ReplyToMsgController = require("../controllers/admin/ReplyToMsgController");

//Product
const CreateProductController = require('../controllers/admin/product-crud/CreateProductController')
const GetAllProductsController = require('../controllers/admin/product-crud/GetAllProductsController')
const GetSingleProductController = require('../controllers/admin/product-crud/GetSingleProductController')
const UpdateProductController = require("../controllers/admin/product-crud/UpdateProductController");
const SearchCategoryProductController = require("../controllers/admin/product-crud/SearchCategoryProductController");
const DeleteProductController = require('../controllers/admin/product-crud/DeleteProductController')

//orders
const GetAllOrdersController = require("../controllers/admin/orders/GetAllOrdersController");

router.get("/allmsg", GetAllMsgController);

router.get("/msg/:id", GetSingleMsgController);

router.post("/msg/replyEmail", ReplyToMsgController);

router.post('/create-product',CreateProductController)

router.get("/allProducts", GetAllProductsController);

router.get("/product/:productid", GetSingleProductController);

router.put("/edit-product/:productid", UpdateProductController);

router.post("/categorysearch/", SearchCategoryProductController);

router.delete('/delete-product/:productid',DeleteProductController);

router.get("/allOrders", GetAllOrdersController);

module.exports = router;
