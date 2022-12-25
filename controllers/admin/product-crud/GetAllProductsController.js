const Product = require('../../../models/product');

const GetAllProductsController = async (req, res) => {
  try {
    const allProducts = await Product.find();
    if (!allProducts) {
      return res.status(404).json({ message: "Product not found",type:"error" });
    }
    res.json({ message: "Listed all products",type:"success", allProducts });
  } catch (error) {
    res.status(500).json({ message: error.message, type:"error" });
  }
};

module.exports = GetAllProductsController;
