
const Product = require('../../../models/Product');

const DeleteProductController = async(req,res)=>{
    const {productid}=req.params;
    // console.log(productid);
    try {
        if (!productid) {
            return res.status(404).json({ message: "No Product Found" ,type:"error"});
          }
          const productFound = await Product.findById( productid);
          if(!productFound){
            return res.status(404).json({ message: "No Product Found",type:"error" });
          }
          await Product.deleteOne({ _id:productid })
          res.json({message:"Product Deleted...",type:"success"})
    } catch (error) {
        console.log(error)
        res.json({message:error.message,type:"error"})
    }

}
module.exports= DeleteProductController