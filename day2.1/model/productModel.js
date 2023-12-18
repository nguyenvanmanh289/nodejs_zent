const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : String,
    since : Number
})

const Products = mongoose.model('Products',productSchema)
module.exports = Products;