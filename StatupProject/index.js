//importing the express package
const express=require('express');
//importing the passport and passport-goole-oauth2.0 library for google authentication
const passport=require('passport');
const Googlestrategy=require('passport-google-oauth20').Strategy;
const app=express(); // in app object we have all the features of express
const keys=require('./config/keys');


//keys.googleClientID
//keys.googleClientSecret

//passsort don't no which strategy need to use for app so by this 'loc' we are telling to passport.
passport.use(
  new Googlestrategy(
  {
  clientID: '65231057476-lkbpg9ogd3n46nqkdopcu9g7j0s25cfg.apps.googleusercontent.com',
  clientSecret: 'P_VeB574z91DfLEzD3-86n09',
  callbackURL: '/auth/google/callback'
 },
 (accessToken,refreshToken,profile,done) => {
  console.log('accessToken',accessToken);
    console.log('refreshToken',refreshToken);
      console.log('profile',profile);
      //  console.log(done);
})
);
//route handler for google authentication
app.get('/auth/google',passport.authenticate('google',{
  scope:['profile','email']
}));

//to extract some user information using google code
app.get('/auth/google/callback',passport.authenticate('google'));
//now if you want to deploy your app(code) into server(Heroku(currentky for this app we are using),AWS,MICROSOFT AZURE)
// to listen heroku port
const PORT=process.env.PORT || 5000; // if heroku port not avialable then it will go for 5000 port(OR condition)
//opening port for listining http request
app.listen(PORT);





//console.developers.google.com()
// route handler with error function(which have request and response object)
/*app.get('/', (req,res)=>
{
  res.send({ Name:'Abhishek Sharma',Gender:'Male',Title:'Software Engineer'});
});*/
//Heroku APP link which we created using heroku CLI
// https://pacific-anchorage-30209.herokuapp.com/ | https://git.heroku.com/pacific-anchorage-30209.git
