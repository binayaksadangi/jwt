const mongoose = require('mongoose');
//to validate an email we use this validator
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,"Please enter an Email"],
        unique: true,
        lowercase: true,
        validate: [isEmail,'Please enter a valid Email']
    },
    password:{
        type: String,
        required: [true,"Please enter a password"],
        minlength: [6,"Password must be 6 characters long"]
    }
})

const User = mongoose.model('user',userSchema);

module.exports = User;