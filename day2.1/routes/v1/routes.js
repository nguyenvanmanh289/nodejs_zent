const express = require('express');
const router = express.Router();
const Joi = require('joi');

const {CUSTOMER} = require('../../controller/requires.js')
const ob = new CUSTOMER();

const verifyToken = require('../../controller/middleware/verifyToken.js');
const patternSchema = Joi.object({
    name : Joi.string().required(),
    age : Joi.number().required(),
    phoneNumber: Joi.number(),
    email: Joi.string().email().required(),
    address : Joi.string().required(),
    sex: Joi.string().required()
})

const validCustomer = (req,res,next)=>{
    let ob = {
        name : req.body.name,
        age : req.body.age,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        address : req.body.address,
        sex : req.body.sex
    }
    console.log(ob)
    let {err,value} = patternSchema.validate(ob, {abortEarly:false});
    if (err) {
        const errorMessages = error.details.map((detail) => detail.message);
        return res.status(400).json({ errors: errorMessages });
      }
      // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
      req.body = value;
      next();
}
router.get('/get',ob.read);
router.post('/post',validCustomer,ob.create);
router.put('/put',validCustomer,verifyToken,ob.update);
router.delete('/delete',ob.Delete);
router.get("/",(req,res)=>{
    res.send('no data')
})

module.exports = router;