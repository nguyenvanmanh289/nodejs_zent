const { json } = require("body-parser")
const err = require("./middleware/errorHanding")
const service = require('../services/service.js')
const servicer = new service;

const productService = require('../services/productService.js')
const proServicer = new productService();

class CUSTOMER {

    read = async (req, res, next) => {
        try {
            let listUser = await servicer.readUser();
            res.send(listUser);
        }
        catch (err) {
            next(err);
        }
    }
    create = async (req, res, next) => {
        try {
            let object = {
                name: req.body.name,
                age: req.body.age,
                phoneNumber : req.body.phoneNumber,
                email : req.body.email,
                address : req.body.address,
                sex : req.body.sex
            }

            console.log(object);

            let a = await servicer.createUser(object) ? "created succed" : "failler to create";
            res.send(a)
        }
        catch (err) {
            // handle err handmade at here
            //...
            //auto passing to express
            next(err);
        }

    }
    update = async (req, res) => {
        //try{}
        let object = {
            name: req.body.name,
            age: req.body.age
        }
        let m = await servicer.updateUser(object);
        if (m) {
            res.send("update success")
        }
        else {
            res.send("false to update")
        }
        //catch
    }
    Delete = async (req, res) => {
        //fake err test
        let name = req.query.name;
        let a = await servicer.deleteUser(name) ? "delete succed" : "failer to delete";
        res.send(a);


    }
}


class PRODUCT {
    read = async (req, res, next) => {
        try {
            let listProduct = await proServicer.read();
            res.send(listProduct);
        }
        catch (err) {
            next(err);
        }
    }
    create = async (req, res, next) => {
        try {
            let object = {
                name: req.body.name,
                brand: req.body.brand,
                since: req.body.since,
                quantity:req.body.quantity,
                price: req.body.pric
            }
            console.log(object);

            let a = await proServicer.create(object) ? "created succed" : "failler to create";
            res.send(a)
        }
        catch (err) {
            next(err);
        }

    }
    update = async (req, res) => {
        let object = {
            name: req.body.name,
            since: req.body.since
        }
        let m = await proServicer.update(object);
        if (m) {
            res.send("update success")
        }
        else {
            res.send("false to update")
        }
    }
    Delete = async (req, res) => {
        let object = {
            name: req.query.name,
            since: req.query.since
        }
        let a = await proServicer.delete(object) ? "delete succed" : "failer to delete";
        res.send(a);
    }
}

module.exports = { CUSTOMER, PRODUCT };


