const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoutes');
const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');
// app.listen(3000,()=>{
//   console.log("listening");
// });
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