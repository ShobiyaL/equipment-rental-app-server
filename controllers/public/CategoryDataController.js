const Product = require('../../models/Product');

const CategoryDataController = async(req,res)=>{
    const {categoryName} = req.params;
    
    try {
        if (!categoryName) {
           return res
              .status(404)
              .json({ message: "No categoryName is present",type:"error" });
          }
          const categoryArray = await Product.find({
            category: categoryName,
          });
      
          if (!categoryArray || categoryArray.length === 0) {
            return res.status(404).json({
              message: "No Data available for given categoryName",
              type:"error"
            });
          }
      
          res.json({ message: "success",type:"success", categoryArray });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message,type:"error"})
    }
}
module.exports = CategoryDataController;