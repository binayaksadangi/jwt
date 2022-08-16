const mongoose = require('mongoose');
//to hash the password
const hash = require('bcrypt');

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

//mongoose hooks pre and post
//fire a function after a new user is saved to database
userSchema.post('save',(doc, next)=>{
    console.log('new user was created and saved',doc);
    next();
})

//fire a function before doc saved (hashing)
userSchema.pre('save', async function (next){
    const salt = await hash.genSalt();
    this.password = await hash.hash(this.password,salt);
    next();
})

const User = mongoose.model('user',userSchema);

module.exports = User;