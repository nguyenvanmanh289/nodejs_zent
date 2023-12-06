const express = require('express');
const router = express.Router();
const userRouter = require('./routes.js');


router.use('/product',userRouter);

module.exports = router;
