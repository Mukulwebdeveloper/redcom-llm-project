const mongoose = require("mongoose")
const userSchema =  mongoose.Schema({

    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    confirmPassword:{
        type: String
    },
});

// create user Model
const User = mongoose.model('users', userSchema );
module.exports = User;