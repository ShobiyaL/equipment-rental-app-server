const Product = require('../../../models/Product');

const GetSingleProductController = async(req,res)=>{
    const { productid }= req.params;
   
    try {
        if(!productid){
            return res.status(404).json({message: 'Product not found',type:"error"})
        }
        const product = await Product.findById(productid);
        
        if(!product){
            return res.status(404).json({message: 'Product not found',type:"error"})
        }
        res.json({message:"Fetched product",type:"success", product})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message,type:"error"})
    }
}
module.exports = GetSingleProductController;