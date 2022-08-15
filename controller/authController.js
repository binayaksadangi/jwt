//signup_get, signup_post, login_get, login_post
const User = require('../models/users')

const signup_get = (req,res)=>{
    res.render('signup');
}

const signup_post = async (req,res)=>{
    const {email,password} = req.body;
    
    try{
        //create a new user
        const user = await User.create({email,password});
        res.status(200).json(user);
    }
    catch (err) {
        console.log(err);
        res.status(404).send('error user not created');
    }
}

const login_get = (req,res)=>{
    res.render('login');
}

const login_post = (req,res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    res.send("user logged in")
}

module.exports = {
    signup_get, signup_post, login_get, login_post
}