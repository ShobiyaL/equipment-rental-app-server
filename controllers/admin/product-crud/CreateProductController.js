const Product = require('../../../models/product');

const CreateProductController = async(req,res)=>{
  const {url, name, desc, section, category, qty, price}=req.body;
  try {
    if(!url || !name || !desc || !section || !category || !qty || !price){
        return res
        .status(404)
        .json({ message: "No empty Values Allowed" ,type:"error"});
    }
    const product = await Product.create({
        url,
      name,
      desc,
      section,
      category,
      qty,
      price,
    })
    if (!product) {
        return res
          .status(401)
          .send({ message: "Try Again, Couldnot save", type: "error" });
      }
      res.json({
        type:"success",
        message:"Successfully product added",
        productData:product
      })
  } catch (error) {
    console.log(error)
    res.status(500).json({message:error.message,type:"error"})
  }
}

module.exports = CreateProductController;