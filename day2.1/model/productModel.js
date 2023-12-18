const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    brand : String,
    since : Number,
    quantity : Number,
    price : Number
})

const Products = mongoose.model('Products',productSchema)
module.exports = Products;