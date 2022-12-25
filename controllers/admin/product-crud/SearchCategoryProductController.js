const Product = require('../../../models/Product');

const SearchCategoryProductController = async (req, res) => {
  const { categoryValue } = req.body;
  try {
    if (!categoryValue) {
      return res
        .status(404)
        .json({ message: "No Category parameter available",type:"error" });
    }
    const productFound = await Product.find({
      category: categoryValue,
    });
    if (productFound.length === 0) {
      return res
        .status(404)
        .json({ message: "No Product Available",type:"error" });
    }
    res.json({
      message: "Fetched Product",
      productFound,
      type:"success"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message,type:"error"});
  }
};

module.exports = SearchCategoryProductController;