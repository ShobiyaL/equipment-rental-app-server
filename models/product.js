const mongoose = require('mongoose')

const productSchema= new mongoose.Schema({
    url: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      desc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      section: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product',productSchema);

module.exports =Product;