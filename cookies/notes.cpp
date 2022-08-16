//* COOKIES
//used to store the user data on user browser
 
//when a req send to server we can create a cookie at that moment
//and send to browser to save it
//here our cookie will hold a JWT

//to set cookies on browser
//app.get('/set-cookies', (req,res)=>{
//   res.setHeader('Set-Cookie', 'newUser=true');
//   res.send("you got the cookies");
// });