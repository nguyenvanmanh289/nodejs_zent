const express = require('express');
const router = express.Router();

const userRoute = require('./routes.js');

router.use("/user",userRoute);

module.exports = router;