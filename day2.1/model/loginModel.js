const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: String, 
    password:String
});

const userLogin = mongoose.model("UserLogin",userSchema);

module.exports = userLogin;