const Product = require('../../../models/Product');

const UpdateProductController = async (req, res) => {
  const { productid } = req.params;
  const { name, price, qty } = req.body;

  try {
    if (!productid) {
      return res.status(404).json({ message: "No Product Found",type:"error" });
    }
    const productFound = await Product.findById(productid);
    if (!productFound) {
      return res.status(404).json({ message: "No Product Found",type:"error" });
    }
    const updateResponse = await Product.findByIdAndUpdate(productid, {
      name,
      price,
      qty,
    });
    if (!updateResponse) {
      return res
        .status(404)
        .json({ message: "Couldnot update Product, try again...",type:"error" });
    }
    res.json({ message: "Successfully updated product Info" ,type:"success" }); 
  } catch (error) {
    return res.status(500).json({ message: error.message,type:"error"});
  }
};
module.exports = UpdateProductController;