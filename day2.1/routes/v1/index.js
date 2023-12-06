const express = require('express');
const router = express.Router();
const userRouter = require('./routes.js');


router.use('/customer',userRouter);

module.exports = router;

