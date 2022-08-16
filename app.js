const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoutes');
const cookieParser =  require('cookie-parser');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
// view engine
app.set('view engine', 'ejs');

//database connection
const dbURI = 'mongodb+srv://binayak:pMMvfn1RdGMkttQC@blogapp.abvuqks.mongodb.net/auth?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000,()=>{
    console.log("listening");
  }))
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));
app.use(authRoute);

//cookies
app.get('/set-cookies', (req,res)=>{
  // res.setHeader('Set-Cookie', 'newUser=true');
  //cookie parser lets us use the cookie method to set the cookie 1st arg name and 2nd val
  res.cookie('newUser',false);
  res.cookie('isEmployee',false);
  res.send("you got the cookies");
});

app.get('/read-cookies', (req,res)=>{
  const cookies = req.cookies;
  console.log(cookies);
  res.json(cookies.newUser);
})