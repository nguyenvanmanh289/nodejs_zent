const { json } = require("body-parser")
const err = require("./middleware/errorHanding.js")
const service = require('../services/service.js')
const servicer = new service;

const productService = require('../services/productService.js')
const proServicer = new productService();
const userLoginService = require('../services/loginService.js')
const userLogin = new userLoginService();

require('dotenv').config();
//json webtoken
const jwt = require('jsonwebtoken');
//vẻify token
const verifyToken = require('../controller/middleware/verifyToken.js');

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
            let token = jwt.sign({name : req.body.name},process.env.SECRET_KEY);

            res.status(200).json({
                message : "tao user thanh cong",
                token : token
            })
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

class LOGIN{
    async readLogin(req,res,next){
       try{
         let result = await userLogin.read(req.body);
         if(result){
            let token = jwt.sign(req.body,process.env.SECRET_KEY);
             res.status(200).json({
                 message: "dang nhap thanh cong",
                 info: req.body,
                 token : token
             })
         }
        else{
            res.status(404).json({
                message: "dang nhap that bai",
                info: req.body,
            })
        }
    
       }
       catch(err){
            next(err);
        }
    }
    async createLogin(req,res,next){
       try{
         let result = await userLogin.create(req.body);
        
         if(result){
            let token = jwt.sign(req.body,process.env.SECRET_KEY);
            res.status(200).json({
                message: "tạo tài khoản thành công",
                authorization : `Bearer ${token}`
            })
         }
         else{
            res.status(404).json({
                message: "da ton tai tai khoan nay"
            })
         }     
       }
       catch(err){
            next(err);
        }
    }
    async updateLogin(err,req,res,next){
       try{
         let result = await userLogin.update(req.body);
        res.send(result);
       }
       catch(err){
            next(err);
        }
    }
    async deleteLogin(err,req,res,next){
       try{
         let result = await userLogin.delete(req.query);
        res.send(result);
       }
       catch(err){
            next(err);
        }
    }
}
module.exports = { CUSTOMER, PRODUCT,LOGIN };


