const Product = require('../../models/product');

const SectionDataController = async(req,res)=>{
    const { sectionName } = req.params;
    try {
        if (!sectionName) {
            res.status(404).json({ message: "No  such sectionName is present",type:"error"});
          }
          const sectionArray = await Product.find({section:sectionName})
          
    if (!sectionArray || sectionArray.length === 0) {
        res.status(404).json({
          message: "No Data available for given sectionName",
          type:"error"
        });
      }
      res.json({message:"Success",type:"success",sectionArray});
    } catch (error) {
        console.log(error);
        res.json({message:error.message, type:"error"});
    }
}

module.exports = SectionDataController;