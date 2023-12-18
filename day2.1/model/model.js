const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String, 
    age : Number,
    phoneNumber : Number,
    email: String,
    addres: String,
    sex : String 
});

const User = mongoose.model("User",userSchema);

module.exports = User;