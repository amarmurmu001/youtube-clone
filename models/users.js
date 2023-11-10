const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        minlength:3,
        manlength:50,
    },
    email:{
        type: String,
        required:true,
        minlength:5,
        manlength:255,
    },
    password:{
        type: String,
        required:true,
        minlength:8,
        manlength:1024,
    },
});

const Users= mongoose.model("Users",userSchema);

module.exports.Users = Users;