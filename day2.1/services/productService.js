const Products = require ("../model/productModel.js");

class productService{
    read = async ()=>{
       let listproduct = await Products.find()
        return listproduct;
    }
    create = async (data) => {
        let product = new Products();
            product.name = data.name;
            product.brand = data.brand;
            product.since = data.since;
            product.quantity = data.quantity;
            product.price = data.price;
        let check = await product.save();
        return check;
    }
    update = async (data)=>{
       let check =  Products.updateOne({name : data.name} , {since : data.since});
       return check;
    }
    delete = async (data)=>{
        let check = Products.deleteOne({name : data.name , since : data.since})
        return check;
    }
}

module.exports = productService;