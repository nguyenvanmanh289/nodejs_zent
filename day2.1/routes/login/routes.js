const Joi = require('joi');
const express = require('express');
const router = express.Router();
const {LOGIN} = require('../../controller/requires')
const loginer = new LOGIN();

//verify token
const verifyToken = require('../../controller/middleware/verifyToken')

//khuon mau de validate data login
const ValidationSchema = Joi.object({
    username: Joi.string().alphanum().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});

// Middleware kiểm tra và xác thực dữ liệu
const validateUserData = (req, res, next) => {
    const { error, value } =ValidationSchema.validate(req.body, {abortEarly: false});
    console.log(error)
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors: errorMessages });
    }
    // Dữ liệu hợp lệ, gán lại vào req.body và chuyển đến middleware tiếp theo hoặc xử lý logic
    req.body = value;
    next();
};

router.post('/signup',validateUserData,loginer.createLogin);
router.post('/login',loginer.readLogin);
router.put('/editaccount',verifyToken,loginer.updateLogin);
router.delete('/deleteAccount',verifyToken,loginer.deleteLogin);
module.exports = router;