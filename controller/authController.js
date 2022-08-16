//signup_get, signup_post, login_get, login_post
const User = require('../models/users')

//handel Errors
const handelError = (err)=>{
    console.log(err.message,err.code);
    let errors = { email: '', password:''};

    //duplicate error code
    if(err.code === 11000) {
        errors.email = 'that email is already registered'
    }

    //validation error
    if(err.message.includes('user validation failed')) {
        //we can't make it this way bcz every time we are going to get both the errors so sometimes it may crash the application
        // errors.email = err.errors.email.message;
        // errors.password = err.errors.password.message;
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
    }
    return errors;
}

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
        const errors = handelError(err);
        res.status(404).json({errors});
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